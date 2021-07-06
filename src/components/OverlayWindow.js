import React, {useState} from "react";
import PropTypes from "prop-types";
import {View, StyleSheet} from "react-native";
import {Button, Overlay, Text} from "react-native-elements";
import colors from "../styles/colors";

const OverlayWindow = ({
    title,
    children,
    visible,
    toggleOverlay,
    overlayStyle,
}) => {
    return (
        <View>
            <Overlay
                animationType="fade"
                transparent
                isVisible={visible}
                onBackdropPress={toggleOverlay}
                fullScreen
                overlayStyle={{
                    ...styles.overlayContainer,
                    ...overlayStyle,
                }}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>{title}</Text>

                    <Button
                        onPress={toggleOverlay}
                        style={{alignSelf: "flex-end"}}
                        containerStyle={styles.containerButton}
                        type={"clear"}
                        title={"Cancel"}
                        titleStyle={styles.buttonTitle}
                    />
                </View>
                <View style={{flex: 1, paddingHorizontal: 16, paddingTop: 30}}>
                    {children}
                </View>
            </Overlay>
        </View>
    );
};

OverlayWindow.defaultProps = {
    children: null,
    onPress: () => {},
    title: "Overlay title",
    visible: false,
    toggleOverlay: () => {},
    overlayStyle: {},
};

OverlayWindow.propTypes = {
    children: PropTypes.node,
    onPress: PropTypes.func,
    title: PropTypes.string,
    visible: PropTypes.bool,
    toggleOverlay: PropTypes.func,
    overlayStyle: PropTypes.object,
};

const styles = StyleSheet.create({
    buttonTitle: {
        color: colors.orange,
        fontWeight: "600",
    },
    containerButton: {
        height: 42,
        marginTop: 10,
        position: "absolute",
        right: 10,
    },
    header: {
        alignContent: "center",
        backgroundColor: "#f9f9f9",
        borderBottomColor: "#999",
        borderBottomWidth: 0.5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        paddingVertical: 20,
    },
    headerTitle: {
        flex: 1,
        fontSize: 17,
        fontWeight: "600",
        textAlign: "center",
    },
    overlayContainer: {
        borderRadius: 10,
        marginTop: 80,
        padding: 0,
        width: "100%",
    },
});

export default OverlayWindow;
