import {
    fetchBrowseFail,
    fetchBrowsePending,
    fetchBrowseSuccess,
} from "./actions";

import {getSomething} from "../../../server/api/example";

export function fetchBrowse() {
    return (dispatch) => {
        dispatch(fetchBrowsePending());

        return getSomething()
            .then(async (response) => {
                if (response.error) {
                    throw response.error;
                }

                const options = response;

                dispatch(fetchBrowseSuccess(options));
                return options;
            })
            .catch((error) => dispatch(fetchBrowseFail(error)));
    };
}
