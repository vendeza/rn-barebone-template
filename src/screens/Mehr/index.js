import React from "react";
import {Text} from "react-native";
import commonStyles from "../../styles/commonStyles";
import ContainerView from "../../components/ContainerView";
import ButtonCustom from "../../components/ButtonCustom";

const Mehr = () => {
    return (
        <ContainerView>
            <Text style={commonStyles.h1}>{"Mehr Screen"}</Text>

            <ButtonCustom
                buttonStyle={{marginTop: 20}}
                title={"Login"}
                onPress={() => {}}
            />
        </ContainerView>
    );
};
export default Mehr;
