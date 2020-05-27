import axios from 'axios';
import { normalizeRestaurants } from './ApiNormalizers';
import { shuffleArray } from '../utils';
import { fetchRestaurantsPending, fetchRestaurantsSuccess, fetchRestaurantsError } from '../actions';
/**
 * Connect to Category API and fetch restaurants by City
 * Logs the error if happens
 */
export const fetchRestaurantsByCity = async (dispatch, city) => {
    // Get All Gategories
    dispatch(fetchRestaurantsPending());
    const apiUrlWithParam = `http://opentable.herokuapp.com/api/restaurants?city=${city}`;
    return await axios.get(apiUrlWithParam).then(resp => {
        const restaurantsObj = normalizeRestaurants(resp.data);
        dispatch(fetchRestaurantsSuccess(restaurantsObj));
        return restaurantsObj;
    }).catch(function (error) {
        // handle error
        console.log('API: Error occured in fetching data: ', error);
        dispatch(fetchRestaurantsError(error));
    });
}
