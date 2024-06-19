import { theme } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

const ButtonBack = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <TouchableOpacity onPress={handleGoBack}>
        <MaterialIcons
          name="arrow-back"
          size={26}
          color={theme.Colors.PRIMARY}
        />
      </TouchableOpacity>
    </>
  );
};

export default ButtonBack;
