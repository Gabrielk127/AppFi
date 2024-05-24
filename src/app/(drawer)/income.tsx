import { StyleSheet, Text, View } from "react-native";

export default function Income() {
  return (
    <View style={styles.viewStyle}>
      <Text>RECEITA</Text>
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
