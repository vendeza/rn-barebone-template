import {
    FETCH_CARS_FAIL,
    FETCH_CARS_SUCCESS,
    PENDING,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_SUCCESS,
} from "./actions";

const initialState = {
    user:{name: "Best User"},
    exampleValue: 123,
    pending: false,
    error: null,
};

export function mainReducer(state = initialState, action) {
    switch (action.type) {
        case PENDING: {
            return {
                ...state,
                pending: true,
            };
        }

        case USER_LOGIN_SUCCESS: {
            return {
                ...state,
                user: state.user,
            };
        }

        case USER_LOGOUT_SUCCESS: {
            return {
                ...state,
                user: {authenticated: false},
                pending: false,
            };
        }

        case FETCH_CARS_SUCCESS: {
            return {
                ...state,
                pending: false,
                cars: state.cars,
            };
        }
        case FETCH_CARS_FAIL: {
            return {
                ...state,
                pending: false,
            };
        }
        default: {
            return state;
        }
    }
}
