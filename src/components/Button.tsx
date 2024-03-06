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
import { SpinnerIcon } from "./SpinnerIcon";

interface Props extends TouchableOpacityProps {
  text?: string;
  icon?: any;
  loading?: boolean;
}

const Button = forwardRef<TouchableOpacity, Props>(
  ({ className, children, icon, text, loading = false, ...rest }, ref) => {
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
          { "!pr-0": !icon },
        )}
        {...rest}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        <Animated.View
          style={{ transform: [{ translateX: !icon ? 0 : animatedValue }] }}
          className={clsx(
            "z-10 h-full flex-row items-center rounded-lg bg-red-500 pl-4 pr-8 shadow",
            { "!pr-4": !icon },
          )}
        >
          {text ? (
            <Text className="font-poppinsSemiBold !text-zinc-100">{text}</Text>
          ) : (
            children
          )}
        </Animated.View>

        {icon && (
          <View className="absolute right-0 top-0 flex h-full w-auto flex-row items-center rounded-r-lg bg-red-900 px-3">
            {loading ? (
              <SpinnerIcon />
            ) : (
              <Feather name="arrow-right" size={20} color={colors.red[50]} />
            )}
          </View>
        )}
      </TouchableOpacity>
    );
  },
);

export { Button };
