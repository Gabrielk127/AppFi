import { theme } from "@/theme";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonSendFormProps {
  onPress: () => void;
}

const ButtonSendForm = ({ onPress }: ButtonSendFormProps) => {
  return (
    <>
      <TouchableOpacity style={styles.containerSend} onPress={onPress}>
        <Text style={styles.textSend}>Cadastrar</Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonSendForm;

const styles = StyleSheet.create({
  containerSend: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.Colors.MATTE_BLUE,
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  textSend: {
    fontFamily: theme.fontFamily.subtitle,
    color: theme.Colors.GREEN,
  },
});
