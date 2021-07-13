import {
    FETCH_BROWSE_FAIL,
    FETCH_BROWSE_PENDING,
    FETCH_BROWSE_SUCCESS,
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

export function browseReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_BROWSE_PENDING: {
            return {
                ...state,
                pending: true,
            };
        }

        case FETCH_BROWSE_FAIL: {
            return {
                ...state,
                pending: false,
                error: action.payload,
            };
        }

        case FETCH_BROWSE_SUCCESS:
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
