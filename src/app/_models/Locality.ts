
export interface LocalityResponse {
    data: Locality[]
}

export interface SingleLocalityResponse {
    data: Locality
}

export interface Locality {
    id: number
    name: string
}