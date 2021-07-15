import {combineReducers} from "redux";
import {mainReducer} from "./mainStore/reducer";
import {tripInfoReducer} from "./TripDetails/store/reducer"
const appReducer = combineReducers({
    mainReducer,
    tripInfoReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
