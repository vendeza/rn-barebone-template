import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const BackButton = ({goBack, backButtonColor}) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    if (goBack) {
                        goBack();
                    }
                }}
                style={styles.buttonContainer}>
                <View style={styles.iconContainer}>
                    <Icon
                        style={{
                            marginLeft: -8,
                        }}
                        name="chevron-left"
                        size={40}
                        color={backButtonColor}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

BackButton.defaultProps = {
    goBack: ()=>{},
    backButtonColor: "#333",
};

BackButton.propTypes = {
    goBack: PropTypes.any.isRequired,
    backButtonColor: PropTypes.string,
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginHorizontal: 0,
        marginLeft: -12,
        paddingHorizontal: 0,
        width: 80,
        zIndex: 1000,
    },
    iconContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: 0,
        paddingHorizontal: 0,
    },
});

export default BackButton;
