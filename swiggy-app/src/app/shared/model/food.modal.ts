export interface hotelDetails {
    hotelName: string;
    rating: number;
    imageUrl: string;
    mins: string;
}

export interface popularItem {
    foodName: string;
    imageUrl: string;
}

export interface todayOffer {
    imageUrl: string;
}

export interface popularBrands {
    brandImage: string;
    brandName: string;
    time: string;
    offer: string;
    limit: string;
}

export interface popularCuisines {
    imageUrl: string;
    foodName: string;
}