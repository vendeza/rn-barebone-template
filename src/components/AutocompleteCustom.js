import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";

import { Autocomplete } from "./Autocomplete/";

const AutocompleteCustom = ({
    keyboardIsShowed,
    dataArray,
    handleSelectListItem,
}) => {

    const onDropdownClose = () => {};
    const onDropdownShow = () => {};

    return (
        <View style={styles.autocompletesContainer}>
            {dataArray.length ? (
                <Autocomplete
                    pickerStyle={styles.picker}
                    placeholder={"Enter Ticker Symbol"}
                    style={styles.container}
                    containerStyle={styles.container}
                    scrollStyle={styles.scrollStyle}
                    inputStyle={styles.input}
                    inputContainerStyle={{
                        ...styles.inputContainer,
                        paddingHorizontal: keyboardIsShowed ? 20 : 0,
                        borderBottomWidth: keyboardIsShowed ? 1 : 0,
                    }}
                    handleSelectItem={(item, id) =>
                        handleSelectListItem({ item, id })
                    }
                    onDropdownClose={() => onDropdownClose()}
                    onDropdownShow={() => onDropdownShow()}
                    minimumCharactersCount={2}
                    highlightText
                    //isCancelButton={keyboardIsShowed}
                    data={dataArray}
                    valueExtractor={(item) => {
                        return `${item.symbol} - ${item.full_name}`;
                    }}
                />
            ) : null}
        </View>
    );
};
AutocompleteCustom.defaultProps = {
    onDropdownClose: () => {},
    scrollToInput: () => {},
    dataArray: ["Test 1", "Test 2", "Test 3"],
    handleSelectListItem: ({ item, id }) => {},
    keyboardIsShowed: false,
};

AutocompleteCustom.propTypes = {
    onDropdownClose: PropTypes.func,
    scrollToInput: PropTypes.func,
    onDropdownShow: PropTypes.func,
    dataArray: PropTypes.array,
    handleSelectListItem: PropTypes.func,
    keyboardIsShowed: PropTypes.bool,
};

const styles = StyleSheet.create({
    picker: {
        height: 600,
        left: 0,
        shadowColor: "#fff",
        width: "100%",
    },
    autocompletesContainer: {
        backgroundColor: "#fff",
        paddingHorizontal: 0,
        paddingTop: 0,
        paddingVertical: 0,
        width: "100%",
    },
    container: {
        borderWidth: 0,
        paddingHorizontal: 0,
        width: "100%",
    },
    input: {
        backgroundColor: "#f9f9f9",
        borderWidth: 0,
        flex: 1,
        fontSize: 20,
        height: 60,
        paddingHorizontal: 10,
    },
    inputContainer: {
        alignItems: "center",
        borderBottomColor: "#cfcfcf",
        borderBottomWidth: 1,
        display: "flex",
        flexDirection: "row",
        flexGrow: 0,
        flexShrink: 0,
        flexWrap: "wrap",
        justifyContent: "flex-start",
        paddingVertical: 13,
        width: "100%",
        zIndex: 20,
    },
    plus: {
        left: 212,
        position: "absolute",
        top: 40,
    },
    // dropped list container style
    scrollStyle: {
        borderWidth: 0,
        marginTop: 10,
        paddingHorizontal: 20,
        width: "100%",
    },
});

export default AutocompleteCustom;
