import React from "react";
import { ScrollView, Text, View } from "react-native";
import { ButtonCustom, Card, ContainerView } from "../../components";
import colors from "../../styles/colors";
import styles from "../Start/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const TripDetails = (props) => {
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
      <View style={{ height: 140, marginLeft:10 }}>
        <View style={{ width: 160 }}>
          <Card>
            <Text style={{ padding: 10, fontSize: 20 }}>{name}</Text>
            <Text style={{ padding: 10, fontSize: 40 }}>{score}</Text>
            <Text style={{ padding: 10, fontSize: 18 }}>
              {"Score"}
            </Text>
          </Card>
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <ContainerView>
        <View style={styles.searchFieldsContainer}>
          <Text style={styles.mainText}>
            {"Our algorithms help to lorem ipsum dolor sit amet, consectetur adipiscing " +
            "elit, sed do eiusmod tempor incididunt ut labore. Let’s help find the strategy " +
            "that works best for you."}
          </Text>
        </View>
        <View style={styles.searchFieldsContainer}>
          <ScrollView horizontal>
            {Challenges("Overal", 75)}
            {Challenges("Distraction", 90)}
            {Challenges("Safeness", 30)}
            {Challenges("Speed", 20)}
          </ScrollView>

        </View>
        <GetStartedButton />
      </ContainerView>
    </View>
  );
};

const mapStateToProps = (state) => {
  const { mainReducer } = state;
  return {
    userName: mainReducer.user.name,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);
