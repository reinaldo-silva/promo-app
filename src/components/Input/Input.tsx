import clsx from "clsx";
import { TextInput, TextInputProps } from "react-native";
import colors from "tailwindcss/colors";

interface Props extends TextInputProps {}

export function Input({ className, placeholderTextColor, ...rest }: Props) {
  return (
    <TextInput
      className={clsx(
        "flex h-20 flex-1 items-center text-xl text-zinc-100",
        className,
      )}
      placeholderTextColor={placeholderTextColor || colors.zinc[400]}
      {...rest}
    />
  );
}
