import axios from "axios";
import {TOP_CARS} from "../endPoints";

const getCars = async ({filters}) => {
    let url = `${TOP_CARS}?filters=${filters}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        throw `Error in the getCars() method. Message: ${e.message}`;
    }
};

const getCarById = async ({id}) => {
    let url = `${TOP_CARS}?id=${id}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        throw `Error in the getBestTradesArray() method. Message: ${e.message}`;
    }
};

export {getCars, getCarById};
