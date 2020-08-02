import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Book from "./pages/Book";
import List from "./pages/List";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <AppStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <AppStack.Screen name="Login" component={Login} />
      <AppStack.Screen name="Book" component={Book} />
      <AppStack.Screen name="List" component={List} />
    </AppStack.Navigator>
  );
}
