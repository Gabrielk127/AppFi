import { theme } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const ButtonBack = () => {
  return (
    <>
      <Link href={"/"}>
        <MaterialIcons
          name="arrow-back"
          size={26}
          color={theme.Colors.PRIMARY}
        />
      </Link>
    </>
  );
};

export default ButtonBack;
