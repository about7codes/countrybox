import { combineReducers } from "redux";
import countryReducer from "./countryReducer";

const rootReducer = combineReducers({
    countries: countryReducer
});

export default rootReducer;