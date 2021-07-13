import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducer from "./src/screens/rootReducer";

const conf = {
    key: "root",
    storage: AsyncStorage,
    whitelist: [],
};

const pReducer = persistReducer(conf, rootReducer);
const middleware = applyMiddleware(thunk, logger);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);

export { store, persistor };
