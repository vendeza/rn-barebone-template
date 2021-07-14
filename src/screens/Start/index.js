import React from "react";
import {Text, View} from "react-native";
import {ButtonCustom, ContainerView} from "../../components";
import colors from "../../styles/colors";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {userLogout} from "../mainStore/fetchers";
import commonStyles from "../../styles/commonStyles";

const Start = (props) => {
    const onSearch = async () => {
        props.navigation.navigate("TripDetails");
    };

    const GetStartedButton = () => {
        return (
            <ButtonCustom
                buttonStyle={{
                    marginTop: 20,
                    backgroundColor: colors.black,
                }}
                title={"Get Started"}
                onPress={() => {
                    onSearch();
                }}
            />
        );
    };

    return (
        <View style={{flex: 1}}>
            <ContainerView>
                <Text style={commonStyles.h1}>
                    {"The perfect trip tracker"}
                </Text>
                <Text style={commonStyles.p}>
                    {"The describe of the trip tracker app"}
                </Text>
                <GetStartedButton />
            </ContainerView>
        </View>
    );
};
const mapStateToProps = (state) => {
    const {mainReducer} = state;
    return {
        userName: mainReducer.user.name,
    };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      userLogout: userLogout,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Start);
