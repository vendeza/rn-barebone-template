import React, {useEffect} from "react";
import {Text, View} from "react-native";
import {ButtonCustom, Card} from "../../../components";
import colors from "../../../styles/colors";
import styles from "../../Start/styles";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchTripInfo} from "../store/fetchers";
import {timestampTimeFormatter} from "../../../utils/helper";
import {ClipPath, Defs, Rect} from "react-native-svg";
import {LineChart, Path} from "react-native-svg-charts";
import * as shape from "d3-shape";
import Icons from "react-native-vector-icons/MaterialIcons";
import ProgressCircle from "react-native-progress-circle";

const TripDetails = (props) => {
    useEffect(() => {
        props.fetchTripInfo();
    }, []);

    const onSearch = async () => {
        props.navigation.navigate("OptionsSelectStock");
    };

    const GetStartedButton = () => {
        return (
            <ButtonCustom
                buttonStyle={{
                    marginTop: 20,
                    backgroundColor: colors.black,
                }}
                title={"Get Started"}
                onPress={() => {
                    onSearch();
                }}
            />
        );
    };
    const Challenges = (name, score) => {
        return (
            <View style={{marginLeft: 10}}>
                <View style={{width: 160}}>
                    <Card>
                        <Text style={{padding: 10, fontSize: 20}}>{name}</Text>
                        <Text style={{padding: 10, fontSize: 40}}>{score}</Text>
                        <Text style={{padding: 10, fontSize: 18}}>
                            {"Score"}
                        </Text>
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

        const b1 = a1 / tripTime; //доля в отрезке стартовой токи
        const b2 = a2 / tripTime; //доля в отрезке конечной токи

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

    const DistractionLine = ({line, key, index}) => {
        return (
            <Path
                key={`line-${key + 1}`}
                d={line}
                stroke={"rgb(199,29,29)"}
                strokeWidth={6}
                fill={"none"}
                clipPath={`url(#clip-path-${index + 1})`}
            />
        );
    };

    const line = shape.curveBasis;
    return (
        <View style={{flex: 1, backgroundColor: "#f1f1f1"}}>
            <View style={{flex: 1}}>
                <Text style={styles.mainText}>{"Samstag, 18. Juli 2021"}</Text>
                <View
                    style={{
                        flexDirection: "row",
                        padding: 10,
                        paddingVertical: 20,
                        backgroundColor: "#fff",
                        alignItems: "center",
                    }}>
                    <Icons name={"chevron-left"} size={30} color={"#444"} style={{marginRight:10}} />
                    <View
                        style={{
                            height: 100,
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
                        <Icons name={"home"} size={20} color={"red"} />
                        <View
                            style={{
                                height: 60,
                                width: 4,
                                backgroundColor: "red",
                            }}></View>
                        <Icons name={"home"} size={20} color={"red"} />
                    </View>
                    <View
                        style={{
                            height: 100,
                            paddingLeft: 10,
                            flex: 1,
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}>
                        <Text>
                            {props.tripInfo.startAddress.substring(0, 8)}
                        </Text>
                        <Text>{props.tripInfo.endAddress.substring(0, 8)}</Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            paddingLeft: 10,
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}>
                        <ProgressCircle
                            percent={75}
                            radius={50}
                            borderWidth={4}
                            color="'rgb(60,187,4)'"
                            shadowColor="#ccc"
                            bgColor="#fff">
                            <Text style={{fontSize: 18}}>{"75"}</Text>
                            <Icons name={"home"} size={20} color={"red"} />
                        </ProgressCircle>
                    </View>
                    <Icons name={"chevron-right"} size={30} color={"#444"} style={{marginLeft:10}} />
                </View>
                <View
                    style={{
                        justifyContent: "center",
                        flex: 1,
                        alignItems: "center",
                    }}>
                    <LineChart
                        style={{height: 50, width: "90%"}}
                        data={data}
                        contentInset={{top: 20, bottom: 20}}
                        curve={line}
                        svg={{
                            stroke: "#27A69A",
                            strokeWidth: 6,
                            clipPath: "url(#clip-path-0)",
                        }}>
                        <Clips />
                        {props.tripInfo.distractions.map(
                            (distraction, index) => (
                                <DistractionLine key={index} index={index} />
                            ),
                        )}
                    </LineChart>
                </View>
            </View>
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

