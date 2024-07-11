import axios from 'axios';

import type { ISupplyPointRepository } from '~/core/domain/repositories/ISupplyPointRepository';
import { mapSupplyPointDTOToSupplyPoint } from '../utils/mapping';
import type { SupplyPointDTO } from '../dto/SupplyPointDTO';

export const supplyPointRepositoryApi = (): ISupplyPointRepository => ({
    getSupplyPoints: async () => {
        const res = await axios.get<Array<SupplyPointDTO>>('/api/supply-points');
        return res.data.map((s: SupplyPointDTO) => mapSupplyPointDTOToSupplyPoint(s));
    },

    getSuppyPointByCups: async (cups) => {
        const res = await axios.get<SupplyPointDTO>(`/api/supply-points/${cups}`);
        const supplypoint = res.data;
        return supplypoint ? mapSupplyPointDTOToSupplyPoint(supplypoint) : undefined;
    }
});