import { theme } from "@/theme";
import { ReactNode } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface CustomBackgroundProps {
  children: ReactNode;
  containerStyle?: ViewStyle;
}

const CustomBackground: React.FC<CustomBackgroundProps> = ({
  children,
  containerStyle,
}) => {
  return <View style={[styles.viewStyle, containerStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  viewStyle: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: theme.Colors.PRIMARY,
    shadowColor: theme.Colors.BLUE,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default CustomBackground;
