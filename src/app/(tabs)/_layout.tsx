import { AntDesign } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import clsx from "clsx";
import { Link, Tabs } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

import { Text } from "@components/Text";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={({ insets, state, descriptors, navigation }) => {
        return (
          <>
            <View className="absolute bottom-0 left-10 z-30">
              <Link href="/login">
                <Text>Login</Text>
              </Link>
            </View>
            <View
              style={{ paddingBottom: insets.bottom }}
              className="absolute bottom-0 w-full flex-row justify-evenly gap-2 border-t border-zinc-700 bg-zinc-800 shadow-sm"
            >
              {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                  const event = navigation.emit({
                    type: "tabPress",
                    target: route.key,
                    canPreventDefault: true,
                  });

                  if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name, route.params);
                  }
                };

                const onLongPress = () => {
                  navigation.emit({
                    type: "tabLongPress",
                    target: route.key,
                  });
                };

                const Icon = !!options.tabBarIcon ? (
                  options.tabBarIcon({
                    color: isFocused ? colors.red[500] : colors.zinc[600],
                    focused: isFocused,
                    size: 28,
                  })
                ) : (
                  <Text>Icon</Text>
                );

                return (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    key={index}
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    className={clsx("rounded-2xl p-3", {
                      "": isFocused && index !== 1,
                      "bg-transparent": !isFocused,
                    })}
                  >
                    {Icon}
                  </TouchableOpacity>
                );
              })}
            </View>
          </>
        );
      }}
    >
      <Tabs.Screen
        name="settings"
        options={{
          title: "Sobre",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather size={size} name="settings" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather size={size} name="list" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="relative w-24">
              <View
                className={clsx(
                  "absolute -top-8 left-1/2 h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full border p-2 shadow",
                  {
                    "border-zinc-600 bg-red-500": focused,
                    "border-zinc-600 bg-zinc-800": !focused,
                  },
                )}
              >
                <AntDesign
                  name="notification"
                  size={40}
                  className="flex scale-x-[-1]"
                  color={focused ? colors.zinc[900] : colors.zinc[400]}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Sobre",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather size={size} name="map-pin" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Sobre",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather size={size} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
