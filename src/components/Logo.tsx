import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import colors from "tailwindcss/colors";

import { Text } from "@components/Text";

export function Logo() {
  return (
    <View className="w-full items-center gap-2">
      <MaterialCommunityIcons name="sale" size={70} color={colors.red[500]} />
      <Text className="text-4xl text-zinc-50">
        Promo
        <Text className="font-poppinsBold text-2xl text-red-500">app</Text>
      </Text>
    </View>
  );
}
