import {
    FETCH_TRIP_INFO_FAIL,
    FETCH_TRIP_INFO_PENDING,
    FETCH_TRIP_INFO_SUCCESS,
} from "./actions";

const initialState = {
    tripInfoReducer: {
        startAddress: "",
        endAddress: "",
        startTs: null,
        endTs: null,
        tripPoints: [],
        id: 0,
        scores: {distraction: 0, safety: 0, speed: 0, total: 0},
    },
};

export function tripInfoReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TRIP_INFO_PENDING: {
            return {
                ...state,
                pending: true,
            };
        }

        case FETCH_TRIP_INFO_FAIL: {
            return {
                ...state,
                pending: false,
                error: action.payload,
            };
        }

        case FETCH_TRIP_INFO_SUCCESS:
            return {
                ...state,
                pending: false,
                tripInfo: action.payload,
            };

        default: {
            return state;
        }
    }
}
