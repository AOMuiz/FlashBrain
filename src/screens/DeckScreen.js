import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import RoundIconBtn from "../components/RoundBtn";
import Card from "../shared/card";
// import FlipCard from "react-native-flip";
import {
  storeDeck,
  getAllDeck,
  getSingleDeck,
  addCardToDeck,
  resetAllDecks,
} from "../shared/storage";

const DeckScreen = ({ navigation }) => {
  const [decks, setDecks] = useState([
    {
      title: "React",
      id: "1",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    {
      title: "JavaScript",
      id: "2",
      questions: [
        {
          question: "What is a closure?",
          answer:
            "The combination of a function and the lexical environment within which that function was declared.",
        },
      ],
    },
    {
      title: "HTML",
      id: "3",
      questions: [
        {
          question: "What is a HTML?",
          answer:
            "HyperText MarkUp Language For building the structure and content of a website.",
        },
      ],
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  // console.log(navigation);

  return (
    <>
      {/* <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <Text>Modal Here</Text>
          <RoundIconBtn
            onPress={() => setModalOpen(false)}
            antIconName="arrowleft"
            style={styles.addBtn}
          />

          <TextInput style={styles.textInputStyle} placeholder="Enter Email" />
          <TextInput
            style={styles.textInputStyle}
            secureTextEntry={true}
            placeholder="Enter Password"
          />
        </View>
      </Modal> */}

      <Button title="Get All Decks" onPress={() => console.log(getAllDeck())} />

      <Button
        title="reset Decks"
        onPress={() => console.log(resetAllDecks())}
      />

      <Button
        title="Get Single Decks"
        onPress={() => console.log(getSingleDeck("React"))}
      />
      <Button
        title="Add Card"
        onPress={() =>
          console.log(
            addCardToDeck("CSS3", {
              question: "What is CSS3?",
              answer: "CSS3 is the latest css standard",
            })
          )
        }
      />
      <Button
        title="Store Deck"
        onPress={() => console.log(storeDeck("CSS3"))}
      />
      <Text style={styles.deck}>Deck View</Text>
      <View style={styles.deckContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={decks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Cards", item.questions);
                // navigation.setOptions({ title: item.title });
              }}
            >
              <Card>
                <Text style={styles.deckText}>{item.title}</Text>
                <Text style={styles.cardText}>
                  {item.questions.length} Total Cards
                </Text>
              </Card>
            </TouchableOpacity>
          )}
        />
        {/* <Button
          title="Add Deck"
          sty
          onPress={() => navigation.navigate("AddDeck")}
        /> */}
        <RoundIconBtn
          onPress={() => setModalOpen(true)}
          antIconName="plus"
          style={styles.addBtn}
        />
      </View>
    </>
  );
};

export default DeckScreen;

const styles = StyleSheet.create({
  deck: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "white",
  },
  deckContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: "white",
  },
  deckText: {
    fontSize: 28,
  },
  cardText: {
    fontSize: 18,
    color: "grey",
  },
  addBtn: {
    position: "absolute",
    right: 20,
    bottom: 10,
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  textInputStyle: {
    borderWidth: 2,
    borderBottomColor: "grey",
    padding: 5,
    marginVertical: 10,
    width: 200,
  },
});
