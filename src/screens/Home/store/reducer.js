import {
    FETCH_HOME_FAIL,
    FETCH_HOME_PENDING,
    FETCH_HOME_SUCCESS,
} from "./actions";

const initialState = {
    user: {name: "", email: ""},
    pending: false,
    error: null,
    cars: [],
    exampleValue: 123,
    filters: {
        ids: [],
        price: null,
    },
};

export function homeReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_HOME_PENDING: {
            return {
                ...state,
                pending: true,
            };
        }

        case FETCH_HOME_FAIL: {
            return {
                ...state,
                pending: false,
                error: action.payload,
            };
        }

        case FETCH_HOME_SUCCESS:
            return {
                ...state,
                pending: false,
                exampleValue: action.payload,
            };

        default: {
            return state;
        }
    }
}
