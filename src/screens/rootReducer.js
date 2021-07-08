import {combineReducers} from "redux";
import {strategyScreenerReducer} from "./Start/store/reducer";
import {optionsScreenerReducer} from "./Challenges/store/reducer";
import {mainReducer} from "./mainStore/reducer";

const appReducer = combineReducers({
    strategyScreenerReducer,
    optionsScreenerReducer,
    mainReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
