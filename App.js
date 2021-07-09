import React from "react";
import { SafeAreaView, View } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { BackButton } from "./src/components";
import { Browse, Home, Login, Menu, Profile, Stats } from "./src/screens";
import Icons from "react-native-vector-icons/MaterialIcons";
import colors from "./src/styles/colors";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchTickers, userLogin } from "./src/screens/mainStore/dispatcher";
import Spinner from "react-native-loading-spinner-overlay";
import styles from "./src/screens/Home/styles";

const MenuStackNavigator = createStackNavigator();
const Screens = createStackNavigator();
const Tab = createBottomTabNavigator();
const Explore = createStackNavigator();

const screenOptions = (props) => ({
  headerShown: false,
  tabBarIcon: ({ focused }) => {
    let iconName;

    switch (props.route.name) {
      case "HomeScreens":
        iconName = "home";
        break;
      case "StatsScreens":
        iconName = "insert-chart-outlined";
        break;
      case "BrowseScreens":
        iconName = "search";
        break;
      case "MenuScreens":
        iconName = "menu";
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

const HomeScreens = () => {
  return (
    <Explore.Navigator screenOptions={navigatorOptions}>
      <MenuStackNavigator.Screen name="Home" component={Home} />
    </Explore.Navigator>
  );
};

const StatsScreens = () => {
  return (
    <Explore.Navigator screenOptions={navigatorOptions}>
      <MenuStackNavigator.Screen name="Stats" component={Stats} />
    </Explore.Navigator>
  );
};

const BrowseScreens = () => {
  return (
    <Explore.Navigator screenOptions={navigatorOptions}>
      <MenuStackNavigator.Screen name="Browse" component={Browse} />
    </Explore.Navigator>
  );
};

const MenuScreens = () => {
  return (
    <MenuStackNavigator.Navigator screenOptions={navigatorOptions}>
      <MenuStackNavigator.Screen name="Menu" component={Menu} />
      <MenuStackNavigator.Screen name="Profile" component={Profile} />
      <MenuStackNavigator.Screen name="Login" component={Login} />
    </MenuStackNavigator.Navigator>
  );
};

const TabsStackScreen = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="HomeScreens"
        component={HomeScreens}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        options={{ title: "Stats" }}
        name="StatsScreens"
        component={StatsScreens}
      />
      <Tab.Screen
        options={{ title: "Browse" }}
        name="BrowseScreens"
        component={BrowseScreens}
      />
      <Tab.Screen
        options={{ title: "Menu" }}
        name="MenuScreens"
        component={MenuScreens}
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
    tickers: mainReducer.tickers,
    expirationTimestamps: mainReducer.error,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      userLogin: userLogin,
      fetchTickers: fetchTickers,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
