import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, Text, View} from "react-native";
import {Tooltip} from "react-native-elements";
import commonStyle from "../styles/commonStyles";

const Label = ({labelText, tooltipText}) => {
    if (!tooltipText) {
        return (
            <View style={{flex: 1, marginVertical: 20, marginTop: 35}}>
                <Text style={styles.label}>{labelText}</Text>
            </View>
        );
    }
    return (
        <View style={{flex: 1, marginVertical: 20, marginTop: 35}}>
            <Tooltip
                width={180}
                height={200}
                withOverlay={false}
                backgroundColor={"#eee"}
                popover={<Text>{tooltipText}</Text>}
                containerStyle={{color: "#fff"}}>
                <View style={{flexDirection: "row"}}>
                    <Text style={styles.label}>{labelText}</Text>
                    <View
                        style={{
                            marginLeft: 10,
                            width: 18,
                            height: 18,
                            backgroundColor: "rgb(94,94,94)",
                            borderRadius: 90,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Text style={{color: "#fff"}}>{"?"}</Text>
                    </View>
                </View>
            </Tooltip>
        </View>
    );
};

Label.defaultProps = {
    labelText: "",
    tooltipText: "",
};

Label.propTypes = {
    labelText: PropTypes.string,
    tooltipText: PropTypes.string,
};

const styles = StyleSheet.create({
    label: {
        ...commonStyle.p,
        color: "#fff",
        fontWeight: "600",
        textTransform: "uppercase",
    },
});

export default Label;
