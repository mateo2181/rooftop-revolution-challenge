import type { Client } from "../models/Client";
import type { Offer } from "../models/Offer";
import type { SupplyPoint } from "../models/SupplyPoint";

interface ClientAndOfferResponse {
    client: Client,
    supplyPoint: SupplyPoint,
    offer: Offer | null
}

interface ErrorResponse {
    error: string
}

export interface IClientService {
    getNeighborsSupplyPoints(clientSupplyPoint: SupplyPoint, supplyPoints: SupplyPoint[]): SupplyPoint[],
    canGetOffer(client: Client, clientSupplyPoint: SupplyPoint): boolean,
    canGetSpecialDiscount(supplyPointsNeighbors: SupplyPoint[]): boolean,
    canGetBasicDiscount(clientSupplyPoint: SupplyPoint, supplyPointsNeighbors: SupplyPoint[]): boolean,
    getClientByCUPSAndPossibleOffer(cups: number): Promise<ClientAndOfferResponse | ErrorResponse>;
  }