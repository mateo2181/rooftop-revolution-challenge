interface Power {
    p1: string,
    p2: string,
}

export interface SupplyPoint {
    cups: number,
    tariff: string,
    invoiced_amount: string,
    power: Power,
    neighbors: string[]
}