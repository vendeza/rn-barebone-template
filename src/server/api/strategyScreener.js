import axios from "axios";
import {HOST} from "../configuration";

const TICKERS_ENDPOINT = HOST + "/tickers/";

const getBestTradesArray = async ({headers, filters}) => {
    let url = `${HOST}/tickers/${filters.selectedTicker.symbol}/trades/?`;

    let body = {
        expiration_timestamps: filters.selectedExpirationTimestamp,
        strategy_settings: {
            premium_type: filters.premiumType,
            target_price_lower: filters.targetPriceLower,
            target_price_upper: filters.targetPriceUpper,
            cash_to_invest: filters.cashToInvest,
        },
        contract_filters: {
            "min.open_interest": filters.minOpenInterest,
            "min.volume": filters.minVolume,
            "min.last_trade_date": filters.lastTradedDate,
        },
        trade_filters: {
            "min.target_price_profit_ratio": filters.minTargetPriceProfitRatio,
            "min.profit_prob": filters.minProfitProb,
        },
    };
    try {
        const response = await axios.post(url, body, headers);

        return response.data;
    } catch (e) {
        throw `getBestTradesArray() ${e.message}`;
    }
};

const getTickersArray = async (headers) => {
    const path = TICKERS_ENDPOINT;

    try {
        const response = await axios.get(path, headers);
        return response.data;
    } catch (e) {
        throw `getTickersArray() ${e.message}`;
    }
};

export {getTickersArray, getBestTradesArray};
