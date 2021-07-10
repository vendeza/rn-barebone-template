import {
    fetchCarsFail,
    fetchCarsSuccess,
    pending,
    userLoginSuccess,
    userLogoutSuccess,
} from "./actions";

import {getCars} from "../../server/api/cars";

export function fetchCars({filters}) {
    return (dispatch) => {
        dispatch(pending());
        return getCars({filters})
            .then(async (response) => {
                if (response.error) {
                    throw response.error;
                }

                dispatch(fetchCarsSuccess(response));
                return response;
            })
            .catch((error) => dispatch(fetchCarsFail(error)));
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
