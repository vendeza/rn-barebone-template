import React from "react";
import PropTypes from "prop-types";
import {
    StatusBar,
    StyleSheet,
    SafeAreaView,
} from "react-native";
import commonStyles from "../styles/commonStyles";
import colors from "../styles/colors";

/** FOR WRAPPING A SCREEN:
 *
 * children: node
 *
 * screenTitle: string
 *
 * onDataRefresh: func
 *
 * refreshing: bool
 *
 * pending: bool
 *
 * containerColor: string
 *
 * isStickyHeader: bool
 *
 * isBackButton: bool
 * */
const ContainerView = (props) => {
    return (
        <>
            <StatusBar
                backgroundColor="transparent"
                barStyle={"dark-content"}
                translucent
            />
            <SafeAreaView
                style={{
                    ...commonStyles.mainContainer,
                    ...props.containerStyle,
                    backgroundColor: props.containerColor
                        ? props.containerColor
                        : colors.backgroundColor,
                }}>

                    {props.header ? props.header() : null}
                    {props.children}
            </SafeAreaView>
        </>
    );
};

ContainerView.defaultProps = {
    header: () => {},
    children: null,
    screenTitle: "Title",
    onDataRefresh: () => {},
    refreshing: false,
    pending: false,
    containerColor: colors.backgroundColor,
    isStickyHeader: true,
    isBackButton: false,
    containerStyle: {},
    statusBarColor: "#fff",
    isPadding:true,

};

ContainerView.propTypes = {
    header: PropTypes.any,
    children: PropTypes.node,
    screenTitle: PropTypes.string,
    onDataRefresh: PropTypes.func,
    refreshing: PropTypes.bool,
    pending: PropTypes.bool,
    containerColor: PropTypes.string,
    isStickyHeader: PropTypes.bool,
    isBackButton: PropTypes.bool,
    containerStyle: PropTypes.object,
    isPadding:PropTypes.bool,
    statusBarColor:PropTypes.string
};

export default ContainerView;
