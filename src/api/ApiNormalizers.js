export const normalizeRestaurants = resp => {
    if (!resp.restaurants) return null;
    return resp.restaurants.map(rst => {
        return {
            id: rst.id,
            name: rst.name,
            fullAddress: {
                address: rst.address,
                city: rst.city,
                state: rst.state,
                area: rst.area,
                postalCode: rst.postal_code,
                country: rst.country,
            },
            phone: rst.phone,
            lat: rst.lat,
            lng: rst.lng,
            price: rst.price,
            reserveUrl: rst.reserve_url,
            mobileReserveUrl: rst.mobile_reserve_url,
            imageUrl: rst.image_url
        };
    });
};
