import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import dentistData from "../data/dentist.json"; // Import dentists JSON

interface ServiceSelectionProps {
  services: string[];
  onSelect: (service: string) => void;
}

export default function ServiceSelection({ services, onSelect }: ServiceSelectionProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Filter dentists who provide the selected service
  const filteredDentists = selectedService
    ? dentistData.filter((dentist) => dentist.services.includes(selectedService))
    : [];

  return (
    <View style={styles.container}>
      {!selectedService ? (
        <>
          <Text style={styles.heading}>Select a Service</Text>
          <FlatList
            data={services}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.item} onPress={() => {
                setSelectedService(item);
                onSelect(item);
              }}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </>
      ) : (
        <>
          <Text style={styles.heading}>Dentists Offering {selectedService}</Text>
          <FlatList
            data={filteredDentists}
            keyExtractor={(dentist) => dentist.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.dentistItem}>
                <Text style={styles.name}>{item.name}</Text>
                <Text>Specialization: {item.specialization}</Text>
                <Text>Experience: {item.experience}</Text>
              </View>
            )}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  heading: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  dentistItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#bbb" },
  name: { fontSize: 16, fontWeight: "bold" }
});
