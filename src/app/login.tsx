import clsx from "clsx";
import { Link, router } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";

import { Button } from "@components/Button";
import { Heading } from "@components/Heading";
import { TextInput } from "@components/Input";
import { Logo } from "@components/Logo";
import { SignInGithub } from "@components/SignInGithub";
import { Text } from "@components/Text";
import { useStorage } from "@hooks/useStorage";
import { signIn } from "@services/session";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const { setStore } = useStorage("app:token");

  async function handleSignIn() {
    setLoading(true);
    const user: any = await signIn().finally(() => setLoading(false));
    await setStore(`token ${user.name}`);

    router.push("/");
  }

  return (
    <View className={clsx("flex-1 items-start bg-zinc-900 p-4 pb-12 pt-2")}>
      <ScrollView className="py-4" automaticallyAdjustKeyboardInsets={true}>
        <Logo />

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
              disabled={loading}
              text="Logar"
              icon="mail"
              onPress={handleSignIn}
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

        <View className="mt-8 w-full justify-between">
          <Text className="!text-zinc-500">Não tem conta?</Text>
          <Link href="/login">
            <Text>Criar conta</Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
}
