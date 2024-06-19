import {
  Pressable,
  PressableProps,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/theme/colors";
import { theme } from "@/theme";
function mergeStyles(...styles: (object | false | null | undefined)[]) {
  return styles.filter(Boolean);
}

export type IconNameProps = keyof typeof MaterialIcons.glyphMap;

type DrawerButtonProps = PressableProps & {
  title: string;
  isFocused?: boolean;
  isDivider?: boolean;
  iconName: IconNameProps;
  notifications?: number;
};

export function DrawerButton({
  title,
  isFocused,
  isDivider,
  iconName,
  notifications,
  ...rest
}: DrawerButtonProps) {
  return (
    <Pressable
      style={mergeStyles(styles.pressStyle, isDivider && styles.dividir)}
      {...rest}
    >
      <View style={mergeStyles(styles.viewButton, isFocused && styles.focused)}>
        <MaterialIcons
          name={iconName}
          size={24}
          color={isFocused ? Colors.GOLDEN : Colors.BLUE}
        />
        <Text
          style={mergeStyles(styles.textStyle, isFocused && styles.textFocused)}
        >
          {title}
        </Text>
        <Text
          style={mergeStyles(
            styles.notifStyle,
            isFocused && styles.notifStyleFocused
          )}
        >
          {notifications}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressStyle: {
    paddingVertical: 8,
    width: "100%",
    padding: 10,
    justifyContent: "center",
  },
  dividir: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.SECUNDARY,
  },
  viewButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    height: 56,
    paddingHorizontal: 24,
    marginLeft: -4,
  },
  focused: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 8,
    shadowColor: theme.Colors.GOLDEN,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    backgroundColor: "#ffffff",
  },
  textStyle: {
    fontFamily: theme.fontFamily.body,
    fontSize: theme.Fontsize.Body,
    color: theme.Colors.BLUE,

    flex: 1,
  },
  textFocused: {
    fontFamily: theme.fontFamily.subtitle,
  },
  notifStyle: { fontFamily: theme.fontFamily.subtitle },
  notifStyleFocused: { backgroundColor: theme.Colors.PURPLE_100 },
});
