import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function User() {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>pola {id}</Text>
    </View>
  );
}
