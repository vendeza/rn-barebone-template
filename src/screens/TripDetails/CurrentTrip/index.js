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

        console.log("dZone: " + dZone);
        console.log("a1: " + a1);
        console.log("a2: " + a2);
        console.log("b1: " + b1);
        console.log("b2: " + b2);
        console.log("tripTime: " + tripTime);

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

    const indexToClipFrom = 4;

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
        <View style={{flex: 1}}>
            <View style={{flex:1}}>
                <Text style={styles.mainText}>{"Samstag, 18. Juli 2021"}</Text>
                <View>
                    <Text>
                        {"Start trip: " +
                            timestampTimeFormatter(props.tripInfo.startTs)}
                    </Text>
                </View>
                <View>
                    <Text>
                        {"End trip: " +
                            timestampTimeFormatter(props.tripInfo.endTs)}
                    </Text>
                </View>
                <View style={{justifyContent:'center', flex:1, alignItems:'center'}}>
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
                <Text style={styles.mainText}>{"Samstag, 18. Juli 2021"}</Text>
            </View>
        </View>
    );
};

const mapStateToProps = (state) => {
    const {tripInfoReducer} = state;
    return {
        tripInfo: tripInfoReducer.tripInfo,
    };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({fetchTripInfo: fetchTripInfo}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);

