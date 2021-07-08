const SET_STRATEGY_SCREENER_FILTERS = "SET_STRATEGY_SCREENER_FILTERS";

const FETCH_STRATEGY_SCREENER_PENDING = "FETCH_STRATEGY_SCREENER_PENDING";
const FETCH_STRATEGY_SCREENER_FAIL = "FETCH_STRATEGY_SCREENER_FAIL";

const FETCH_STRATEGY_SCREENER_EXPIRATION_TIMESTAMPS_SUCCESS =
    "FETCH_STRATEGY_SCREENER_EXPIRATION_TIMESTAMPS_SUCCESS";

const SELECT_STRATEGY_SCREENER_EXPIRATION_TIMESTAMPS =
    "SELECT_STRATEGY_SCREENER_EXPIRATION_TIMESTAMPS";
const SAVE_STRATEGY_SCREENER_EXPIRATION_TIMESTAMPS =
    "SAVE_STRATEGY_SCREENER_EXPIRATION_TIMESTAMPS";

const FETCH_BEST_TRADES_SUCCESS = "FETCH_BEST_TRADES_SUCCESS";
const FETCH_BEST_TRADES_PENDING = "FETCH_BEST_TRADES_PENDING";
const FETCH_BEST_TRADES_FAIL = "FETCH_BEST_TRADES_FAIL";

function setStrategyFilters(data) {
    return {
        type: SET_STRATEGY_SCREENER_FILTERS,
        payload: data,
    };
}

function fetchStrategyScreenerPending() {
    return {
        type: FETCH_STRATEGY_SCREENER_PENDING,
    };
}

function fetchStrategyScreenerFail(error) {
    return {
        type: FETCH_STRATEGY_SCREENER_FAIL,
        payload: error,
    };
}

function fetchBestTradesPending() {
    return {
        type: FETCH_BEST_TRADES_PENDING,
    };
}

function fetchBestTradesFail(error) {
    return {
        type: FETCH_BEST_TRADES_FAIL,
        payload: error,
    };
}

function fetchBestTradesSuccess(data) {
    return {
        type: FETCH_BEST_TRADES_SUCCESS,
        payload: data,
    };
}

function fetchExpirationTimestampsSuccess(data) {
    return {
        type: FETCH_STRATEGY_SCREENER_EXPIRATION_TIMESTAMPS_SUCCESS,
        payload: data,
    };
}

function selectExpirationTimestamps(data) {
    return {
        type: SELECT_STRATEGY_SCREENER_EXPIRATION_TIMESTAMPS,
        payload: data,
    };
}

function setExpirationTimestamps(data) {
    return {
        type: SAVE_STRATEGY_SCREENER_EXPIRATION_TIMESTAMPS,
        payload: data,
    };
}

export {
    SET_STRATEGY_SCREENER_FILTERS,
    FETCH_STRATEGY_SCREENER_PENDING,
    FETCH_STRATEGY_SCREENER_FAIL,
    FETCH_BEST_TRADES_PENDING,
    FETCH_BEST_TRADES_FAIL,
    FETCH_BEST_TRADES_SUCCESS,
    FETCH_STRATEGY_SCREENER_EXPIRATION_TIMESTAMPS_SUCCESS,
    SELECT_STRATEGY_SCREENER_EXPIRATION_TIMESTAMPS,
    SAVE_STRATEGY_SCREENER_EXPIRATION_TIMESTAMPS,
    setStrategyFilters,
    fetchStrategyScreenerPending,
    fetchStrategyScreenerFail,
    fetchBestTradesPending,
    fetchBestTradesFail,
    fetchBestTradesSuccess,
    fetchExpirationTimestampsSuccess,
    selectExpirationTimestamps,
    setExpirationTimestamps,
};
