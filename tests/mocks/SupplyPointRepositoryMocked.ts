import type { ISupplyPointRepository } from '~/core/domain/repositories/ISupplyPointRepository';
import { mapSupplyPointDTOToSupplyPoint } from '../../core/infrastructure/utils/mapping';
import type { SupplyPointDTO } from '../../core/infrastructure/dto/SupplyPointDTO';

export const SupplyPointRepositoryMocked = (supplyPoints: SupplyPointDTO[]): ISupplyPointRepository => ({
    getSupplyPoints: async () => {
        return supplyPoints.map((s: SupplyPointDTO) => mapSupplyPointDTOToSupplyPoint(s));
    },

    getSuppyPointByCups: async (cups) => {
        const supplypoint = supplyPoints.find(sp => Number(sp.cups) === cups);
        return supplypoint ? mapSupplyPointDTOToSupplyPoint(supplypoint) : undefined;
    }
});