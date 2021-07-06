import React from "react";
import PropTypes from "prop-types";
import {ScrollView, View} from "react-native";

const Options = ({onSelect, options, conditionOfSelection}) => {
    return (
        <View style={{flexDirection: "row"}}>

        </View>
    );
};

Options.defaultProps = {
    onSelect: () => {
    },
    options: [],
    conditionOfSelection: (option) => {
        return option.checked
    }
};

Options.propTypes = {
    options: PropTypes.array,
    onSelect: PropTypes.func,
    conditionOfSelection: PropTypes.func
};

export default Options;
