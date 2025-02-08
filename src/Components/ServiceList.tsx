import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

interface ServiceSelectionProps {
  services: string[];
  onSelect: (service: string) => void;
}

export default function ServiceSelection({ services, onSelect }: ServiceSelectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Service</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => onSelect(item)}>
            <Text style={styles.serviceName}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  serviceName: { fontSize: 16 }
});
