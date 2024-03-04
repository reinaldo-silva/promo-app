import Feather from "@expo/vector-icons/Feather";
import clsx from "clsx";
import { forwardRef } from "react";
import {
  Animated,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import colors from "tailwindcss/colors";

import { Text } from "@components/Text";

interface Props extends TouchableOpacityProps {
  text?: string;
  icon?: any;
}

const Button = forwardRef<TouchableOpacity, Props>(
  ({ className, children, icon, text, ...rest }, ref) => {
    const animatedValue = new Animated.Value(1);

    const onPressIn = () => {
      Animated.spring(animatedValue, {
        toValue: 12,
        useNativeDriver: true,
      }).start();
    };

    const onPressOut = () => {
      Animated.spring(animatedValue, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    };

    return (
      <TouchableOpacity
        ref={ref}
        activeOpacity={0.9}
        className={clsx(
          className,
          "relative flex h-14 flex-row items-center justify-between rounded-lg pr-10",
        )}
        {...rest}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        {text ? (
          <Animated.View
            style={{ transform: [{ translateX: animatedValue }] }}
            className="z-10 h-full flex-row items-center rounded-lg bg-blue-500 pl-4 pr-8 shadow"
          >
            <Text className="font-poppinsSemiBold !text-zinc-100">{text}</Text>
          </Animated.View>
        ) : (
          children
        )}

        {icon && (
          <View className="absolute right-0 top-0 flex h-full w-auto flex-row items-center rounded-r-lg bg-blue-800 px-3">
            <Feather name="arrow-right" size={20} color={colors.zinc[100]} />
          </View>
        )}
      </TouchableOpacity>
    );
  },
);

export { Button };
