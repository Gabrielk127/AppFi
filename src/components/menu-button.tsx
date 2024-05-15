import { Colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

export function MenuButton() {
  return (
    <Pressable>
      <MaterialIcons name="menu" size={22} color={Colors.PURPLE_500} />
    </Pressable>
  );
}
