import React from "react";
import {Text, View} from "react-native";
import {ContainerView} from "../../components";
import styles from "../Home/styles";

const Browse = () => {
    return (
        <View style={{flex: 1}}>
            <ContainerView>
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
                    </View>
                </View>
            </ContainerView>
        </View>
    );
};

export default Browse;
