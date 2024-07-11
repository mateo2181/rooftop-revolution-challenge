import { PLANS } from "../constants/plans";
import type { Client } from "../models/Client";
import type { Offer } from "../models/Offer";
import type { SupplyPoint } from "../models/SupplyPoint";
import type { IClientRepository } from "../repositories/IClientRepository";
import type { ISupplyPointRepository } from "../repositories/ISupplyPointRepository";
import type { IClientService } from "./IClientService";

export class ClientService implements IClientService {

    private clientRepository: IClientRepository;
    private supplyPointRepository: ISupplyPointRepository;

    constructor(clientRepository: IClientRepository, supplyPointRepository: ISupplyPointRepository) {
        this.clientRepository = clientRepository;
        this.supplyPointRepository = supplyPointRepository;
    }

    getNeighborsSupplyPoints(clientSupplyPoint: SupplyPoint, supplyPoints: SupplyPoint[]): SupplyPoint[] {
        return supplyPoints.filter(sp => clientSupplyPoint.neighbors.includes(sp.cups.toString()));
    }

    canGetOffer(client: Client, clientSupplyPoint: SupplyPoint) {
        return client.building_type === 'house' && clientSupplyPoint.neighbors.length > 0;
    }

    canGetSpecialDiscount(supplyPointsNeighbors: SupplyPoint[]): boolean {
        const totalInvoicedAmount = supplyPointsNeighbors.reduce((total, neighbor) => total + Number(neighbor.invoiced_amount), 0);
        return totalInvoicedAmount > 100 ? true : false;
    }

    canGetBasicDiscount(clientSupplyPoint: SupplyPoint, supplyPointsNeighbors: SupplyPoint[]): boolean {
        const hasBasicDiscount = supplyPointsNeighbors.every(neighbor => (Number(neighbor.power.p1) < Number(clientSupplyPoint.power.p1) && Number(neighbor.power.p2) < Number(clientSupplyPoint.power.p2)));
        return hasBasicDiscount;
    }

    async getClientByCUPSAndPossibleOffer(cups: number) {
        const client = await this.clientRepository.getClientByCups(cups);
        const clientSupplyPoint = await this.supplyPointRepository.getSuppyPointByCups(cups);
        if (!client) {
            return { error: 'Client not found' };
        }
        if (!clientSupplyPoint) {
            return { error: 'Supply Point not found' };
        }
        if (!this.canGetOffer(client, clientSupplyPoint)) {
            return {
                client,
                supplyPoint: clientSupplyPoint,
                offer: null
            }
        }
        const supplyPoints = await this.supplyPointRepository.getSupplyPoints();
        const supplyPointsNeighbors = this.getNeighborsSupplyPoints(clientSupplyPoint, supplyPoints);
        if (this.canGetSpecialDiscount(supplyPointsNeighbors)) {
            return {
                client,
                supplyPoint: clientSupplyPoint,
                offer: PLANS['special']
            };
        }
        if (this.canGetBasicDiscount(clientSupplyPoint, supplyPointsNeighbors)) {
            return {
                client,
                supplyPoint: clientSupplyPoint,
                offer: PLANS['basic']
            };
        }
        return {
            client,
            supplyPoint: clientSupplyPoint,
            offer: PLANS['standard']
        }
    }
};