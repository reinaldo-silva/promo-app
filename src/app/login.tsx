import Feather from "@expo/vector-icons/Feather";
import clsx from "clsx";
import { Link } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

import { Button } from "@components/Button";
import { Heading } from "@components/Heading";
import { TextInput } from "@components/Input";
import { Text } from "@components/Text";

export default function Home() {
  return (
    <View className={clsx("flex-1 items-start bg-zinc-900 p-4 py-12")}>
      <View className="h-20 w-20 items-center justify-center rounded-full bg-zinc-500">
        <Text>Logo</Text>
      </View>

      <View className="my-10">
        <Heading className="text-4xl">Bem vindo de volta!</Heading>
        <Text className="!text-zinc-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          porro.
        </Text>
      </View>

      <View className="w-full flex-1 justify-center">
        <TextInput.Group>
          <TextInput.Content first>
            <TextInput.Icon name="mail" />
            <TextInput.Input placeholder="Digte seu email" />
          </TextInput.Content>
          <TextInput.Content last>
            <TextInput.Icon name="lock" />
            <TextInput.Input placeholder="**********" />
          </TextInput.Content>
        </TextInput.Group>

        <View className="my-8 w-full flex-row items-center justify-between">
          <Link href="/login">
            <Text>Esqueceu a senha?</Text>
          </Link>
          <Button text="Logar" icon="mail" />
        </View>

        <View className="relative my-6 w-full border border-zinc-400">
          <Text className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-900 px-2 font-poppinsMedium uppercase">
            Ou entre com
          </Text>
        </View>

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
      </View>

      <View className="w-full justify-between">
        <Text className="!text-zinc-500">Não tem conta?</Text>
        <Link href="/login">
          <Text>Criar conta</Text>
        </Link>
      </View>
    </View>
  );
}
