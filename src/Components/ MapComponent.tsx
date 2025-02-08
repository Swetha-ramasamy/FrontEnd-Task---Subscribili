import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
interface Dentist {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
}
interface MapComponentProps {
  dentists: Dentist[];
  onSelectLocation: (location: Dentist) => void;
}

export default function MapComponent({ dentists, onSelectLocation }: MapComponentProps) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 40.712776,
          longitude: -74.005974,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        provider="google"
        
      >
        {dentists.map((dentist) => (
          <Marker
            key={dentist.id}
            coordinate={{ latitude: dentist.lat, longitude: dentist.lng }}
            title={dentist.name}
            description={dentist.address}
            onPress={() => onSelectLocation(dentist)}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, height: 300 },
  map: { flex: 1 },
});
