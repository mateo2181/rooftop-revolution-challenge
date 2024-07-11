import { ClientDTO } from "~/core/infrastructure/dto/ClientDTO";
import { SupplyPointDTO } from "~/core/infrastructure/dto/SupplyPointDTO";
import { ClientRepositoryMocked } from "./mocks/ClientRepositoryMocked";
import { SupplyPointRepositoryMocked } from "./mocks/SupplyPointRepositoryMocked";
import { PLANS } from "../core/domain/constants/plans";
import { ClientService } from "../core/domain/services/ClientService";

describe('ClientService', () => {
    let mockClientRepository;
    let mockSupplyPointRepository;
    let clientService: ClientService;
    let clients: ClientDTO[] = [];
    let supplyPoints: SupplyPointDTO[] = [];

    beforeAll(() => {
        clients = [
            {
                "full_name": "Terry Evans",
                "address": "Potato street, 4",
                "cups": "123456",
                "role": "customer",
                "building_type": "house"
            },
            {
                "full_name": "Mark Soljkaer",
                "address": "Potato street, 4",
                "cups": "321654",
                "role": "customer",
                "building_type": "house"
            },
            {
                "full_name": "John Cole",
                "address": "Potato street, 4",
                "cups": "345678",
                "role": "customer",
                "building_type": "house"
            },
            {
                "full_name": "Richard Mount",
                "address": "Swede street, 7",
                "cups": "989898",
                "role": "customer",
                "building_type": "house"
            }
        ];

        supplyPoints = [
            {
                "cups": "123456",
                "tariff": "One price",
                "invoiced_amount": "50.00",
                "power": {
                    "p1": "4500",
                    "p2": "4200"
                },
                "neighbors": ["321654", "345678"]
            },
            {
                "cups": "321654",
                "tariff": "One price",
                "invoiced_amount": "68.00",
                "power": {
                    "p1": "4200",
                    "p2": "4200"
                },
                "neighbors": ["123456"]
            },
            {
                "cups": "345678",
                "tariff": "One price",
                "invoiced_amount": "40.00",
                "power": {
                    "p1": "5500",
                    "p2": "5800"
                },
                "neighbors": ["123456"]
            },
            {
                "cups": "989898",
                "tariff": "Three prices",
                "invoiced_amount": "10.00",
                "power": {
                    "p1": "4700",
                    "p2": "4500"
                },
                "neighbors": []
            }
        ];

        mockClientRepository = ClientRepositoryMocked(clients);
        mockSupplyPointRepository = SupplyPointRepositoryMocked(supplyPoints);
        clientService = new ClientService(mockClientRepository, mockSupplyPointRepository);
    });

    it(`Should return a client and the supply point with the 'special discount' offer`, async () => {
        const result = await clientService.getClientByCUPSAndPossibleOffer(123456);
        expect(result.client?.full_name).toBe(clients[0].full_name);
        expect(result.supplyPoint?.cups).toBe(Number(supplyPoints[0].cups));
        expect(result.offer?.name).toBe(PLANS['special'].name);
    });

    it(`Should return a client and the supply point with the 'basic discount' offer`, async () => {
        const result = await clientService.getClientByCUPSAndPossibleOffer(345678);
        expect(result.client?.full_name).toBe(clients[2].full_name);
        expect(result.supplyPoint?.cups).toBe(Number(supplyPoints[2].cups));
        expect(result.offer?.name).toBe(PLANS['basic'].name);
    });

    it(`Should return a client and the supply point with the 'standard discount' offer`, async () => {
        const result = await clientService.getClientByCUPSAndPossibleOffer(321654);
        expect(result.client?.full_name).toBe(clients[1].full_name);
        expect(result.supplyPoint?.cups).toBe(Number(supplyPoints[1].cups));
        expect(result.offer?.name).toBe(PLANS['standard'].name);
    });

    it(`Should return a client and the supply point with no offer`, async () => {
        const result = await clientService.getClientByCUPSAndPossibleOffer(989898);
        expect(result.client?.full_name).toBe(clients[3].full_name);
        expect(result.supplyPoint?.cups).toBe(Number(supplyPoints[3].cups));
        expect(result.offer).toBeNull();
    });

    it(`Should return an error when the client with the cups does not exist`, async () => {
        const result = await clientService.getClientByCUPSAndPossibleOffer(555444);
        expect(result.error).toBeDefined();
    });

});