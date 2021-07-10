import {combineReducers} from "redux";
import {homeReducer} from "./Home/store/reducer";
import {browseReducer} from "./Browse/store/reducer";
import {mainReducer} from "./mainStore/reducer";

const appReducer = combineReducers({
    homeReducer,
    browseReducer,
    mainReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
