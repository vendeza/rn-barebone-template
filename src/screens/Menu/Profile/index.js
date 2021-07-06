import React from "react";
import {Text, View} from "react-native";
import ContainerView from "../../../components/ContainerView";
import commonStyles from "../../../styles/commonStyles";
import Icons from "react-native-vector-icons/MaterialIcons";
import {colors} from "../../../constants";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const Profile = (props) => {
    return (
        <ContainerView>
            <View style={{padding: 20}}>
                <Text style={commonStyles.h1}>{"Profile Screen"}</Text>
                <Text style={commonStyles.p}>{"Profile screen content"}</Text>
                <Icons
                    style={{marginTop: 10}}
                    name={"person"}
                    size={60}
                    color={colors.blue}
                />
                <Text style={{fontSize: 18, marginTop: 10}}>
                    Name: {props.user.name}
                </Text>
                <Text style={{fontSize: 18}}>Email: {props.user.email}</Text>
            </View>
        </ContainerView>
    );
};

const mapStateToProps = (state) => {
    const {mainReducer} = state;
    return {
        user: mainReducer.user,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
