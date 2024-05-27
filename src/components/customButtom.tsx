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

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  disabled = false,
  icon,
  iconColor = theme.Colors.PRIMARY_TEXT,
  iconSize = 24,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, disabled && styles.buttonDisabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <MaterialIcons
        name={icon}
        size={iconSize}
        color={iconColor}
        style={styles.icon}
      />

      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

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
    fontSize: 16,
    fontFamily: theme.fontFamily.subtitle,
  },
  icon: {
    justifyContent: "center",
  },
});

export default CustomButton;
