import { theme } from "@/theme";
import { StyleSheet, Text, View } from "react-native";

export default function Calendar() {
  return (
    <View style={styles.viewStyle}>
      <Text>Calendário</Text>

      <View style={styles.viewStyle}>
        <Text style={styles.card}>Larinha Linda</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  styleText: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    color: theme.Colors.MATTE_BLUE,
  },
});
