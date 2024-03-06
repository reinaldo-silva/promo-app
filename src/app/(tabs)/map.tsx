import { ActivityIndicator, View } from "react-native";
import MapView from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
} from "expo-location";
import { useEffect, useState } from "react";
import { Text } from "@components/Text";

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

  if (!location) {
    return (
      <View className="flex-1 items-center justify-center gap-2 bg-zinc-900">
        <ActivityIndicator className="flex" size="large" />
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View className="w-full flex-1 bg-zinc-900">
      <MapView
        style={{ width: "100%", flex: 1 }}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      />
    </View>
  );
}
