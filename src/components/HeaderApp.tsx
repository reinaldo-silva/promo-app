import Feather from "@expo/vector-icons/Feather";
import { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "tailwindcss/colors";

import { Logo } from "@components/Logo";
import { AppContext } from "@contexts/appContext";

export function HeaderApp() {
  const { top } = useSafeAreaInsets();
  const { handleShowSearch } = useContext(AppContext);

  return (
    <View
      style={{ paddingTop: top }}
      className="absolute w-full flex-row items-center justify-between border-b-[0.5px] border-zinc-800 bg-zinc-900/90 shadow-sm !backdrop-blur-2xl"
    >
      <Logo orientation="row" />
      <TouchableOpacity activeOpacity={0.9} onPress={() => handleShowSearch()}>
        <Feather
          name="search"
          size={20}
          color={colors.zinc[400]}
          className="p-6"
        />
      </TouchableOpacity>
    </View>
  );
}
