import sampleGetTripResponse from "../../data/sampleGetTripResponse.json";

const getTripInfo = async () => {
    try {
        const promise = new Promise((resolve, reject) => {
            resolve(sampleGetTripResponse);
        });

        return promise;
    } catch (e) {
        throw `Error in the getTripInfo() method. Message: ${e.message}`;
    }
};

export {getTripInfo};
