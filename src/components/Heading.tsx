import clsx from "clsx";
import { TextProps, Text as TextRN } from "react-native";

interface Props extends TextProps {}

export function Heading({ className, ...rest }: Props) {
  return (
    <TextRN
      className={clsx("text-3xl font-semibold text-zinc-100", className)}
      {...rest}
    />
  );
}
