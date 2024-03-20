import { AntDesign } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { format, formatDistanceToNow } from "date-fns";
import { TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

import { Heading } from "@components/Heading";
import { Text } from "@components/Text";

export function Ticket() {
  return (
    <View className="">
      {/* header */}
      <View className="flex-row items-center gap-2 p-3 pt-4">
        <View className="h-10 w-10 rounded-full bg-zinc-400" />
        <Text>Savegnago</Text>
      </View>

      <View className="flex-row gap-2 px-2">
        {/* ticket */}
        <TouchableOpacity
          activeOpacity={0.8}
          className="border-zinc-4ß00 relative w-[100px] flex-col items-center rounded-3xl border-[0.2px] bg-red-500 shadow"
        >
          {/* infos */}
          <View className="w-24 flex-1 gap-2 p-2">
            <View className="items-center justify-around">
              <AntDesign name="like1" size={32} color={colors.zinc[200]} />
              <Text className="font-poppinsSemiBold">78%</Text>
            </View>
            <View className="flex-1 items-center justify-end">
              <Text className="font-poppinsSemiBold text-xs">
                {formatDistanceToNow(new Date("2024-03-04"), {
                  includeSeconds: true,
                })}
              </Text>
              <Text className="font-poppinsSemiBold text-xs">
                {format(new Date(), "PP")}
              </Text>
            </View>
          </View>

          {/* divider */}
          <View className="w-full border border-dashed border-zinc-200" />

          {/* ticket effect */}
          <View className="absolute -right-2 bottom-[3.75rem] h-5 w-5 rounded-lg bg-zinc-900" />
          <View className="absolute -left-2 bottom-[3.75rem] h-5 w-5 rounded-full bg-zinc-900" />

          <View className="p-3">
            <View className="w-20 items-center rounded-full border border-zinc-300 bg-red-500 p-2 shadow-sm">
              <Heading className="font-poppinsBold !text-xl text-zinc-200">
                -60%
              </Heading>
            </View>
          </View>
        </TouchableOpacity>

        {/* details */}
        <View className="h-full flex-1 p-2 px-3">
          <Heading className="text-xl">Coca-Cola 200ml</Heading>

          <View className="flex-row items-center gap-2">
            <Feather name="map-pin" color={colors.zinc[500]} />
            <Text className="text-sm text-zinc-500">
              Centro, Bebedouro - SP
            </Text>
          </View>

          <View className="flex-1 justify-end">
            <View className="">
              <Text className="flex items-start text-xs">De:</Text>
              <Heading className="!text-base text-zinc-400 line-through">
                R$ 1.000,00
              </Heading>
            </View>

            <View className="">
              <Text className="flex items-start text-xs">Por:</Text>
              <Heading className="font-poppinsBold !text-2xl">
                R$ 1,400,00
              </Heading>
            </View>
          </View>
        </View>
      </View>

      <View className="mt-4 border border-dashed border-zinc-700" />
    </View>
  );
}
