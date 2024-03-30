import { Locality } from "./Locality"

export interface EntityResponse {
    data: EntityResponseData
}

export interface SingleEntityResponse {
    data: Entity
}

export interface EntityResponseData {
    count: number
    data: Entity[]
}

export interface Entity {
    id: number
    name: string
    nif: number
    locality: Locality
}