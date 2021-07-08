import React from "react";
import {Text, View} from "react-native";
import styles from "./styles";
import {ButtonCustom, ContainerView} from "../../components";
import colors from "../../styles/colors";

const Start = (props) => {
    const onSearch = async () => {
        props.navigation.navigate("StrategySelectStock");
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
            <ContainerView
                statusBarColor={colors.orange2}
                containerColor={colors.orange2}
                screenTitle={"Home"}>
                <View
                    style={styles.searchFieldsContainer}
                    keyboardShouldPersistTaps="handled">
                    <Text
                        style={{
                            fontSize: 18,
                            textAlign: "center",
                            paddingHorizontal: 20,
                            paddingVertical: 30,
                            lineHeight: 26,
                        }}>
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

export default Start;
