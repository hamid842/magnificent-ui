export const DATE_FORMAT = "YYYY-MM-DD";

export interface IGeneralInformation {
}

export interface IAddress {
    id: number;
    address: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
}

export interface IContact {
    id: number;
    contactName: string;
    contactSurName: string;
    contactPhone1: string;
    contactPhone2?: any;
    contactEmail?: any;
    contactAddress?: any;
}

export interface IAmenitiesAttributes {
    name: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    category:string;
    icon:string;
}

export interface IAmenitiesData {
    id: number;
    attributes: IAmenitiesAttributes;
}

export interface IAmenities {
    data: IAmenitiesData[];
}

export interface IBedTypeAttributes {
    name: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

export interface IBedTypeData {
    id: number;
    attributes: IBedTypeAttributes;
}

export interface IBedTypes {
    data: IBedTypeData[];
}

export interface IGeolocation {
    id: number;
    latitude: number;
    longitude: number;
}

export interface IImageType {
    id: number;
    caption:string;
    url:string;
    sortOrder:number;
}

export interface IPropertyAttributes {
    Title: string;
    generalInformation: IGeneralInformation;
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
    images: IImageType[];
    address: IAddress;
    contact: IContact;
    amenities: IAmenities;
    bed_types: IBedTypes;
    geolocation: IGeolocation;
    reviews: { data: IReview[] };
}

export interface IProperty {
    id:string;
    attributes:IPropertyAttributes;
}

export interface IPropertyTypeAttributes {
    name:string;
    createdAt?:Date;
    updatedAt?:Date;
    publishedAt?:Date
}

export interface PropertyType {
    id:number;
    attributes:IPropertyTypeAttributes
}

export interface IReview {
    id: number,
    attributes: {
        text: string,
        rating: number,
        userName: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        userPhoto: string,
        inHomePage: boolean
    }
}

export interface IAllPropertyTypes {
    id:number;
    name:string
}
