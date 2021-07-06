const SET_OPTIONS_SCREENER_FILTERS = "SET_OPTIONS_SCREENER_FILTERS";

const FETCH_OPTIONS_SCREENER_PENDING = "FETCH_OPTIONS_SCREENER_PENDING";
const FETCH_OPTIONS_SUCCESS = "FETCH_OPTIONS_SUCCESS";
const FETCH_OPTIONS_SCREENER_FAIL = "FETCH_OPTIONS_SCREENER_FAIL";

const FETCH_OPTIONS_SCREENER_EXPIRATION_TIMESTAMPS_SUCCESS =
    "FETCH_OPTIONS_SCREENER_EXPIRATION_TIMESTAMPS_SUCCESS";
const SELECT_OPTIONS_SCREENER_EXPIRATION_TIMESTAMPS =
    "SELECT_OPTIONS_SCREENER_EXPIRATION_TIMESTAMPS";
const SAVE_OPTIONS_SCREENER_EXPIRATION_TIMESTAMPS =
    "SAVE_OPTIONS_SCREENER_EXPIRATION_TIMESTAMPS";

function setOptionsFilters(data) {
    return {
        type: SET_OPTIONS_SCREENER_FILTERS,
        payload: data,
    };
}

function fetchOptionsScreenerPending() {
    return {
        type: FETCH_OPTIONS_SCREENER_PENDING,
    };
}

function fetchOptionsScreenerFail(error) {
    return {
        type: FETCH_OPTIONS_SCREENER_FAIL,
        payload: error,
    };
}

function fetchOptionsSuccess(data) {
    return {
        type: FETCH_OPTIONS_SUCCESS,
        payload: data,
    };
}

function fetchExpirationTimestampsSuccess(data) {
    return {
        type: FETCH_OPTIONS_SCREENER_EXPIRATION_TIMESTAMPS_SUCCESS,
        payload: data,
    };
}

function selectExpirationTimestamps(data) {
    return {
        type: SELECT_OPTIONS_SCREENER_EXPIRATION_TIMESTAMPS,
        payload: data,
    };
}

function setExpirationTimestamps(data) {
    return {
        type: SAVE_OPTIONS_SCREENER_EXPIRATION_TIMESTAMPS,
        payload: data,
    };
}

export {
    SET_OPTIONS_SCREENER_FILTERS,
    FETCH_OPTIONS_SCREENER_PENDING,
    FETCH_OPTIONS_SCREENER_FAIL,
    FETCH_OPTIONS_SUCCESS,
    FETCH_OPTIONS_SCREENER_EXPIRATION_TIMESTAMPS_SUCCESS,
    SELECT_OPTIONS_SCREENER_EXPIRATION_TIMESTAMPS,
    SAVE_OPTIONS_SCREENER_EXPIRATION_TIMESTAMPS,
    setOptionsFilters,
    fetchOptionsScreenerPending,
    fetchOptionsScreenerFail,
    fetchOptionsSuccess,
    fetchExpirationTimestampsSuccess,
    selectExpirationTimestamps,
    setExpirationTimestamps,
};
