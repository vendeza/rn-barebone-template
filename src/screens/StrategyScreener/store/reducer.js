import {
    SET_STRATEGY_SCREENER_FILTERS,
    FETCH_STRATEGY_SCREENER_FAIL,
    FETCH_STRATEGY_SCREENER_PENDING,
    FETCH_BEST_TRADES_SUCCESS,
    FETCH_BEST_TRADES_FAIL,
    FETCH_BEST_TRADES_PENDING,
    FETCH_STRATEGY_SCREENER_EXPIRATION_TIMESTAMPS_SUCCESS,
    SELECT_STRATEGY_SCREENER_EXPIRATION_TIMESTAMPS,
    SAVE_STRATEGY_SCREENER_EXPIRATION_TIMESTAMPS,
} from "./actions";

const initialState = {
    expirationTimestamps: [],
    basicInfo: {},
    tickersStats: {},
    pending: false,
    fetchBestTradesPending: false,
    error: null,
    bestTrades: [],
    filters: {
        premiumType: "market",
        cashToInvest: null,
        minVolume: 0,
        minOpenInterest: 0,
        lastTradedDate: -9999999,
        targetPriceLower: null,
        targetPriceUpper: null,
        priceTarget: null,
        selectedExpirationTimestamp: [],
        selectedTicker: {symbol: ""},
        selectedSentiment: null,
        minTargetPriceProfitRatio: 0.0,
        minProfitProb: 0.0,
    },
};

export function strategyScreenerReducer(state = initialState, action) {
    switch (action.type) {
        case SET_STRATEGY_SCREENER_FILTERS: {
            return {
                ...state,
                filters: action.payload,
            };
        }

        case FETCH_STRATEGY_SCREENER_PENDING: {
            return {
                ...state,
                pending: true,
            };
        }

        case FETCH_STRATEGY_SCREENER_FAIL: {
            return {
                ...state,
                pending: false,
                error: action.payload,
            };
        }

        /**
         * TRADES
         * */

        case FETCH_BEST_TRADES_PENDING: {
            return {
                ...state,
                fetchBestTradesPending: true,
            };
        }

        case FETCH_BEST_TRADES_FAIL: {
            return {
                ...state,
                fetchBestTradesPending: false,
                error: action.payload,
            };
        }

        case FETCH_BEST_TRADES_SUCCESS: {
            return {
                ...state,
                error: null,
                fetchBestTradesPending: false,
                bestTrades: action.payload,
            };
        }

        /**
         * EXPIRATION TIMESTAMPS
         * */

        case FETCH_STRATEGY_SCREENER_EXPIRATION_TIMESTAMPS_SUCCESS: {
            return {
                ...state,
                pending: false,
                error: null,
                expirationTimestamps: action.payload.expirationTimestamps,
                basicInfo: action.payload.quote,
                tickersStats: action.payload.tickerStats,
            };
        }

        case SELECT_STRATEGY_SCREENER_EXPIRATION_TIMESTAMPS: {
            return {
                ...state,
                selectedExpirationTimestamp: action.payload,
            };
        }

        case SAVE_STRATEGY_SCREENER_EXPIRATION_TIMESTAMPS: {
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
