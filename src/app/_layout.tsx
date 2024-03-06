import { AppContextProvider } from "@/contexts/appContext";
import "@/styles/global.css";
import { Logo } from "@components/Logo";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <AppContextProvider>
      <Stack
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: true,
            header: (props) => {
              return <Logo orientation="row" />;
            },
          }}
        />

        <Stack.Screen
          name="modal"
          options={{
            presentation: "modal",
          }}
        />
      </Stack>
    </AppContextProvider>
  );
}
