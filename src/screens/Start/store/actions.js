const FETCH_HOME_PENDING = "FETCH_HOME_PENDING";
const FETCH_HOME_SUCCESS = "FETCH_HOME_SUCCESS";
const FETCH_HOME_FAIL = "FETCH_HOME_FAIL";

function fetchHomePending() {
    return {
        type: FETCH_HOME_PENDING,
    };
}

function fetchHomeFail(error) {
    return {
        type: FETCH_HOME_FAIL,
        payload: error,
    };
}

function fetchHomeSuccess(data) {
    return {
        type: FETCH_HOME_SUCCESS,
        payload: data,
    };
}

export {
    fetchHomePending,
    fetchHomeFail,
    fetchHomeSuccess,
    FETCH_HOME_PENDING,
    FETCH_HOME_SUCCESS,
    FETCH_HOME_FAIL,
};
