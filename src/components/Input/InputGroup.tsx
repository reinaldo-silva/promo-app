import { PropsWithChildren } from "react";
import { View } from "react-native";

export function InputGroup({ children }: PropsWithChildren) {
  return <View className="flex h-auto w-full">{children}</View>;
}
