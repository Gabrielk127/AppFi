import { StyleSheet, Text, View } from "react-native";

export default function Goals() {
  return (
    <View style={styles.viewStyle}>
      <Text>Objetivos</Text>
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
