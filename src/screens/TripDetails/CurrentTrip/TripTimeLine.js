import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, View} from "react-native";
import Icons from "react-native-vector-icons/MaterialIcons";
import {LineChart, Path} from "react-native-svg-charts";
import {ClipPath, Defs, ForeignObject, G, Rect} from "react-native-svg";
import {connect} from "react-redux";
import * as shape from "d3-shape";
import colors from "../../../styles/colors";

const TripTimeLine = (props) => {
    const data = [0, 0];
    const line = shape.curveBasis;

    const getCoefficients = (distraction) => {
        const startTs = props.tripInfo.startTs;
        const endTs = props.tripInfo.endTs;
        const tripTime = endTs - startTs;
        const dZone = distraction;
        const a1 = dZone.start - startTs;
        const a2 = dZone.end - startTs;
        const startCoefficient = a1 / tripTime;
        const endCoefficient = a2 / tripTime;
        return {startCoefficient, endCoefficient};
    };

    const RenderLine = ({ width, distraction, index}) => {
        const {startCoefficient, endCoefficient} = getCoefficients(distraction);

        return (
            <ClipPath id={`clip-path-${index + 1}`}>
                <Rect
                    x={startCoefficient * width}
                    y={"0"}
                    width={endCoefficient * width}
                    height={"100%"}
                />
            </ClipPath>
        );
    };

    const ChartPoint = ({width, distraction, index}) => {
        const {startCoefficient, endCoefficient} = getCoefficients(distraction);

        return (
            <ForeignObject
                key={index}
                x={(startCoefficient * width + endCoefficient * width) / 2}
                y={40}
                width={100}
                height={40}>
                <Icons name={"touch-app"} color={colors.red} size={24} />
            </ForeignObject>
        );
    };

    const Clips = ({x, y, width}) => {
        return (
            <Defs key={"clips"}>
                <ClipPath id="clip-path-0">
                    <Rect x={"0"} y={"0"} width={width} height={"100%"} />
                </ClipPath>
                {props.tripInfo.distractions.map((distraction, index) => (
                    <RenderLine
                        key={index}
                        index={index}
                        tripInfo={props.tripInfo}
                        distraction={distraction}
                        width={width}
                    />
                ))}
            </Defs>
        );
    };

    const DistractionLine = ({line, index}) => {
        return (
            <G key={index}>
                <Path
                    key={`line-${index + 1}`}
                    d={line}
                    stroke={colors.red}
                    strokeWidth={6}
                    fill={"none"}
                    clipPath={`url(#clip-path-${index + 1})`}
                />
            </G>
        );
    };
    return (
        <View style={styles.chartContainer}>
            <Icons
                name={"radio-button-checked"}
                size={24}
                color={colors.red}
                style={{marginRight: -2, marginBottom: 10}}
            />
            <LineChart
                style={{height: 70, width: "90%"}}
                data={data}
                contentInset={{top: 0, bottom: 40}}
                curve={line}
                svg={{
                    stroke: colors.green ,
                    strokeWidth: 6,
                    clipPath: "url(#clip-path-0)",
                }}>
                <Clips />

                {props.tripInfo.distractions.map((distraction, index) => (
                    <ChartPoint
                        key={index}
                        index={index}
                        distraction={distraction}
                    />
                ))}
                {props.tripInfo.distractions.map((distraction, index) => (
                    <DistractionLine
                        key={index}
                        index={index}
                        distraction={distraction}
                    />
                ))}
            </LineChart>
            <Icons
                name={"place"}
                size={24}
                color={colors.red}
                style={{marginLeft: -6, marginBottom: 10}}
            />
        </View>
    );
};

TripTimeLine.defaultProps = {
    tripInfo: {},
};

TripTimeLine.propTypes = {
    tripInfo: PropTypes.object,
};

const styles = StyleSheet.create({
    chartContainer: {
        marginTop: 20,
        flexDirection: "row",
        padding: 20,
        paddingVertical: 20,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
});

const mapStateToProps = (state) => {
    const {tripInfoReducer} = state;
    return {
        tripInfo: tripInfoReducer.tripInfo,
    };
};

export default connect(mapStateToProps)(TripTimeLine);
