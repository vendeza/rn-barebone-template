import React from "react";
import PropTypes from "prop-types";
import {Text, View, StyleSheet} from "react-native";
import commonStyles from "../../styles/commonStyles";
import ContainerView from "../../components/ContainerView";

const Stats = ({onPress, children, text}) => {
    return (
        <ContainerView>
            <View style={{padding: 20}}>
                <Text style={commonStyles.h1}>{"Stats Screen"}</Text>
                <Text style={commonStyles.p}>{"Build screen content"}</Text>
            </View>
        </ContainerView>
    );
};

Stats.defaultProps = {
    children: null,
    onPress: () => {},
    text: "",
};

Stats.propTypes = {
    children: PropTypes.node,
    onPress: PropTypes.func,
    text: PropTypes.string,
};

const styles = StyleSheet.create({});

export default Stats;
