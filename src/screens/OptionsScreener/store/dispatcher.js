import {
    fetchOptionsScreenerFail,
    fetchOptionsScreenerPending,
    fetchOptionsSuccess,
    setOptionsFilters,
    fetchExpirationTimestampsSuccess
} from "./actions";

import {getContracts} from "../../../server/api/optionsScreener";
import {setExpirationTimestamps} from "./actions";
import {getExpirationTimestampsArray} from "../../../server/api/common";

import {validateBasicInfo} from "../../../utils/schemaValidator/SchemaValidator";

export function fetchExpirationTimestamps(symbol, headers) {
    return (dispatch) => {
        dispatch(fetchOptionsScreenerPending());
        return getExpirationTimestampsArray(symbol, headers)
            .then(async (res) => {
                if (res.error) {
                    throw res.error;
                }

                const expirationTimestamps = await res.expiration_timestamps.map(
                    (item, index) => {

                        return {
                            label: date,
                            value: index,
                            expirationTimestamp: item,
                            checked: false,
                        };
                    },
                );

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
            .catch((error) => dispatch(fetchOptionsScreenerFail(`Error: ${error}; \n Symbol: ${JSON.stringify(symbol)}; \n Headers: ${JSON.stringify(headers)}; \n`)));
    };
}

export function fetchOptions({headers, filters}) {
    return (dispatch) => {
        dispatch(fetchOptionsScreenerPending());
        dispatch(setOptionsFilters(filters));
        const selectedExpirationTimestamp = filters.selectedExpirationTimestamp.map(
            (item) => item.expirationTimestamp,
        );

        return getContracts({
            filters: {...filters, selectedExpirationTimestamp},
            headers,
        })
            .then(async (res) => {
                if (res.error) {
                    throw res.error;
                }

                const options = res.contracts;

                dispatch(fetchOptionsSuccess(options));
                return options;
            })
            .catch((error) => dispatch(fetchOptionsScreenerFail(error)));
    };
}

export function saveExpirationTimestamps(expirationTimestamps) {
    return (dispatch) => {
        dispatch(setExpirationTimestamps(expirationTimestamps));
    };
}

export function saveOptionsFilters(filters) {
    return (dispatch) => {
        dispatch(setOptionsFilters(filters));
    };
}
