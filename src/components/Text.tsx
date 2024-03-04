import clsx from "clsx";
import { TextProps, Text as TextRN } from "react-native";

interface Props extends TextProps {}

export function Text({ className, ...rest }: Props) {
  return (
    <TextRN
      className={clsx(className, "font-poppinsRegular text-zinc-400")}
      {...rest}
    />
  );
}
