import React from "react";
import {Text, View} from "react-native";
import {ContainerView} from "../../components";
import commonStyles from "../../styles/commonStyles";

const Rewards = () => {
    return (
        <View style={{flex: 1}}>
            <ContainerView>
                <Text style={commonStyles.h1}>{"Rewards screen"}</Text>
                <Text style={commonStyles.p}>
                    {"The describe of the trip tracker app"}
                </Text>
            </ContainerView>
        </View>
    );
};

export default Rewards;
