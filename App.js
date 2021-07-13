import React from "react";
import { SafeAreaView, View } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { BackButton } from "./src/components";
import {
  Start,
  Mobilität,
  TripDetails,
  Rewards,
  Mehr,

} from "./src/screens";

import Icons from "react-native-vector-icons/MaterialIcons";
import colors from "./src/styles/colors";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import styles from "./src/screens/Start/styles";

const StackNavigator = createStackNavigator();
const Screens = createStackNavigator();
const Tab = createBottomTabNavigator();
const Explore = createStackNavigator();

const screenOptions = (props) => ({
  headerShown: false,
  tabBarIcon: ({ focused }) => {
    let iconName;

    switch (props.route.name) {
      case "StartScreens":
        iconName = "home";
        break;
      case "MobilitätScreens":
        iconName = "speed";
        break;
      case "TripDetailsScreens":
        iconName = "emoji-events";
        break;
      case "RewardsScreens":
        iconName = "redeem";
        break;
      case "MehrScreens":
        iconName = "emoji-events";
        break;
      default:
        return;
    }
    return (
      <Icons
        name={iconName}
        size={30}
        color={focused ? colors.orange : "#A1A1A1"}
      />
    );
  },
});

const navigatorOptions = {
  headerStyle: {
    height: 120,
  },
  headerTitleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerLeft: ({ canGoBack, onPress }) =>
    canGoBack && <BackButton goBack={onPress} />,
};

const StartScreens = () => {
  return (
    <Explore.Navigator screenOptions={navigatorOptions}>
      <StackNavigator.Screen name="Start" component={Start} />
    </Explore.Navigator>
  );
};


const BrowseScreens = () => {
  return (
    <Explore.Navigator screenOptions={navigatorOptions}>
      <StackNavigator.Screen name="Browse" component={Browse} />
    </Explore.Navigator>
  );
};


const TabsStackScreen = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="StartScreens"
        component={StartScreens}
        options={{ title: "Start" }}
      />

      <Tab.Screen
        options={{ title: "Mobilität" }}
        name="MobilitätScreens"
        component={Mobilität}
      />
      <Tab.Screen
        options={{ title: "Trip Details" }}
        name="TripDetailsScreens"
        component={TripDetails}
      />
      <Tab.Screen
        options={{ title: "Rewards" }}
        name="RewardsScreens"
        component={Rewards}
      />
      <Tab.Screen
        options={{ title: "Mehr" }}
        name="MehrScreens"
        component={Mehr}
      />
    </Tab.Navigator>
  );
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.orange,
    background: "#fff",
  },
};

const App = (props) => {
  if (props.pending) {
    return (
      <SafeAreaView>
        <View
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Spinner
            visible={props.pending}
            textContent={"Loading..."}
            textStyle={styles.spinnerTextStyle}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <Screens.Navigator screenOptions={{ headerShown: false }}>
        <Screens.Screen
          name={"Main"}
          component={TabsStackScreen}
          options={{ headerLeft: null }}
        />
      </Screens.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  const { mainReducer } = state;
  return {
    pending: mainReducer.pending,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {},
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
