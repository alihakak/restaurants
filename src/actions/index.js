/**
 * Redux Actions for fetching restaurants
 */



export const FETCH_RESTAURANTS_PENDING = 'FETCH_RESTAURANTS_PENDING';
export const FETCH_RESTAURANTS_SUCCESS = 'FETCH_RESTAURANTS_SUCCESS';
export const FETCH_RESTAURANTS_ERROR = 'FETCH_RESTAURANTS_ERROR';

export const fetchRestaurantsPending = () => {
    return {
        type: FETCH_RESTAURANTS_PENDING
    }
}

export const fetchRestaurantsSuccess = (restaurants) => {
    return {
        type: FETCH_RESTAURANTS_SUCCESS,
        restaurants: restaurants
    }
}

export const fetchRestaurantsError = (error) => {
    return {
        type: FETCH_RESTAURANTS_ERROR,
        error: error
    }
}