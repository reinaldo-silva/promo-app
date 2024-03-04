import clsx from "clsx";
import { Link } from "expo-router";
import { View } from "react-native";

import { Button } from "@components/Button";
import { Heading } from "@components/Heading";
import { TextInput } from "@components/Input";
import { Text } from "@components/Text";

export default function Home() {
  return (
    <View className={clsx("flex-1 items-start bg-zinc-900 p-4")}>
      <View className="my-10">
        <Heading className="text-4xl">Bem vindo de volta!</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          porro.
        </Text>
      </View>

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

      <View className="relative my-4 w-full border border-zinc-400">
        <Text className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-900 px-2 font-poppinsMedium uppercase">
          Ou use o MFA
        </Text>
      </View>

      <View className="w-full flex-row justify-between">
        <Text>Não tem conta?</Text>
        <Text>Criar conta</Text>
      </View>
    </View>
  );
}
