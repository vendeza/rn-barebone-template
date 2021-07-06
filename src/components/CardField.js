import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, Text, View} from "react-native";

const CardField = ({label, value, cellStyles}) => {
    return (
        <View style={{...styles.cell, ...cellStyles}}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
};

CardField.defaultProps = {
    label: "",
    value: null,
    cellStyles: {},
};

CardField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.any,
    cellStyles: PropTypes.object,
};

const styles = StyleSheet.create({
    cell: {
        flexDirection: "row",
        height: 50,
        marginTop: 0,
    },

    label: {
        color: "#A3A3A3",
        flex: 1,
        fontSize: 14,
        fontWeight: "600",
    },
    value: {
        color: "#333",
        flex: 1,
        fontSize: 15,
        fontWeight: "600",
    },
});

export default CardField;
