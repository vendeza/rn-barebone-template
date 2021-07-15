import React, {useEffect} from "react";
import {ScrollView, Text, View} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchTripInfo} from "../store/fetchers";
import {getCurrentDate} from "../../../utils/helper";
import commonStyles from "../../../styles/commonStyles";
import ChallengeCard from "./ChallengeCard";
import TripSlider from "./TripSlider";
import TripTimeLine from "./TripTimeLine";
import DistractionTimeInfo from "./DistractionTimeInfo";

const TripDetails = (props) => {
    useEffect(() => {
        props.fetchTripInfo();
    }, []);

    const currentDate = getCurrentDate();

    if (!props.tripInfo) {
        return <View />;
    }
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{flex: 1, backgroundColor: "#f1f1f1"}}>
            <Text style={commonStyles.p2}>{currentDate}</Text>
            <TripSlider />
            <TripTimeLine />
            <DistractionTimeInfo />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection: "row", paddingVertical: 20}}>
                    <ChallengeCard
                        name={"Insgesamt"}
                        score={props.tripInfo.scores.distraction}
                    />
                    <ChallengeCard
                        name={"Ablenkung"}
                        score={props.tripInfo.scores.safety}
                    />
                    <ChallengeCard
                        name={"Speed"}
                        score={props.tripInfo.scores.speed}
                    />
                    <ChallengeCard
                        name={"Total"}
                        score={props.tripInfo.scores.total}
                    />
                </View>
            </ScrollView>
            <View style={{padding: 20, paddingTop: 0}}>
                <Text style={commonStyles.p}>{"Wussten Sie, ..."}</Text>
            </View>
        </ScrollView>
    );
};

const mapStateToProps = (state) => {
    const {tripInfoReducer} = state;
    return {
        tripInfo: tripInfoReducer.tripInfo,
    };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchTripInfo: fetchTripInfo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);

