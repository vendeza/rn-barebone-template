import React from "react";
import { StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import colors from "../styles/colors";
const Error = ({ error }) => {
    if (!error) {
        return null;
    }

    return <Text style={styles.error}>{error}</Text>;
};

Error.defaultProps = {
    error: null,
};

Error.propTypes = {
    error: PropTypes.any,
};

const styles = StyleSheet.create({
    error: {
        color: colors.red,
    },
});

export default Error;
