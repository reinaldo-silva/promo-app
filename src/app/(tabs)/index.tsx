import { AntDesign } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { useStorage } from "@hooks/useStorage";
import { format, formatDistanceToNow } from "date-fns";
import { Redirect, router } from "expo-router";
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "tailwindcss/colors";

import { Button } from "@components/Button";
import { Heading } from "@components/Heading";
import { TextInput } from "@components/Input";
import { Logo } from "@components/Logo";
import { Text } from "@components/Text";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Home() {
  const { loading: loadingStorage, data: token } = useStorage("app:token");
  const { bottom } = useSafeAreaInsets();

  if (loadingStorage) {
    return <ActivityIndicator className="flex" size="large" />;
  }

  if (!token) {
    return <Redirect href="/login" />;
  }

  return (
    <View
      className="flex-1 items-start gap-4 bg-zinc-900 p-4 pb-5 pt-2"
      style={{ paddingBottom: bottom + 100 }}
    >
      <Logo orientation="row" />

      <View className="w-full gap-1">
        <View className="w-full flex-row items-end gap-4">
          <TextInput.Content className="flex-1">
            <TextInput.Icon name="search" />
            <TextInput.Input placeholder="Ex: Coca-cola..." />
          </TextInput.Content>

          <Button disabled={false} onPress={() => {}} loading={false}>
            <Feather name="search" size={20} color={colors.zinc[100]} />
          </Button>
        </View>
        <View className="flex-row items-center gap-2">
          <Feather name="map-pin" color={colors.red[600]} />

          <Text className="text-sm !text-red-600">Centro, Bebedouro - SP</Text>
        </View>
      </View>

      <ScrollView className="flex w-full">
        <View className="gap-2">
          {Array.from({ length: 15 }).map((e, index) => (
            <TouchableOpacity
              onPress={() => router.push("/modal")}
              activeOpacity={0.8}
              key={index}
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
              <View className="absolute -top-[6px] right-24 h-3 w-3 translate-x-1 rounded-full bg-zinc-900" />
              <View className="absolute -bottom-[6px] right-24 h-3 w-3 translate-x-1 rounded-full bg-zinc-900" />

              <View className="w-24 gap-2 p-2">
                <View className="flex-row items-center justify-around">
                  <AntDesign name="like1" size={16} color={colors.green[500]} />
                  <Text className="font-poppinsSemiBold">14</Text>
                </View>
                <View className="flex-row items-center justify-around">
                  <AntDesign
                    name="dislike1"
                    size={16}
                    color={colors.red[400]}
                  />
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
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
