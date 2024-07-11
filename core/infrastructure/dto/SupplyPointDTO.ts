interface PowerDTO {
    p1: string,
    p2: string,
}

export interface SupplyPointDTO {
    cups: string,
    tariff: string,
    invoiced_amount: string,
    power: PowerDTO,
    neighbors: string[]
}