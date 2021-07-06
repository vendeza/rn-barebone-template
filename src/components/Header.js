import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, View} from "react-native";
import BackButton from "./BackButton";

const Header = ({
    centerComponent,
    leftComponent,
    rightComponent,
    navigation,
    isBackButton,
    containerStyle,
}) => {
    return (
        <View
            style={{
                ...styles.headerContainer,
                ...containerStyle,
            }}>
            {isBackButton ? (
                <BackButton
                    goBack={
                        navigation && navigation.goBack
                            ? navigation.goBack
                            : () => {}
                    }
                />
            ) : null}
            {leftComponent}
            {centerComponent}
            {rightComponent}
        </View>
    );
};

Header.defaultProps = {
    isBackButton: true,
    leftComponent: null,
    centerComponent: null,
    rightComponent: null,
    navigation: {
        goBack: () => {},
    },
    title: "Title name",
    containerStyle: {},
};

Header.propTypes = {
    isBackButton: PropTypes.bool,
    navigation: PropTypes.any.isRequired,
    title: PropTypes.string,
    leftComponent: PropTypes.node,
    centerComponent: PropTypes.node,
    rightComponent: PropTypes.node,
    containerStyle: PropTypes.object,
};

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: "center",
        backgroundColor: "#fff",
        flexDirection: "row",
        height: 80,
        justifyContent: "space-between",
        paddingRight: 20,
    },
});

export default Header;
