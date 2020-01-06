import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <EvilIcons style={styles.icon} name="search" />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    margin: 15,
    padding: 5,
    backgroundColor: "#F0EEEE",
    borderRadius: 5,
    height: 50,
    flexDirection: "row"
  },
  input: {
    flex: 1,
    fontSize: 18
  },
  icon: {
    fontSize: 40,
    alignSelf: "center",
    marginHorizontal: 8
  }
});

export default SearchBar;
