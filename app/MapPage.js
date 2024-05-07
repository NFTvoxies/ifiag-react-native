import React from 'react';
import { View, Image, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapPage = ({ route }) => {
  const { selectedImage } = route.params;

  // Dummy location for demonstration
  const initialRegion = {
    latitude: 33.5731,
    longitude: -7.5898,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} initialRegion={initialRegion}>
        <Marker coordinate={{ latitude: initialRegion.latitude, longitude: initialRegion.longitude }} />
      </MapView>
      <View style={{ position: 'absolute', bottom: 20, left: 20 }}>
        <Image source={{ uri: selectedImage }} style={{ width: 100, height: 100 }} />
        <Text>Uploaded Image</Text>
      </View>
    </View>
  );
};

export default MapPage;