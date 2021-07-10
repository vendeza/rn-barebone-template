import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, Text, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../styles/colors";

const AlertCard = ({text}) => {
    return (
        <View style={styles.container}>
            <View style={styles.internalContainer}>
                <MaterialCommunityIcons
                    name={"alert-circle-outline"}
                    color={colors.alertIcon}
                    size={16}
                />
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
};

AlertCard.defaultProps = {
    text: "here should be a warning text",
};

AlertCard.propTypes = {
    text: PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    internalContainer: {
        alignItems: "center",
        backgroundColor: colors.alertBackground,
        borderRadius: 4,
        flexDirection: "row",
        padding: 10,
    },
    text: {color: colors.alertText, marginLeft: 10},
});

export default AlertCard;
