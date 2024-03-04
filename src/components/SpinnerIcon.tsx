import Feather from "@expo/vector-icons/Feather";
import { useEffect } from "react";
import { Animated } from "react-native";
import colors from "tailwindcss/colors";

export function SpinnerIcon() {
  const spinnerLoop = new Animated.Value(0);

  const spin = spinnerLoop.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinnerLoop, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  return (
    <Animated.View style={{ transform: [{ rotate: spin }] }}>
      <Feather name="loader" size={20} color={colors.red[50]} />
    </Animated.View>
  );
}
