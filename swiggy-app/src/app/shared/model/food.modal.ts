export interface hotelDetails {
    id: string,
    hotelName: string;
    rating: number;
    imageUrl: string;
    mins: string;
}

export interface foodDet {
        cash: string;
        city: string;
        cost: string;
        dishType: string;
        hotelName: string;
        id: string;
        imageUrl: string;
        km: string;
        mins: string;
        off: string;
        rating: string;
        upto: string;
        coupon: string;
        above: string;
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

export interface pastOrder {
    hotelName: string;
    city: string;
    price: string;
    date: string;
}


export interface foodDetails {
    foodDetails: foodDet;
}