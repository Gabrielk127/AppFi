import { StyleSheet, Text, View } from "react-native";

export default function Premium() {
  return (
    <View style={styles.viewStyle}>
      <Text>Premium</Text>
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
