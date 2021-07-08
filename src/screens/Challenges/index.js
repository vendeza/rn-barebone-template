import React from "react";
import {Text, View} from "react-native";
import {ButtonCustom, Card, ContainerView} from "../../components";
import colors from "../../styles/colors";
import styles from "../Start/styles";

const Challenges = (props) => {
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
            <View style={{height: 140}}>
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
                        <Text style={styles.mainText}>
                            {"Our algorithms help to lorem ipsum dolor sit amet, consectetur adipiscing " +
                                "elit, sed do eiusmod tempor incididunt ut labore. Let’s help find the strategy " +
                                "that works best for you."}
                        </Text>
                    </View>
                    <View style={styles.searchFieldsContainer}>
                        {Challenges("Overal", 75)}
                        {Challenges("Distraction", 90)}
                        {Challenges("Safeness", 30)}
                        {Challenges("Speed", 20)}
                        <GetStartedButton />
                    </View>
                </View>
            </ContainerView>
        </View>
    );
};

export default Challenges;
