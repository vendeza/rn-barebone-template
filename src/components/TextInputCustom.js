import React from "react";
import PropTypes from "prop-types";
import {View} from "react-native";

class TextInputCustom extends React.PureComponent {
    focus() {
        this.input.focus();
    }

    hasErrors() {
        if (this.props.error) {
            return true;
        }
        return false;
    }

    render() {
        return <View></View>;
    }
}

TextInputCustom.defaultProps = {
    secureTextEntry: false,
    styles: {},
    maxLength: 50,
    error: "",
    placeholder: "",
    label: "field name",
};

TextInputCustom.propTypes = {
    secureTextEntry: PropTypes.bool,
    styles: PropTypes.object,
    maxLength: PropTypes.number,
    error: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
};

export default TextInputCustom;
