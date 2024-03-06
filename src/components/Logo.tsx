import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import colors from "tailwindcss/colors";

import { Text } from "@components/Text";
import clsx from "clsx";

interface Props {
  orientation?: "row" | "column";
}

export function Logo({ orientation = "column" }: Props) {
  return (
    <View
      className={clsx("w-full gap-2 px-4 py-2", {
        "flex-col items-center": orientation === "column",
        "absolute flex-row items-end border-b-[0.5px] border-zinc-800 bg-zinc-900/90 shadow-sm !backdrop-blur-2xl":
          orientation === "row",
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
