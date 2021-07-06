import axios from "axios";
import config from "../../../auth.config";

const USER_SIGN_UP = `https://${config.domain}/api/v1/users?activate=true`;

const signUpUser = (data) => {
    const path = USER_SIGN_UP;

    const userData = {
        profile: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email || null,
            login: data.login || null,
            mobilePhone: data.mobilePhone || null,
        },
        credentials: {
            password: {value: data.password},
        },
    };

    return axios.post(path, userData, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `SSWS ${config.oidc.apiToken}`,
        },
    });
};

export {signUpUser};
