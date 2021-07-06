import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import colors from "../styles/colors";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

/** Simple button for any actions*/
const ButtonCustom = ({
    onPress,
    title,
    buttonStyle,
    textStyle,
    isGradient,
    passingProps,
    disabled,
    iconName,
}) => {


    const gradient = isGradient;

    return (
        <Button
            disabled={disabled}
            onPress={onPress}
            title={title}
            titleStyle={{ ...styles.text, ...textStyle }}
            buttonStyle={{ ...styles.buttonContainer, ...buttonStyle }}
            icon={
                iconName ? (
                    <Icon
                        style={{ position: "absolute", left: 20 }}
                        name={iconName}
                        size={26}
                        color={textStyle ? textStyle.color : "white"}
                    />
                ) : null

            }
            {...gradient}
            {...passingProps}
        />
    );
};

ButtonCustom.defaultProps = {
    children: null,
    onPress: () => {},
    title: "Button",
    stylesContainer: {},
    buttonStyle: {},
    pending: false,
    passingProps: {},
    textStyle: {},
    buttonColor: "blue",
    isGradient: false,
    disabled: false,
    iconName: "",
};

ButtonCustom.propTypes = {
    children: PropTypes.node,
    onPress: PropTypes.func,
    title: PropTypes.string,
    stylesContainer: PropTypes.object,
    buttonStyle: PropTypes.object,
    pending: PropTypes.bool,
    passingProps: PropTypes.object,
    textStyle: PropTypes.object,
    buttonColor: PropTypes.string,
    isGradient: PropTypes.bool,
    disabled: PropTypes.bool,
    iconName: PropTypes.string
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 60,
        height: 56,
    },
    text: {
        color: colors.white,
        fontSize: 17,
        fontWeight: "600",
    },
});
export default ButtonCustom;
