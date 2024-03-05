import clsx from "clsx";
import { View, ViewProps } from "react-native";

interface Props extends ViewProps {
  first?: boolean;
  last?: boolean;
}

export function ContentInput({
  className,
  children,
  first,
  last,
  ...rest
}: Props) {
  return (
    <View
      className={clsx(
        className,
        "flex flex-row items-center gap-4 rounded-lg bg-zinc-800 px-6 font-poppinsRegular",
        { "rounded-b-none border-b-[0.5px] border-zinc-600": first },
        { "rounded-t-none": last },
      )}
      {...rest}
    >
      {children}
    </View>
  );
}
