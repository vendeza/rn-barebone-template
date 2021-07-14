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
        padding: 20,
        alignItems:'center',
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 9,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 9.1,
    },
});

export default Card;
