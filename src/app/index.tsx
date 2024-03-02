import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Open up App.js to start working on your app!</Text>

      <Link href="/about">About</Link>
      <Link href="/user/bacon">View user</Link>
      <Link href="/modal">Modal</Link>
      <StatusBar style="auto" />
    </View>
  );
}
