import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Dimensions,
} from "react-native";

const AddDeck = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30, marginVertical: 20 }}>Add a Deck!</Text>
      <View style={styles.block}>
        <TextInput style={styles.input} placeholder="Enter Title" />
      </View>
      <View style={styles.buttonsView}>
        <View style={styles.button}>
          <Button onPress={() => navigation.goBack()} title="Add Deck" />
        </View>

        <View style={styles.button}>
          <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
      </View>
    </View>
  );
};

export default AddDeck;

const width = Dimensions.get("window").width - 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "grey",
    justifyContent: "center",
  },
  block: {
    marginBottom: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
    paddingHorizontal: 10,
    fontWeight: "bold",
    height: 40,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 25,
    width,
  },
  buttonsView: {
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 20,
    // paddingVertical: 30,
    width: 100,
  },
});
