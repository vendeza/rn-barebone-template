import axios from "axios";
import {HOST,TOP_MOVERS} from "../configuration";

export async function getExpirationTimestampsArray(tickerName, headers) {
    const path = `${HOST}/tickers/${tickerName}/expire_dates/`;
    try {
        const response = await axios.get(path, headers);
        return response.data;
    } catch (e) {
        throw `GET Expiration Timestamps method. Error message: ${e.message}`;
    }
}

export async function getTopMovers() {
    const path = TOP_MOVERS;
    try {
        const response = await axios.get(path, {});
        return response.data;
    } catch (e) {
        throw `GET method getTopMovers(): ${e.message}`;
    }
}
