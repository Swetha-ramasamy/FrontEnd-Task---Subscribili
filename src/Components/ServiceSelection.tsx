import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

interface ServiceSelectionProps {
  services: string[];
  onSelect: (service: string) => void;
}

export default function ServiceSelection({ services, onSelect }: ServiceSelectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select a Service</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => onSelect(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  heading: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#ddd" }
});
