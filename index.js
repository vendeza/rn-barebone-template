/**
 * @format
 */

import { AppRegistry } from "react-native";
import Boot from "./src/screens/Boot";
import App from "./App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Boot);
