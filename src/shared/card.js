import React from "react";
import { StyleSheet, Text, View } from "react-native";

const card = ({ children, style }) => {
  return (
    <View style={[styles.card, { ...style }]}>
      <View style={styles.bottom}></View>
      <View style={styles.top}>{children}</View>
    </View>
  );
};

export default card;

const styles = StyleSheet.create({
  card: {
    // minHeight: 150,
    height: 150,
    width: 200,
    elevation: 8,
    marginVertical: 10,
    shadowColor: "black",
  },
  top: {
    flex: 1,
    borderColor: "grey",
    borderRadius: 2,
    borderWidth: 1.5,
    position: "absolute",
    backgroundColor: "white",
    zIndex: 1,
    width: "97%",
    height: "97%",
    padding: 5,
  },
  bottom: {
    borderColor: "grey",
    borderRadius: 2,
    borderWidth: 1.5,
    width: "97%",
    height: "97%",
    margin: "3%",
    backgroundColor: "white",
    color: "white",
  },
});

// card: {
//     shadowColor: "black",
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 6,
//     shadowOpacity: 0.26,
//     elevation: 8,
//     backgroundColor: "white",
//     padding: 20,
//     borderRadius: 10,
//     width: 300,
//     height: 100,
//     marginVertical: 10,
//   },
//   cardContent: {},
