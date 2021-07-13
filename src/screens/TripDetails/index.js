import React from "react";
import {View} from "react-native";
import {ButtonCustom, ContainerView} from "../../components";
import colors from "../../styles/colors";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchTripInfo} from "./store/fetchers";

const CurrentTrip = (props) => {
    const onSearch = async () => {
        props.navigation.navigate("CurrentTrip");
    };

    const GetStartedButton = () => {
        return (
            <ButtonCustom
                buttonStyle={{
                    marginTop: 20,
                    backgroundColor: colors.black,
                }}
                title={"Current trip"}
                onPress={() => {
                    onSearch();
                }}
            />
        );
    };

    return (
        <View style={{flex: 1}}>
            <ContainerView>
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
    bindActionCreators({fetchTripInfo: fetchTripInfo}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTrip);
