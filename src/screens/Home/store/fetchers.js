import {fetchHomeFail, fetchHomePending, fetchHomeSuccess} from "./actions";

import {getSomething} from "../../../server/api/example";

export function fetchHome() {
    return (dispatch) => {
        dispatch(fetchHomePending());

        return getSomething()
            .then(async (response) => {
                if (response.error) {
                    throw response.error;
                }

                const options = response;

                dispatch(fetchHomeSuccess(options));
                return options;
            })
            .catch((error) => dispatch(fetchHomeFail(error)));
    };
}
