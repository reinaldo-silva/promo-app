import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { PropsWithChildren, createContext, useEffect } from "react";
import { StatusBar } from "react-native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import colors from "tailwindcss/colors";

const AppContext = createContext({});

SplashScreen.preventAutoHideAsync();

export function AppContextProvider({ children }: PropsWithChildren) {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AppContext.Provider value={{}}>
      <SafeAreaProvider
        style={{
          paddingTop: top,
          backgroundColor: colors.zinc[900],
          flex: 1,
        }}
        initialMetrics={initialWindowMetrics}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.zinc[900]}
        />
        {children}
      </SafeAreaProvider>
    </AppContext.Provider>
  );
}
