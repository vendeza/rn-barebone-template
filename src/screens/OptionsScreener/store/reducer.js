import {
    SET_OPTIONS_SCREENER_FILTERS,
    FETCH_OPTIONS_SCREENER_FAIL,
    FETCH_OPTIONS_SCREENER_PENDING,
    FETCH_OPTIONS_SUCCESS,
    FETCH_OPTIONS_SCREENER_EXPIRATION_TIMESTAMPS_SUCCESS,
    SELECT_OPTIONS_SCREENER_EXPIRATION_TIMESTAMPS,
    SAVE_OPTIONS_SCREENER_EXPIRATION_TIMESTAMPS,
} from "./actions";

const initialState = {
    expirationTimestamps: [],
    basicInfo: {},
    tickersStats: {},
    pending: false,
    fetchBestTradesPending: false,
    error: null,
    options: [],
    filters: {
        callToggle: true,
        putToggle: true,
        minStrike: 0,
        maxStrike: 0,
        minVolume: 0,
        minOpenInterest: 0,
        maxBidAskSpread: 99999,
        delta: 1,
        lastTradedDate: -9999999,
        selectedTicker: {symbol: ""},
        selectedExpirationTimestamp: [],
    },
};

export function optionsScreenerReducer(state = initialState, action) {
    switch (action.type) {
        case SET_OPTIONS_SCREENER_FILTERS: {
            return {
                ...state,
                filters: action.payload,
            };
        }

        case FETCH_OPTIONS_SCREENER_PENDING: {
            return {
                ...state,
                pending: true,
            };
        }

        case FETCH_OPTIONS_SCREENER_FAIL: {
            return {
                ...state,
                pending: false,
                error: action.payload,
            };
        }

        /**
         * OPTIONS
         * */

        case FETCH_OPTIONS_SUCCESS:
            return {
                ...state,
                pending: false,
                options: action.payload,
            };

        /**
         * EXPIRATION TIMESTAMPS
         * */

        case FETCH_OPTIONS_SCREENER_EXPIRATION_TIMESTAMPS_SUCCESS: {
            return {
                ...state,
                pending: false,
                error: null,
                expirationTimestamps: action.payload.expirationTimestamps,
                basicInfo: action.payload.quote,
                tickersStats: action.payload.tickerStats,
            };
        }

        case SELECT_OPTIONS_SCREENER_EXPIRATION_TIMESTAMPS: {
            return {
                ...state,
                selectedExpirationTimestamp: action.payload,
            };
        }

        case SAVE_OPTIONS_SCREENER_EXPIRATION_TIMESTAMPS: {
            return {
                ...state,
                expirationTimestamps: action.payload.expirationTimestamps,
                basicInfo: action.payload.basicInfo,
                tickersStats: action.payload.tickersStats,
            };
        }

        default: {
            return state;
        }
    }
}
