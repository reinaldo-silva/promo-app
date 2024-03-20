import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import colors from "tailwindcss/colors";

interface AppContextProps {
  handleShowSearch: () => void;
  showSearch: boolean;
}

export const AppContext = createContext({} as AppContextProps);

SplashScreen.preventAutoHideAsync();

export function AppContextProvider({ children }: PropsWithChildren) {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  function handleShowSearch() {
    setShowSearch((oldValue) => !oldValue);
  }

  return (
    <AppContext.Provider value={{ handleShowSearch, showSearch }}>
      <SafeAreaProvider
        style={{
          // paddingTop: top,
          backgroundColor: colors.zinc[900],
          flex: 1,
        }}
        initialMetrics={initialWindowMetrics}
      >
        <StatusBar barStyle="light-content" />
        {children}
      </SafeAreaProvider>
    </AppContext.Provider>
  );
}
