import axios from 'axios';

import type { IClientRepository } from '~/core/domain/repositories/IClientRepository';
import type { ClientDTO } from '../dto/ClientDTO';
import { mapClientDTOToClient } from '../utils/mapping';

export const clientRepositoryApi = (): IClientRepository => ({
    getClients: async () => {
        const res = await axios.get<Array<ClientDTO>>('/api/clients');
        return res.data.map((c: ClientDTO) => mapClientDTOToClient(c));
    },

    getClientByCups: async (cups) => {
        const res = await axios.get<ClientDTO>(`/api/clients/${cups}`);
        const client = res.data;
        return client ? mapClientDTOToClient(client) : undefined;
    }
});