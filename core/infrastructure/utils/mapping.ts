import type { Client } from "~/core/domain/models/Client";
import type { SupplyPoint } from "~/core/domain/models/SupplyPoint";
import type { ClientDTO } from "../dto/ClientDTO";
import type { SupplyPointDTO } from "../dto/SupplyPointDTO";

const mapClientDTOToClient = (clientDTO: ClientDTO): Client => {
    return {
        ...clientDTO,
        cups: Number(clientDTO.cups)
    }
}

const mapSupplyPointDTOToSupplyPoint = (supplyPointDTO: SupplyPointDTO): SupplyPoint => {
    return {
        ...supplyPointDTO,
        cups: Number(supplyPointDTO.cups)
    }
}

export {
    mapClientDTOToClient,
    mapSupplyPointDTOToSupplyPoint
}