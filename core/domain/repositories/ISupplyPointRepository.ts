import type { SupplyPoint } from "../models/SupplyPoint";

export interface ISupplyPointRepository {
    getSupplyPoints: () => Promise<SupplyPoint[]>;
    getSuppyPointByCups: (cups: number) => Promise<SupplyPoint | undefined>;
}