import React, { useState } from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search");
    setResults(response.data.businessess);
  };

  return (
    <View>
      <Text>Search Screen</Text>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>We have found {results.length} results.</Text>
    </View>
  );
};

export default SearchScreen;
