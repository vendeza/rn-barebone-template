import {
    fetchTickersFail,
    fetchTickersSuccess,
    pending,
    userLoginSuccess,
    userLogoutSuccess,
} from "./actions";

import {getTickersArray} from "../../server/api/strategyScreener";

export function fetchTickers(headers) {
    return (dispatch) => {
        dispatch(pending());
        return getTickersArray(headers)
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                dispatch(fetchTickersSuccess(res));
                return res;
            })
            .catch((error) => dispatch(fetchTickersFail(error)));
    };
}

export function userLogin(user) {
    return (dispatch) => {
        dispatch(userLoginSuccess(user));
    };
}

export function userLogout() {
    return (dispatch) => {
        dispatch(userLogoutSuccess());
    };
}
