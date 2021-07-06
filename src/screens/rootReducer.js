import {combineReducers} from "redux";
import {strategyScreenerReducer} from "./StrategyScreener/store/reducer";
import {optionsScreenerReducer} from "./OptionsScreener/store/reducer";
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
