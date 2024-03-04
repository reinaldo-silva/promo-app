import clsx from "clsx";
import { TextProps, Text as TextRN } from "react-native";

interface Props extends TextProps {}

export function Text({ className, ...rest }: Props) {
  return (
    <TextRN
      className={clsx("font-poppinsRegular text-zinc-300", className)}
      {...rest}
    />
  );
}
