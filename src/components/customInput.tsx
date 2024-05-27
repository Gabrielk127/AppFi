import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "@/theme";

interface CustomInputProps extends TextInputProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  iconRight?: keyof typeof MaterialIcons.glyphMap;
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
  iconColor?: string;
  iconSize?: number;
}

const CustomInput: React.FC<CustomInputProps> = ({
  icon,
  iconRight,
  inputStyle,
  containerStyle,
  iconColor = theme.Colors.PRIMARY_TEXT,
  iconSize = 24,
  placeholder,
  ...rest
}) => {
  const [isPasswordVisible, setPasswordVisible] =
    React.useState<boolean>(false);
  const [isPasswordHidden, setPasswordHidden] = React.useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
    setPasswordHidden(true);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <MaterialIcons
        name={icon}
        size={iconSize}
        color={iconColor}
        style={styles.icon}
      />
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={theme.Colors.PRIMARY_TEXT}
        secureTextEntry={!isPasswordVisible && isPasswordHidden}
        {...rest}
      />
      {iconRight && (
        <MaterialIcons
          name={iconRight}
          size={iconSize}
          color={iconColor}
          style={styles.iconRight}
          onPress={togglePasswordVisibility}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 56,

    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    backgroundColor: "#ffffff",
  },
  icon: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    color: theme.Colors.PRIMARY_TEXT,
    fontSize: 16,
    fontFamily: theme.fontFamily.light,
  },
});

export default CustomInput;
