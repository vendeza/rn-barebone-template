import {
    fetchBestTradesFail,
    fetchBestTradesPending,
    fetchBestTradesSuccess,
    fetchExpirationTimestampsSuccess,
    fetchStartFail,
    fetchStartPending,
    selectExpirationTimestamps,
    setExpirationTimestamps,
    setStrategyFilters,
} from "./actions";
import {getBestTradesArray} from "../../../server/api/strategyScreener";
import {getExpirationTimestampsArray} from "../../../server/api/common";
import {
    validateBasicInfo,
    validateBestTradesSchema,
} from "../../../utils/schemaValidator/SchemaValidator";

export function saveStrategyFilters(filters) {
    return (dispatch) => {
        dispatch(setStrategyFilters(filters));
    };
}

export function fetchExpirationTimestamps(symbol, headers) {
    return (dispatch) => {
        dispatch(fetchStartPending());
        return getExpirationTimestampsArray(symbol, headers)
            .then(async (res) => {
                if (res.error) {
                    throw res.error;
                }

                const expirationTimestamps =
                    await res.expiration_timestamps.map((item, index) => {
                        return {
                            label: date,
                            value: index,
                            expirationTimestamp: item,
                            checked: false,
                        };
                    });

                const valid = validateBasicInfo(res.quote);
                if (!valid) {
                    throw validateBasicInfo.errors;
                }

                const formatedResponse = {
                    expirationTimestamps,
                    quote: res.quote,
                    tickerStats: res.ticker_stats,
                };

                dispatch(fetchExpirationTimestampsSuccess(formatedResponse));
                return res;
            })
            .catch((error) => dispatch(fetchStartFail(error)));
    };
}

export function saveExpirationTimestamps(expirationTimestamps) {
    return (dispatch) => {
        dispatch(setExpirationTimestamps(expirationTimestamps));
    };
}

export function saveSelectedExpirationTimestamp(expirationTimestamp) {
    return (dispatch) => {
        dispatch(selectExpirationTimestamps(expirationTimestamp));
    };
}

export function fetchBestTrades({headers, filters}) {
    return (dispatch) => {
        dispatch(fetchBestTradesPending());
        const selectedExpirationTimestamp =
            filters.selectedExpirationTimestamp.map(
                (item) => item.expirationTimestamp,
            );
        dispatch(setStrategyFilters(filters));
        return getBestTradesArray({
            headers,
            filters: {...filters, selectedExpirationTimestamp},
        })
            .then(async (res) => {
                const valid = validateBestTradesSchema([res.trades[0]]);
                if (!valid) {
                    const message = validateBestTradesSchema.errors.map(
                        (item) => {
                            return `InstancePath: ${item.instancePath} ${item.message}. SchemaPath: ${item.schemaPath}; 
                        `;
                        },
                    );
                    throw JSON.stringify(message);
                }

                await res.trades.map((item) => {
                    item.isVisible = false;
                    return item;
                });
                dispatch(fetchBestTradesSuccess(res.trades));
                return res.trades;
            })
            .catch((error) => dispatch(fetchBestTradesFail(error)));
    };
}
