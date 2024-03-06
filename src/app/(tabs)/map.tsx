import { View } from "react-native";
import MapView from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
} from "expo-location";
import { useEffect, useState } from "react";

export default function Map() {
  const [location, setLocation] = useState<LocationObject | null>(null);

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  return (
    <View className="w-full flex-1 bg-zinc-900">
      {location && (
        <MapView
          style={{ width: "100%", flex: 1 }}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        />
      )}
    </View>
  );
}
