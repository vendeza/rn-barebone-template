import React from "react";
import PropTypes from "prop-types";
import {View} from "react-native";

const CustomCheckbox = ({checked, setChecked, label}) => {
    return <View style={{flex: 1}}></View>;
};

CustomCheckbox.defaultProps = {
    checked: false,
    setChecked: () => {},
    label: "",
};

CustomCheckbox.propTypes = {
    checked: PropTypes.bool,
    setChecked: PropTypes.func,
    label: PropTypes.string,
};

export default CustomCheckbox;
