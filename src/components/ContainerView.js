import React from "react";
import PropTypes from "prop-types";
import {SafeAreaView, StatusBar, View} from "react-native";
import commonStyles from "../styles/commonStyles";
import colors from "../styles/colors";

const ContainerView = (props) => {
    return (
        <>
            <StatusBar
                backgroundColor="transparent"
                barStyle={"dark-content"}
                translucent
            />
            <SafeAreaView style={{flex:1}}>
                <View
                    style={{
                        ...commonStyles.mainContainer,
                        ...props.containerStyle,
                    }}>
                    {props.children}
                </View>
            </SafeAreaView>
        </>
    );
};

ContainerView.defaultProps = {
    header: () => {},
    children: null,
    screenTitle: "Title",
    refreshing: false,
    pending: false,
    containerColor: colors.backgroundColor,
    isStickyHeader: true,
    isBackButton: false,
    containerStyle: {},
    statusBarColor: "#fff",
    isPadding: true,
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
    isPadding: PropTypes.bool,
    statusBarColor: PropTypes.string,
};

export default ContainerView;
