import React from "react";
import {Text, View} from "react-native";
import {ContainerView} from "../../../components";
import commonStyles from "../../../styles/commonStyles";

const Login = () => {
    return (
        <ContainerView>
            <View>
                <Text style={commonStyles.h1}>{"Login Screen"}</Text>
            </View>
        </ContainerView>
    );
};

export default Login;
