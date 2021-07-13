const FETCH_TRIP_INFO_PENDING = "FETCH_TRIP_INFO_PENDING";
const FETCH_TRIP_INFO_SUCCESS = "FETCH_TRIP_INFO_SUCCESS";
const FETCH_TRIP_INFO_FAIL = "FETCH_TRIP_INFO_FAIL";

function fetchTripInfoPending() {
    return {
        type: FETCH_TRIP_INFO_PENDING,
    };
}

function fetchTripInfoFail(error) {
    return {
        type: FETCH_TRIP_INFO_FAIL,
        payload: error,
    };
}

function fetchTripInfoSuccess(data) {
    return {
        type: FETCH_TRIP_INFO_SUCCESS,
        payload: data,
    };
}

export {
    fetchTripInfoPending,
    fetchTripInfoFail,
    fetchTripInfoSuccess,
    FETCH_TRIP_INFO_PENDING,
    FETCH_TRIP_INFO_SUCCESS,
    FETCH_TRIP_INFO_FAIL,
};
