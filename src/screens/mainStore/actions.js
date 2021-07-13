const PENDING = "PENDING";
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";
const FETCH_CARS_FAIL = "FETCH_CARS_FAIL";
const FETCH_CARS_SUCCESS = "FETCH_CARS_SUCCESS";

function pending() {
    return {
        type: PENDING,
    };
}

function userLoginSuccess(user) {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: user,
    };
}

function userLogoutSuccess() {
    return {
        type: USER_LOGOUT_SUCCESS,
    };
}

function fetchCarsFail() {
    return {
        type: FETCH_CARS_FAIL,
    };
}

function fetchCarsSuccess() {
    return {
        type: FETCH_CARS_SUCCESS,
    };
}

export {
    PENDING,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_SUCCESS,
    FETCH_CARS_SUCCESS,
    FETCH_CARS_FAIL,
    pending,
    userLoginSuccess,
    userLogoutSuccess,
    fetchCarsFail,
    fetchCarsSuccess,
};
