import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, TouchableOpacity} from "react-native";

const Card = ({children, onPress}) => {
    return (
        <TouchableOpacity
            style={styles.position}
            onPress={() => {
                onPress();
            }}>
            {children}
        </TouchableOpacity>
    );
};

Card.defaultProps = {
    children: null,
    onPress: () => {},
};

Card.propTypes = {
    children: PropTypes.node,
    onPress: PropTypes.func,
};

const styles = StyleSheet.create({
    position: {
        backgroundColor: "#fff",
        borderRadius: 14,
        elevation: 9,
        height: "100%",
        marginTop: 16,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 9.1,
    },
});

export default Card;
