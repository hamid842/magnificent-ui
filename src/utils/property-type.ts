export interface GeneralInformation {
}

export interface Address {
    id: number;
    address: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
}

export interface Contact {
    id: number;
    contactName: string;
    contactSurName: string;
    contactPhone1: string;
    contactPhone2?: any;
    contactEmail?: any;
    contactAddress?: any;
}

export interface AmenitiesAttributes {
    name: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

export interface AmmenitiesData {
    id: number;
    attributes: AmenitiesAttributes;
}

export interface Amenities {
    data: AmmenitiesData[];
}

export interface Attributes3 {
    name: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

export interface Datum2 {
    id: number;
    attributes: Attributes3;
}

export interface BedTypes {
    data: Datum2[];
}

export interface Geolocation {
    id: number;
    latitude: number;
    longitude: number;
}

export interface ImageType {
    id: number;
    caption:string;
    url:string;
    sortOrder:number;
}

export interface Attributes {
    Title: string;
    generalInformation: GeneralInformation;
    explanation: string;
    locationAndAccessibleInformation?: any;
    frequentTravelers?: any;
    price: number;
    minNights: number;
    maxNights: number;
    guestsIncluded: number;
    priceForExtraPerson: number;
    currencyCode: string;
    personCapacity: number;
    checkInTimeStart: number;
    checkInTimeEnd?: any;
    checkOutTime: number;
    squareMeters?: any;
    roomType: string;
    bathroomType: string;
    bedroomsNumber: number;
    bedsNumber: number;
    bathroomsNumber: number;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: string;
    images: ImageType[];
    address: Address;
    contact: Contact;
    amenities: Amenities;
    bed_types: BedTypes;
    geolocation: Geolocation;
}

export interface Property {
    id:string;
    attributes:Attributes;
}

export interface PropertyTypeAttributes {
    name:string;
    createdAt?:Date;
    updatedAt?:Date;
    publishedAt?:Date
}

export interface PropertyType {
    id:number;
    attributes:PropertyTypeAttributes
}

export interface IPagination {
    page:number;
    pageSize:number;
    pageCount:number;
    total:number
}
