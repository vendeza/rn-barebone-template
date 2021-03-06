import React from "react";
import {Text, View} from "react-native";
import styles from "./styles";
import {ButtonCustom, ContainerView} from "../../components";
import colors from "../../styles/colors";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {userLogout} from "../mainStore/fetchers";
import commonStyles from "../../styles/commonStyles";

const Home = (props) => {
    const onSearch = async () => {
        props.navigation.navigate("Browse");
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

    return (
        <View style={{flex: 1}}>
            <ContainerView>
                <View style={styles.searchFieldsContainer}>
                    <Text style={commonStyles.h1}>
                        {"The perfect template to start your project"}
                    </Text>
                    <Text style={commonStyles.p}>
                        {"Our algorithms help to lorem ipsum dolor sit amet, consectetur adipiscing " +
                            "elit, sed do eiusmod tempor incididunt ut labore. Let’s help find the strategy " +
                            "that works best for you."}
                    </Text>
                    <GetStartedButton />
                </View>
            </ContainerView>
        </View>
    );
};
const mapStateToProps = (state) => {
    const {mainReducer} = state;
    return {
        userName: mainReducer.user.name,
    };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            userLogout: userLogout,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
