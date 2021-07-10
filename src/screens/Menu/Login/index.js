import React from "react";
import {Text} from "react-native";
import {ContainerView} from "../../../components";
import commonStyles from "../../../styles/commonStyles";

const Login = () => {
    return (
        <ContainerView>
            <Text style={commonStyles.h1}>{"Login Screen"}</Text>
        </ContainerView>
    );
};

export default Login;
