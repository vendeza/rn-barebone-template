import React, {useEffect, useState} from "react";
import {SafeAreaView, Text, View} from "react-native";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import {BackButton} from "./src/components";
import {
  Mobilität,
  Mehr,
  Challenges,
  Profile,
  Start,
  Rewards
} from "./src/screens";
import Icons from "react-native-vector-icons/MaterialIcons";
import colors from "./src/styles/colors";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { userLogin} from "./src/screens/mainStore/dispatcher";
import { fetchTickers } from "./src/screens/mainStore/dispatcher";
import Spinner from "react-native-loading-spinner-overlay";
import styles from "./src/screens/Start/styles";
const MenuStackNavigator = createStackNavigator();
const Screens = createStackNavigator();
const Tab = createBottomTabNavigator();
const Explore = createStackNavigator();

const screenOptions = (props) => ({
  headerShown: false,
  tabBarIcon: ({focused}) => {
    let iconName;

    switch (props.route.name) {
      case "Start":
        iconName = "home";
        break;
      case "Mobilität":
        iconName = "speed";
        break;
      case "Challenges":
        iconName = "emoji-events";
        break;
      case "Rewards":
        iconName = "redeem";
        break;
      case "Mehr":
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
    fontSize:18,
    fontWeight: "bold",
  },
  headerLeft: ({canGoBack, onPress}) =>
    canGoBack && (
      <BackButton goBack={onPress}/>
    ),
};

const ExploreScreens = () => {
  return (
    <Explore.Navigator screenOptions={navigatorOptions}>
      <MenuStackNavigator.Screen
        options={{headerShown: false}}
        name="MainExplore"
        component={Start}
      />
    </Explore.Navigator>
  );
};

const BrowseScreens = () => {
  return (
    <Explore.Navigator screenOptions={navigatorOptions}>
      <MenuStackNavigator.Screen

        name="Trip Details"
        component={Challenges}
      />

    </Explore.Navigator>
  );
};

const MenuScreens = () => {
  return (
    <MenuStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <MenuStackNavigator.Screen name="MainMenu" component={Mehr} />
      <MenuStackNavigator.Screen name="Profile" component={Profile} />
    </MenuStackNavigator.Navigator>
  );
};

const TabsStackScreen = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Start"
        component={ExploreScreens}
        options={{headerLeft: null}}
      />
      <Tab.Screen name="Mobilität" component={Mobilität} />
      <Tab.Screen
        name="Challenges"
        component={BrowseScreens}
        options={{title: 'Trip Details'}}
      />
      <Tab.Screen name="Rewards" screenOptions={{title: 'Trip Details'}} component={Rewards} />
      <Tab.Screen name="Mehr" component={MenuScreens} />
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
        <View style={{width:"100%", height:"100%", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
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
      <Screens.Navigator
        screenOptions={{
          headerShown: false,
        }}
       >
        <Screens.Screen
          name={"Rewards"}
          component={TabsStackScreen}
          options={{title: "", headerLeft: null}}
        />

        <Screens.Screen
          name={"Tigerstance"}
          component={TabsStackScreen}
        />
      </Screens.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  const {mainReducer} = state;
  return {
    pending: mainReducer.pending,
    tickers: mainReducer.tickers,
    expirationTimestamps: mainReducer.error,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      userLogin: userLogin,
      fetchTickers: fetchTickers
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
