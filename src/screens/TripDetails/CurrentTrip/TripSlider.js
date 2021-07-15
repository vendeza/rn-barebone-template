import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, Text, View} from "react-native";
import Icons from "react-native-vector-icons/MaterialIcons";
import {timestampTimeFormatter} from "../../../utils/helper";
import ProgressCircle from "react-native-progress-circle";
import {bindActionCreators} from "redux";
import {fetchTripInfo} from "../store/fetchers";
import {connect} from "react-redux";

const TripSlider = (props) => {
    return (
        <View style={styles.sliderContainer}>
            <Icons
                name={"chevron-left"}
                size={30}
                color={"#444"}
                style={{marginRight: 10}}
            />
            <View style={styles.timeContainer}>
                <Text>{timestampTimeFormatter(props.tripInfo.startTs)}</Text>
                <Text>{timestampTimeFormatter(props.tripInfo.endTs)}</Text>
            </View>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Icons
                    name={"radio-button-checked"}
                    size={20}
                    color={"red"}
                    style={{marginBottom: -2}}
                />
                <View
                    style={{
                        height: 40,
                        width: 4,
                        backgroundColor: "red",
                    }}
                />
                <Icons
                    name={"place"}
                    size={20}
                    color={"red"}
                    style={{marginTop: -2}}
                />
            </View>
            <View style={styles.addressContainer}>
                <Text style={{fontSize: 10}}>
                    {props.tripInfo.startAddress.substring(0, 30) + "..."}
                </Text>
                <Text style={{fontSize: 10}}>
                    {props.tripInfo.endAddress.substring(0, 30) + "..."}
                </Text>
            </View>
            <View style={styles.progressCircle}>
                <ProgressCircle
                    percent={props.tripInfo.scores.distraction}
                    radius={40}
                    borderWidth={4}
                    color="'rgb(60,187,4)'"
                    shadowColor="#ccc"
                    bgColor="#fff">
                    <Text style={{fontSize: 18}}>
                        {props.tripInfo.scores.distraction}
                    </Text>
                    <Icons name={"directions-car"} size={20} color={"red"} />
                </ProgressCircle>
            </View>
            <Icons
                name={"chevron-right"}
                size={30}
                color={"#444"}
                style={{marginLeft: 10}}
            />
        </View>
    );
};

TripSlider.defaultProps = {
    tripInfo: {},
};

TripSlider.propTypes = {
    tripInfo: PropTypes.object,
};

const styles = StyleSheet.create({
    sliderContainer: {
        flexDirection: "row",
        padding: 10,
        paddingVertical: 20,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    timeContainer: {
        height: 70,
        width: 50,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    progressCircle: {
        flex: 1,
        paddingLeft: 10,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    addressContainer: {
        height: 70,
        paddingLeft: 10,
        flex: 2,
        flexDirection: "column",
        justifyContent: "space-between",
    },
});

const mapStateToProps = (state) => {
  const { tripInfoReducer } = state;
  return {
    tripInfo: tripInfoReducer.tripInfo,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchTripInfo: fetchTripInfo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TripSlider);
