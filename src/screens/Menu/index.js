import React from "react";
import PropTypes from "prop-types";
import {Text} from "react-native";
import commonStyles from "../../styles/commonStyles";
import ContainerView from "../../components/ContainerView";
import {bindActionCreators} from "redux";
import {userLogout} from "../mainStore/fetchers";
import {connect} from "react-redux";
import ButtonCustom from "../../components/ButtonCustom";

const Menu = (props) => {
    return (
        <ContainerView>
            <Text style={commonStyles.h1}>{"Menu Screen"}</Text>

            <ButtonCustom
                buttonStyle={{marginTop: 20}}
                title={"Login"}
                onPress={() => {
                    props.navigation.navigate("Login");
                }}
            />
        </ContainerView>
    );
};
Menu.defaultProps = {
    children: null,
    onPress: () => {},
    text: "",
    authenticated: false,
};

Menu.propTypes = {
    children: PropTypes.node,
    onPress: PropTypes.func,
    text: PropTypes.string,
    authenticated: PropTypes.bool,
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
