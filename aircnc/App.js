import React from "react";
import { YellowBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
