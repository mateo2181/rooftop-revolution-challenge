import type { IClientRepository } from '~/core/domain/repositories/IClientRepository';
import type { ClientDTO } from '../../core/infrastructure/dto/ClientDTO';
import { mapClientDTOToClient } from '../../core/infrastructure/utils/mapping';

export const ClientRepositoryMocked = (clients: ClientDTO[]): IClientRepository => ({
    getClients: async () => {
        return clients.map((c: ClientDTO) => mapClientDTOToClient(c));
    },

    getClientByCups: async (cups) => {
        const client = clients.find(client => Number(client.cups) === cups);
        return client ? mapClientDTOToClient(client) : undefined;
    }
});