import React from "react";
import {Text, View} from "react-native";
import {ContainerView} from "../../components";
import styles from "../Home/styles";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getCars} from "../../server/api/cars";

const Browse = (props) => {
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

