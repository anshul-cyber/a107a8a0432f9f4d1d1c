import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen/DetailsScreen";
import CapitalInfoScreen from "../screens/CapitalInfoScreen/CapitalInfoScreen.";

const RootStack = createStackNavigator();

const MainStack = () => (
  <RootStack.Navigator>
    <RootStack.Screen name={"HomeScreen"} component={HomeScreen} />
    <RootStack.Screen name={"DetailsScreen"} component={DetailsScreen} />
    <RootStack.Screen
      name={"CapitalInfoScreen"}
      component={CapitalInfoScreen}
    />
  </RootStack.Navigator>
);

export default MainStack;
