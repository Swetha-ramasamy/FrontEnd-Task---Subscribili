import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import ServiceSelection from "./ServiceSelection";

interface Dentist {
  id: number;
  name: string;
  address: string;
  services: string[];
}

interface DentistListProps {
  dentists: Dentist[];
}

export default function DentistList({ dentists }: DentistListProps) {
  const [selectedDentist, setSelectedDentist] = useState<Dentist | null>(null);

  return (
    <View>
      {!selectedDentist ? (
        <FlatList
          data={dentists}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => setSelectedDentist(item)}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.address}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <ServiceSelection services={selectedDentist.services} onSelect={(service) => console.log("Selected:", service)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  name: { fontSize: 16, fontWeight: "bold" }
});
