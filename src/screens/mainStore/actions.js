const PENDING = "PENDING";
const FETCH_TICKERS_SUCCESS = "FETCH_TICKERS_SUCCESS";
const FETCH_TICKERS_FAIL = "FETCH_FAIL";
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";

function pending() {
    return {
        type: PENDING,
    };
}

function fetchTickersFail(error) {
    return {
        type: FETCH_TICKERS_FAIL,
        payload: error,
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

function fetchTickersSuccess(data) {
    return {
        type: FETCH_TICKERS_SUCCESS,
        payload: data,
    };
}

export {
    PENDING,
    FETCH_TICKERS_SUCCESS,
    FETCH_TICKERS_FAIL,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_SUCCESS,
    pending,
    fetchTickersFail,
    fetchTickersSuccess,
    userLoginSuccess,
    userLogoutSuccess,
};
