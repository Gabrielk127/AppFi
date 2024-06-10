import { StyleSheet, Text, View } from "react-native";

export default function PageFive() {
  return (
    <View style={styles.view}>
      <Text>Larinha linda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
