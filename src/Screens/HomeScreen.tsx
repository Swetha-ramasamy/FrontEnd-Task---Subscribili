import React, { useState } from "react";
import { View, TextInput, FlatList, Text, StyleSheet } from "react-native";
import DentistList from "../Components/DentistList";
import dentistsData from "../data/dentists.json";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to filter dentists based on address, zip code, or city
  const filteredDentists = dentistsData.filter((dentist) => {
    const query = searchQuery.toLowerCase();
    return (
      dentist.address.toLowerCase().includes(query) || // Match address
      dentist.zipCode?.toLowerCase().includes(query) || // Match zip code (optional)
      dentist.city?.toLowerCase().includes(query) // Match city (optional)
    );
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder="Search by Address, Zip Code, or City"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      <DentistList dentists={filteredDentists} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  searchBox: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default HomeScreen;
