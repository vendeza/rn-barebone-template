import React, {useEffect} from "react";
import {ScrollView, Text, View} from "react-native";
import {Card} from "../../../components";
import styles from "../../Start/styles";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchTripInfo} from "../store/fetchers";
import {timestampTimeFormatter} from "../../../utils/helper";
import {ClipPath, Defs, ForeignObject, G, Rect} from "react-native-svg";
import {LineChart, Path} from "react-native-svg-charts";
import * as shape from "d3-shape";
import Icons from "react-native-vector-icons/MaterialIcons";
import ProgressCircle from "react-native-progress-circle";
import commonStyles from "../../../styles/commonStyles";

const TripDetails = (props) => {
    useEffect(() => {
        props.fetchTripInfo();
    }, []);

    const Challenges = ({name, score}) => {
        return (
            <View style={{marginLeft: 20}}>
                <View style={{width: 130}}>
                    <Card>
                        <Text style={{padding: 10, fontSize: 14}}>{name}</Text>
                        <ProgressCircle
                            percent={score}
                            radius={50}
                            borderWidth={10}
                            color="'rgb(60,187,4)'"
                            shadowColor="#ccc"
                            bgColor="#fff">
                            <Text style={{padding: 0, fontSize: 18}}>
                                {score}
                            </Text>
                            <Text style={{padding: 0, fontSize: 10}}>
                                {"Score"}
                            </Text>
                        </ProgressCircle>
                    </Card>
                </View>
            </View>
        );
    };

    const data = [0, 0];
    if (!props.tripInfo) {
        return <View />;
    }

    const RenderLine = ({tripInfo, width, distraction, key, index}) => {
        const startTs = tripInfo.startTs;
        const endTs = tripInfo.endTs;

        const tripTime = endTs - startTs;

        const dZone = distraction;

        const a1 = dZone.start - startTs;
        const a2 = dZone.end - startTs;

        const b1 = a1 / tripTime;
        const b2 = a2 / tripTime;

        return (
            <ClipPath id={`clip-path-${index + 1}`}>
                <Rect
                    x={b1 * width}
                    y={"0"}
                    width={b2 * width}
                    height={"100%"}
                />
            </ClipPath>
        );
    };

    const ChartPoint = ({width, distraction}) => {
        const startTs = props.tripInfo.startTs;
        const endTs = props.tripInfo.endTs;

        const tripTime = endTs - startTs;

        const dZone = distraction;

        const a1 = dZone.start - startTs;
        const a2 = dZone.end - startTs;

        const b1 = a1 / tripTime;
        const b2 = a2 / tripTime;
        return (
            <ForeignObject
                x={(b1 * width + b2 * width) / 2}
                y={40}
                width={100}
                height={40}>
                <Icons name={"touch-app"} color={"red"} size={24} />
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

    const DistractionLine = ({line, key, index, distraction}) => {
        return (
            <G>
                <Path
                    key={`line-${key + 1}`}
                    d={line}
                    stroke={"rgb(227,10,10)"}
                    strokeWidth={6}
                    fill={"none"}
                    clipPath={`url(#clip-path-${index + 1})`}
                />
            </G>
        );
    };

    const line = shape.curveBasis;
    return (
        <View style={{flex: 1, backgroundColor: "#f1f1f1"}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1}}>
                    <Text style={styles.mainText}>
                        {"Samstag, 18. Juli 2021"}
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            padding: 10,
                            paddingVertical: 20,
                            backgroundColor: "#fff",
                            alignItems: "center",
                        }}>
                        <Icons
                            name={"chevron-left"}
                            size={30}
                            color={"#444"}
                            style={{marginRight: 10}}
                        />
                        <View
                            style={{
                                height: 70,
                                width: 50,
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}>
                            <Text>
                                {timestampTimeFormatter(props.tripInfo.startTs)}
                            </Text>
                            <Text>
                                {timestampTimeFormatter(props.tripInfo.endTs)}
                            </Text>
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
                                }}></View>
                            <Icons
                                name={"place"}
                                size={20}
                                color={"red"}
                                style={{marginTop: -2}}
                            />
                        </View>
                        <View
                            style={{
                                height: 70,
                                paddingLeft: 10,
                                flex: 2,
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}>
                            <Text style={{fontSize: 10}}>
                                {props.tripInfo.startAddress.substring(0, 30) +
                                    "..."}
                            </Text>
                            <Text style={{fontSize: 10}}>
                                {props.tripInfo.endAddress.substring(0, 30) +
                                    "..."}
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                paddingLeft: 10,
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}>
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
                                <Icons
                                    name={"directions-car"}
                                    size={20}
                                    color={"red"}
                                />
                            </ProgressCircle>
                        </View>
                        <Icons
                            name={"chevron-right"}
                            size={30}
                            color={"#444"}
                            style={{marginLeft: 10}}
                        />
                    </View>

                    <View
                        style={{
                            marginTop: 20,
                            flexDirection: "row",
                            padding: 20,
                            paddingVertical: 20,
                            backgroundColor: "#fff",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Icons
                            name={"radio-button-checked"}
                            size={24}
                            color={"red"}
                            style={{marginRight: -2, marginBottom: 10}}
                        />
                        <LineChart
                            style={{height: 70, width: "90%"}}
                            data={data}
                            contentInset={{top: 0, bottom: 40}}
                            curve={line}
                            svg={{
                                stroke: "rgb(60,187,4)",
                                strokeWidth: 6,
                                clipPath: "url(#clip-path-0)",
                            }}>
                            <Clips />

                            {props.tripInfo.distractions.map(
                                (distraction, index) => (
                                    <ChartPoint
                                        key={index}
                                        index={index}
                                        distraction={distraction}
                                    />
                                ),
                            )}
                            {props.tripInfo.distractions.map(
                                (distraction, index) => (
                                    <DistractionLine
                                        key={index}
                                        index={index}
                                        distraction={distraction}
                                    />
                                ),
                            )}
                        </LineChart>
                        <Icons
                            name={"place"}
                            size={24}
                            color={"red"}
                            style={{marginLeft: -6, marginBottom: 10}}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            height: 80,
                            margin: 20,
                            marginBottom: 0,
                            padding: 10,
                            borderColor: "#ccc",
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            alignItems: "center",
                        }}>
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
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}>
                        <View
                            style={{flexDirection: "row", paddingVertical: 20}}>
                            <Challenges
                                name={"Insgesamt"}
                                score={props.tripInfo.scores.distraction}
                            />
                            <Challenges
                                name={"Ablenkung"}
                                score={props.tripInfo.scores.safety}
                            />
                            <Challenges
                                name={"Ablenkung"}
                                score={props.tripInfo.scores.speed}
                            />
                            <Challenges
                                name={"Ablenkung"}
                                score={props.tripInfo.scores.total}
                            />
                        </View>
                    </ScrollView>
                    <View style={{padding: 20, paddingTop: 0}}>
                        <Text style={commonStyles.p}>{"Wussten Sie, ..."}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const mapStateToProps = (state) => {
  const { tripInfoReducer } = state;
  return {
    tripInfo: tripInfoReducer.tripInfo,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchTripInfo: fetchTripInfo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);

