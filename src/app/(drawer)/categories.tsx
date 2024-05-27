import { StyleSheet, Text, View } from "react-native";

export default function Categories() {
  return (
    <View style={styles.viewStyle}>
      <Text>Categorias</Text>
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
