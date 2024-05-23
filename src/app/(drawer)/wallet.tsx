import { StyleSheet, Text, View } from "react-native";

export default function Wallet() {
  return (
    <View style={styles.viewStyle}>
      <Text>Carteira</Text>
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
