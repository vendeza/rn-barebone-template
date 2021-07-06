import React from "react";
import {store} from "../../config";
import {Provider} from "react-redux";
import App from "../../App";

const Boot = (Wrapper) => (props) => {
    return (
        <Provider store={store}>
            <Wrapper {...props} />
        </Provider>
    );
};

export default Boot(App);
