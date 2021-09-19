import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DeckScreen from "../screens/DeckScreen";
import CardScreen from "../screens/CardsScreen";
import AddDeck from "../components/AddDeck";

const Root = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName="Home">
        <Root.Screen name="Deck" component={DeckScreen} />
        <Root.Screen name="Cards" component={CardScreen} />
        <Root.Group screenOptions={{ presentation: "modal" }}>
          <Root.Screen name="AddDeck" component={AddDeck} />
        </Root.Group>
      </Root.Navigator>
    </NavigationContainer>
  );
};
export default HomeStack;
