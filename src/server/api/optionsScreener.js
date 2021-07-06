import axios from "axios";
import {HOST} from "../configuration";

const getContracts = async ({headers, filters}) => {
    let url = `${HOST}/tickers/${filters.selectedTicker.symbol}/contracts/`;
    if (!filters.selectedTicker || !filters.selectedExpirationTimestamp) {
        return [];
    }

    let deltaMin;
    let deltaMax;
    if (filters.delta === 1) {
        deltaMin = -1;
        deltaMax = 1;
    } else {
        deltaMin = filters.delta;
        deltaMax = filters.delta + 0.2;
    }

    let bodyFilters = {
        "min.strike": parseFloat(filters.minStrike),
        "max.strike": parseFloat(filters.maxStrike),
        "min.volume": filters.minVolume,
        "min.open_interest": filters.minOpenInterest,
        "max.bid_ask_spread": filters.maxBidAskSpread,
        "min.delta": deltaMin,
        "max.delta": deltaMax,
        "min.last_trade_date": filters.lastTradedDate,
    };

    if (filters.callToggle && !filters.putToggle) {
        bodyFilters["eq.is_call"] = true;
    }
    if (!filters.callToggle && filters.putToggle) {
        bodyFilters["eq.is_call"] = false;
    }

    let body = {
        expiration_timestamps: filters.selectedExpirationTimestamp,
        filters: bodyFilters,
    };

    try {
        const response = await axios.post(url, body, headers);
        return response.data;
    } catch (e) {
        throw `getContracts() ${e.message}`;
    }
};

export {getContracts};
