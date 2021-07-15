import React from "react";
import PropTypes from "prop-types";
import {Text, View} from "react-native";
import {Card} from "../../../components";
import ProgressCircle from "react-native-progress-circle";

const ChallengeCard = ({name, score}) => {
    return (
        <View style={{marginLeft: 20, marginRight:20}}>
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
                        <Text style={{padding: 0, fontSize: 18}}>{score}</Text>
                        <Text style={{padding: 0, fontSize: 10}}>
                            {"Score"}
                        </Text>
                    </ProgressCircle>
                </Card>
            </View>
        </View>
    );
};

ChallengeCard.defaultProps = {
    name: "",
    score: 0,
};

ChallengeCard.propTypes = {
    name: PropTypes.string,
    score: PropTypes.number,
};


export default ChallengeCard;
