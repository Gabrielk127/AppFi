import { StyleSheet, Text, View } from "react-native";

export default function Movements() {
  return (
    <View style={styles.viewStyle}>
      <Text>Movimentações</Text>
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
