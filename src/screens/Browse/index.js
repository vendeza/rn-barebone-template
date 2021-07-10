import React from "react";
import {Text, View} from "react-native";
import {ContainerView} from "../../components";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getCars} from "../../server/api/cars";
import commonStyles from "../../styles/commonStyles";

const Browse = () => {
    return (
        <View style={{flex: 1}}>
            <ContainerView>
                <Text style={commonStyles.h1}>{"Browse screen"}</Text>
                <Text style={commonStyles.p}>{"Browse elements"}</Text>
            </ContainerView>
        </View>
    );
};

const mapStateToProps = (state) => {
    const {browseReducer} = state;
    return {
        exampleValue: browseReducer.exampleValue,
    };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getCars: getCars,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
