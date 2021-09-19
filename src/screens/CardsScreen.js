import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Card from "../shared/card";

const CardsScreen = ({ route, navigation }) => {
  const cardQue = route.params;
  const [result, setResult] = useState(cardQue);

  console.log(cardQue);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Card Screen</Text>
      <Button
        title="Hello There"
        onPress={() => {
          navigation.push("Deck");
        }}
      />
      <View style={styles.deckContainer}>
        <FlatList
          data={result}
          keyExtractor={(item) => item.question}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Card>
                <Text style={styles.deckText}>{item.question}</Text>
                <Text style={styles.cardText}>{item.answer}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default CardsScreen;

const styles = StyleSheet.create({
  deckContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    height: "100%",
  },
  deckText: {
    fontSize: 20,
  },
  cardText: {
    fontSize: 15,
    color: "grey",
  },
});
