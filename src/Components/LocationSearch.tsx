import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

interface LocationSearchProps {
  onSearch: (location: string) => void;
}

export default function LocationSearch({ onSearch }: LocationSearchProps) {
  const [location, setLocation] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter city or zip code"
        value={location}
        onChangeText={setLocation}
      />
      <Button title="Search" onPress={() => onSearch(location)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: 10 },
  input: { flex: 1, borderWidth: 1, padding: 8, marginRight: 10, borderRadius: 5 }
});
