import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, Text, View} from "react-native";
import colors from "../styles/colors";

const SwitchCustom = ({labelText, value, onToggleSwitch}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{labelText}</Text>
        </View>
    );
};

SwitchCustom.defaultProps = {
    labelText: "Label text",
    value: false,
    onToggleSwitch: () => {},
};

SwitchCustom.propTypes = {
    value: PropTypes.bool,
    labelText: PropTypes.string,
    onToggleSwitch: PropTypes.func,
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#52555D",
        borderRadius: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        padding: 14,
    },
    switch: {
        alignSelf: "flex-end",
    },
    text: {
        color: "#fff",
        fontSize: 16,
    },
});

export default SwitchCustom;
