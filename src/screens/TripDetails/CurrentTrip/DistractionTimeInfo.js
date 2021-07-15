import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, Text, View} from "react-native";
import {connect} from "react-redux";

const DistractionTimeInfo = (props) => {
    return (
        <View style={styles.distractionInfoContainer}>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 20}}>
                    {
                        props.tripInfo.distractionDetails
                            .distractedPhoneHandsfreeMinutes
                    }
                </Text>
                <Text
                    style={{
                        marginTop: 6,
                        color: "#444",
                        fontSize: 12,
                    }}>
                    {"Minuten ohne Ablenkung"}
                </Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 20}}>
                    {
                        props.tripInfo.distractionDetails
                            .distractedPhoneHandheldMinutes
                    }
                </Text>
                <Text
                    style={{
                        marginTop: 6,
                        color: "#444",
                        fontSize: 12,
                    }}>
                    {"Minuten mit Ablenkung"}
                </Text>
            </View>
        </View>
    );
};

DistractionTimeInfo.defaultProps = {
    tripInfo: {},
};

DistractionTimeInfo.propTypes = {
    tripInfo: PropTypes.object,
};

const styles = StyleSheet.create({
    distractionInfoContainer: {
        flexDirection: "row",
        height: 80,
        margin: 20,
        marginBottom: 0,
        padding: 10,
        borderColor: "#ccc",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        alignItems: "center",
    },
});

const mapStateToProps = (state) => {
  const { tripInfoReducer } = state;
  return {
    tripInfo: tripInfoReducer.tripInfo,
  };
};


export default connect(mapStateToProps)(DistractionTimeInfo);
