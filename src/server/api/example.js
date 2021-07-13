import axios from "axios";
import {SOMETHING} from "../endPoints";

const getSomething = async () => {
    let url = `${SOMETHING}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        throw `Error in the getSomething() method. Message: ${e.message}`;
    }
};

export {getSomething};
