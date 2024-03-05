import { useStorage } from "@hooks/useStorage";
import { Link, Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Home() {
  const { loading, data: token } = useStorage("app:token");

  if (loading) {
    return <Text>Loading</Text>;
  }

  if (!token) {
    return <Redirect href="/login" />;
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text>{token}</Text>

      <Link href="/about">About</Link>
      <Link href="/user/bacon">View user</Link>
      <Link href="/login">Login</Link>
      <Link href="/modal">Modal</Link>
      <StatusBar style="auto" />
    </View>
  );
}
