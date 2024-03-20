import { MaterialCommunityIcons } from "@expo/vector-icons";
import clsx from "clsx";
import { View } from "react-native";
import colors from "tailwindcss/colors";

import { Text } from "@components/Text";

interface Props {
  orientation?: "row" | "column";
}

export function Logo({ orientation = "column" }: Props) {
  return (
    <View
      className={clsx("gap-2 px-4 py-2", {
        "w-full flex-col items-center": orientation === "column",
        "flex-row items-end": orientation === "row",
      })}
    >
      <MaterialCommunityIcons
        name="sale"
        size={orientation === "column" ? 70 : 50}
        color={colors.red[500]}
      />
      <Text className="text-4xl text-zinc-50">
        Promo
        <Text className="font-poppinsBold text-2xl !text-red-500">app</Text>
      </Text>
    </View>
  );
}
