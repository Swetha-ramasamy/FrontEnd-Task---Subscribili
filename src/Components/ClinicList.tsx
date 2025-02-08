import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import ServiceSelection from "./ServiceSelection";

interface Clinic {
  id: number;
  name: string;
  address: string;
  services: string[];
}

interface ClinicListProps {
  Clinics: Clinic[];
}

export default function ClinicList({ Clinics }: ClinicListProps) {
  const [selectedClinic, setSelectedClinic] = useState<Clinic | null>(null);

  return (
    <View>
      {!selectedClinic ? (
        <FlatList
          data={Clinics}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => setSelectedClinic(item)}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.address}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <ServiceSelection services={selectedClinic.services} onSelect={() => {}} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  name: { fontSize: 16, fontWeight: "bold" }
});