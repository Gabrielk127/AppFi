import { theme } from "@/theme";
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface CustomButtonProps {
  title?: string;
  onPress?: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  icon?: keyof typeof MaterialIcons.glyphMap;
  iconColor?: string;
  iconSize?: number;
}

const CustomButton = React.forwardRef<TouchableOpacity, CustomButtonProps>(
  (
    {
      title,
      onPress,
      buttonStyle,
      textStyle,
      disabled = false,
      icon,
      iconColor = theme.Colors.PRIMARY_TEXT,
      iconSize = 24,
    },
    ref
  ) => {
    return (
      <TouchableOpacity
        ref={ref}
        style={[styles.button, buttonStyle, disabled && styles.buttonDisabled]}
        onPress={onPress}
        disabled={disabled}
      >
        {icon && (
          <MaterialIcons
            name={icon}
            size={iconSize}
            color={iconColor}
            style={styles.icon}
          />
        )}
        {title && <Text style={[styles.text, textStyle]}>{title}</Text>}
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: theme.Colors.PURPLE_700,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  text: {
    color: "#FFFFFF",
    fontSize: theme.Fontsize.BodyPrimary,
    fontFamily: theme.fontFamily.subtitle,
  },
  icon: {
    justifyContent: "center",
    marginRight: 8, // Adicione um pequeno espaçamento entre o ícone e o texto
  },
});

export default CustomButton;
