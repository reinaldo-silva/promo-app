import { AppContextProvider } from "@/contexts/appContext";
import "@/styles/global.css";
import { HeaderApp } from "@components/HeaderApp";
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
              return <HeaderApp />;
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
