import Feather from "@expo/vector-icons/Feather";
import colors from "tailwindcss/colors";

interface Props {
  name: any;
}

export function Icon({ name }: Props) {
  return <Feather name={name} color={colors.zinc[200]} size={20} />;
}
