import React from "react";
import PropTypes from "prop-types";
import {StyleSheet} from "react-native";
import {Input} from "react-native-elements";

const InputCustom = ({
    defaultValue,
    placeholder,
    maxLength,
    type,
    secureTextEntry,
    errorMessage,
    ...passingProps
}) => {
    return (
        <Input
            inputContainerStyle={{
                borderBottomWidth: 0,
            }}
            containerStyle={{
                paddingLeft: 0,
                paddingRight: 0,
            }}
            textContentType={type}
            inputStyle={styles.input}
            placeholder={placeholder}
            maxLength={maxLength}
            errorStyle={{
                color: "red",
                marginBottom: 0,
                marginTop: 0,
                paddingTop: 0,
                paddingBottom: 0,
            }}
            defaultValue={defaultValue}
            secureTextEntry={secureTextEntry}
            errorMessage={errorMessage}
            {...passingProps}
        />
    );
};

InputCustom.defaultProps = {
    maxLength: 40,
    onPress: () => {},
    defaultValue: "",
    placeholder: "Input text",
    type: "name",
    secureTextEntry: false,
    errorMessage: "",
};

InputCustom.propTypes = {
    maxLength: PropTypes.number,
    onPress: PropTypes.func,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    errorMessage: PropTypes.string,
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#eaeaf3",
        borderRadius: 90,
        color: "black",
        fontSize: 16,
        height: 36,
        marginLeft: 0,
        marginTop: 0,
        paddingBottom: 7,
        paddingHorizontal: 0,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 7,
    },
});

export default InputCustom;
