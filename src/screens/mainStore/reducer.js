import {
    FETCH_TICKERS_FAIL,
    FETCH_TICKERS_SUCCESS,
    PENDING,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_SUCCESS,
} from "./actions";

const initialState = {
    tickers: [],
    pending: false,
    error: null,
    user: {authenticated: false, accessToken: "", email: "", name: ""},
};

export function mainReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TICKERS_SUCCESS:
            return {
                ...state,
                pending: false,
                tickers: action.payload,
            };
        case PENDING: {
            return {
                ...state,
                pending: true,
            };
        }

        case FETCH_TICKERS_FAIL: {
            return {
                ...state,
                pending: false,
                error: action.payload,
            };
        }

        case USER_LOGIN_SUCCESS: {
            return {
                ...state,
                user: {...state.user, authenticated: true, ...action.payload},
            };
        }

        case USER_LOGOUT_SUCCESS: {
            return {
                ...state,
                user: {authenticated: false},
            };
        }

        default: {
            return state;
        }
    }
}
