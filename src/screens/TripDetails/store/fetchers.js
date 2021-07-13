import {fetchTripInfoFail, fetchTripInfoPending, fetchTripInfoSuccess} from "./actions";

import {getTripInfo} from "../../../server/api/trip";

export function fetchTripInfo() {
    return (dispatch) => {
        dispatch(fetchTripInfoPending());

        return getTripInfo()
            .then(async (response) => {
                if (response.error) {
                    throw response.error;
                }

                dispatch(fetchTripInfoSuccess(response.data));
                return response;
            })
            .catch((error) => dispatch(fetchTripInfoFail(error)));
    };
}
