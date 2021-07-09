const FETCH_BROWSE_PENDING = "FETCH_BROWSE_PENDING";
const FETCH_BROWSE_SUCCESS = "FETCH_BROWSE_SUCCESS";
const FETCH_BROWSE_FAIL = "FETCH_BROWSE_FAIL";

function fetchBrowsePending() {
    return {
        type: FETCH_BROWSE_PENDING,
    };
}

function fetchBrowseFail(error) {
    return {
        type: FETCH_BROWSE_FAIL,
        payload: error,
    };
}

function fetchBrowseSuccess(data) {
    return {
        type: FETCH_BROWSE_SUCCESS,
        payload: data,
    };
}

export {
    fetchBrowsePending,
    fetchBrowseFail,
    fetchBrowseSuccess,
    FETCH_BROWSE_PENDING,
    FETCH_BROWSE_SUCCESS,
    FETCH_BROWSE_FAIL,
};
