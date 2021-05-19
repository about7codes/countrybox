import { GET_COUNTRIES_FAILURE, GET_COUNTRIES_LOADING, GET_COUNTRIES_SUCCESS } from "../actions/actionTypes";

const initialState = {
    loading: false,
    countries: [],
    errorMsg: ''
};

const countryReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES_LOADING:
            return {
                ...state,
                loading: true,
                errorMsg: ''
            };

        case GET_COUNTRIES_FAILURE:
            return {
                ...state,
                loading: false,
                errorMsg: 'Error 404, no data found...'
            };
        
        case GET_COUNTRIES_SUCCESS:
            return {
                ...state,
                loading: false,
                errorMsg: '',
                countries: [...action.payload],
            };
            
        default:
            return state;
    }
}

export default countryReducer;