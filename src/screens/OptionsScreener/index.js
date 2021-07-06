import React from "react";
import {Text, View} from "react-native";
import {ButtonCustom, ContainerView} from "../../components";
import colors from "../../styles/colors";
import styles from "../StrategyScreener/styles";

const OptionsScreener = (props) => {
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

    return (
        <View style={{flex: 1}}>
            <ContainerView
                statusBarColor={colors.orange2}
                containerColor={colors.orange2}
                screenTitle={"Home"}
                containerStyle={{padding: 0}}>
                <View
                    style={{
                        ...styles.container,
                    }}
                    contentContainerStyle={styles.contentContainer}
                    keyboardShouldPersistTaps="handled">
                    <View style={styles.searchFieldsContainer}>
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
                </View>
            </ContainerView>
        </View>
    );
};

export default OptionsScreener;
