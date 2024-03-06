import { AntDesign } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { format, formatDistanceToNow } from "date-fns";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

import { Heading } from "@components/Heading";
import { Text } from "@components/Text";

export function Ticket() {
  return (
    <View className="">
      <View className="gap-2 px-2">
        <View className="flex-row items-center gap-2">
          <View className="h-10 w-10 rounded-full bg-zinc-400" />
          <Text>Savegnago</Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/modal")}
          activeOpacity={0.8}
          className="relative w-full flex-row rounded-md border-[0.5px] border-zinc-700 bg-zinc-800 shadow"
        >
          <View className="h-full flex-1 p-2 px-3">
            <Heading className="text-xl">Coca-Cola 200ml</Heading>

            <View className="flex-row items-center gap-2">
              <Feather name="map-pin" color={colors.zinc[500]} />
              <Text className="text-sm text-zinc-500">
                Centro, Bebedouro - SP
              </Text>
            </View>

            <View className="mt-2 flex-row items-end">
              <View className="flex-1">
                <View className="">
                  <Text className="flex items-start text-xs">De:</Text>
                  <Heading className="!text-base text-zinc-400 line-through">
                    R$ 1.000,00
                  </Heading>
                </View>

                <View className="flex-1">
                  <Text className="flex items-start text-xs">Por:</Text>
                  <Heading className="font-poppinsBold !text-2xl">
                    R$ 1,400,00
                  </Heading>
                </View>
              </View>
              <View className="w-20 items-center rounded-full border border-zinc-700 bg-red-500 p-2 shadow-sm">
                <Heading className="font-poppinsBold !text-xl text-zinc-900">
                  -60%
                </Heading>
              </View>
            </View>
          </View>

          <View className="border border-dashed border-zinc-700" />

          {/* ticket effect */}
          <View className="absolute -top-[8px] right-24 h-5 w-5 translate-x-2 rounded-lg bg-zinc-900" />
          <View className="absolute -bottom-[8px] right-24 h-5 w-5 translate-x-2 rounded-full bg-zinc-900" />

          <View className="w-24 gap-2 p-2">
            <View className="flex-row items-center justify-around">
              <AntDesign name="like1" size={16} color={colors.green[500]} />
              <Text className="font-poppinsSemiBold">14</Text>
            </View>
            <View className="flex-row items-center justify-around">
              <AntDesign name="dislike1" size={16} color={colors.red[400]} />
              <Text className="w-4 font-poppinsSemiBold">3</Text>
            </View>
            <View className="flex-1 items-start justify-end">
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
        </TouchableOpacity>
      </View>
      <View className="my-4 border border-dashed border-zinc-700" />
    </View>
  );
}
