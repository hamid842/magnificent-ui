export interface INewProperty {
    Title: string;
    property_type:string;
    explanation?: string;
    price: number;
    minNights: number;
    maxNights: number;
    bedroomsNumber: number;
    bedsNumber: number;
    bathroomsNumber: number;
    personCapacity?:number;
    squareMeters?:number;
}