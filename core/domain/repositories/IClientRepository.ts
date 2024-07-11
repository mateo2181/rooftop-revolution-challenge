import type { Client } from "../models/Client";

export interface IClientRepository {
    getClients: () => Promise<Client[]>;
    getClientByCups: (cups: number) => Promise<Client | undefined>;
}