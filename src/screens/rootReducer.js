import {combineReducers} from "redux";
import {homeReducer} from "./Start/store/reducer";
import {browseReducer} from "./Rewards/store/reducer";
import {mainReducer} from "./mainStore/reducer";
import {tripInfoReducer} from "./TripDetails/store/reducer"
const appReducer = combineReducers({
    homeReducer,
    browseReducer,
    mainReducer,
    tripInfoReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
