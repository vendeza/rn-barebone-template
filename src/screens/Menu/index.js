import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import commonStyles from "../../styles/commonStyles";
import ContainerView from "../../components/ContainerView";
import ButtonCustom from "../../components/ButtonCustom";
import {bindActionCreators} from "redux";
import { userLogout} from "../mainStore/dispatcher";
import {connect} from "react-redux";
const Menu = (props) => {
    const logout = async () => {
        await props.userLogout();
        props.navigation.navigate("Login");
    };

    const ShowButtons = () => {
        if (props.authenticated) {
            return (
                <View>
                    <ButtonCustom
                        buttonStyle={{ marginTop: 20 }}
                        title={"Profile"}
                        onPress={() => {
                            props.navigation.navigate("Profile");
                        }}
                    />
                    <ButtonCustom
                        buttonStyle={{ marginTop: 20 }}
                        title={"Log Out"}
                        onPress={() => {
                            logout();
                        }}
                    />
                </View>
            );
        }
        return (
            <ButtonCustom
                buttonStyle={{ marginTop: 20 }}
                title={"Login"}
                onPress={() => {
                    props.navigation.navigate("Login");
                }}
            />
        );
    };
    return (
        <ContainerView>
            <View style={{ flex: 1 ,padding:20}}>
                <Text style={commonStyles.h1}>{"Menu Screen"}</Text>
                <View>{ShowButtons()}</View>
            </View>
        </ContainerView>
    );
};
Menu.defaultProps = {
    children: null,
    onPress: () => {},
    text: "",
    authenticated:false
};

Menu.propTypes = {
    children: PropTypes.node,
    onPress: PropTypes.func,
    text: PropTypes.string,
    authenticated: PropTypes.bool
};


const mapStateToProps = (state) => {
    const {mainReducer} = state;
    return {
        authenticated: mainReducer.user.authenticated,
    };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            userLogout: userLogout,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
