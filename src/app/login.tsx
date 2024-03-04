import clsx from "clsx";
import { Link } from "expo-router";
import { View } from "react-native";

import { Button } from "@components/Button";
import { Heading } from "@components/Heading";
import { TextInput } from "@components/Input";
import { SignInGithub } from "@components/SignInGithub";
import { Text } from "@components/Text";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

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
          <Button
            text="Logar"
            icon="mail"
            onPress={() => setLoading((oldValue) => !oldValue)}
            loading={loading}
          />
        </View>

        <View className="relative my-6 w-full border border-zinc-400">
          <Text className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-900 px-2 font-poppinsMedium uppercase">
            Ou entre com
          </Text>
        </View>

        <SignInGithub />
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
