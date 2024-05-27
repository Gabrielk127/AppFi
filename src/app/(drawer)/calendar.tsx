import { StyleSheet, Text, View } from "react-native";

export default function Calendar() {
  return (
    <View style={styles.viewStyle}>
      <Text>Calendário</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
