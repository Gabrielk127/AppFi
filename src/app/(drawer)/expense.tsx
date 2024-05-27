import { StyleSheet, Text, View } from "react-native";

export default function Expense() {
  return (
    <View style={styles.viewStyle}>
      <Text>DESPESA</Text>
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
