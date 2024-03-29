import Feather from "@expo/vector-icons/Feather";
import { useStorage } from "@hooks/useStorage";
import { Redirect } from "expo-router";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "tailwindcss/colors";

import { Button } from "@components/Button";
import { TextInput } from "@components/Input";
import { Text } from "@components/Text";
import { Ticket } from "@components/Ticket";
import { useContext } from "react";
import { AppContext } from "@contexts/appContext";

export default function Home() {
  const { loading: loadingStorage, data: token } = useStorage("app:token");
  const { bottom, top } = useSafeAreaInsets();
  const { showSearch } = useContext(AppContext);

  if (loadingStorage) {
    return (
      <View className="flex-1 items-center justify-center gap-2 bg-zinc-900">
        <ActivityIndicator className="flex" size="large" />
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (!token) {
    return <Redirect href="/login" />;
  }

  return (
    <View
      className="flex-1 items-start gap-4 bg-zinc-900"
      style={{ paddingBottom: bottom + 51, paddingTop: top + 64 }}
    >
      {showSearch && (
        <View className="w-full gap-1 px-4">
          <View className="w-full flex-row items-end gap-4">
            <TextInput.Content className="h-14 flex-1">
              <TextInput.Icon name="search" />
              <TextInput.Input
                placeholder="Ex: Coca-cola..."
                className="h-full"
              />
            </TextInput.Content>

            <Button disabled={false} onPress={() => {}} loading={false}>
              <Feather name="search" size={20} color={colors.zinc[100]} />
            </Button>
          </View>
          <View className="flex-row items-center gap-2">
            <Feather name="map-pin" color={colors.red[600]} />

            <Text className="text-sm !text-red-600">
              Centro, Bebedouro - SP
            </Text>
          </View>
        </View>
      )}

      <ScrollView className="flex w-full">
        {Array.from({ length: 15 }).map((e, index) => (
          <Ticket key={index} />
        ))}
      </ScrollView>
    </View>
  );
}
