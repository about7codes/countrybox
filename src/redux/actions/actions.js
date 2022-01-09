import axios from "axios";

import { GET_COUNTRIES_FAILURE, GET_COUNTRIES_LOADING, GET_COUNTRIES_SUCCESS } from "./actionTypes";

export const getCountries = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_COUNTRIES_LOADING,
        });

        const res = await axios.get('https://restcountries.com/v2/all');

        dispatch({
            type: GET_COUNTRIES_SUCCESS,
            payload: res.data,
        });
        
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_COUNTRIES_FAILURE,
        });
    }
}