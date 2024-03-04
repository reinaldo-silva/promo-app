import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

import { Text } from "@components/Text";

export function SignInGithub() {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View className="w-full flex-row items-center gap-6 rounded-lg border border-zinc-600 bg-zinc-700 px-2 py-4">
        <View className="h-full flex-row items-center border-r border-zinc-600 px-6 py-2">
          <Feather name="github" color={colors.zinc[100]} size={18} />
        </View>
        <Text className="font-poppinsSemiBold text-zinc-300">
          Entrar com o Github
        </Text>
      </View>
    </TouchableOpacity>
  );
}
