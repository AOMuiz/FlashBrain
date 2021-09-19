import AsyncStorage from "@react-native-async-storage/async-storage";

let Decks = {
  React: {
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
  JavaScript: {
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
  HTML: {
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
};

const storage_Key = "TopFlashCard:Decks";

export const getAllDeck = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(storage_Key);

    if (jsonValue === null) {
      AsyncStorage.setItem(storage_Key, JSON.stringify(Decks));
    }
    console.log(JSON.parse(jsonValue));
    return jsonValue === null ? Decks : JSON.parse(jsonValue);
  } catch (e) {
    // error reading value
    console.log(e);
  }
};

export const getSingleDeck = async (id) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storage_Key);
    console.log(id);
    let singleDeck = JSON.parse(jsonValue)[id];
    console.log(singleDeck);
    return singleDeck;
  } catch (e) {
    // error reading value
    console.log(err);
  }
};

export const storeDeck = async (title) => {
  try {
    const titleValue = JSON.stringify({
      [title]: {
        title,
        questions: [],
      },
    });
    await AsyncStorage.mergeItem(storage_Key, titleValue);
    console.log(titleValue);
  } catch (e) {
    // saving error
    console.log(e);
  }
};

export const addCardToDeck = async (title, card) => {
  try {
    const deck = await getSingleDeck(title);
    await AsyncStorage.mergeItem(
      storage_Key,
      JSON.stringify({
        [title]: {
          questions: [...deck.questions].concat(card),
        },
      })
    );
  } catch (e) {
    // saving error
    console.log(e);
  }
};

export const resetAllDecks = async () => {
  try {
    await AsyncStorage.removeItem(storage_Key);
  } catch (error) {
    console.log(error);
  }
};
