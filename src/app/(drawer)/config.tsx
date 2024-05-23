import { StyleSheet, Text, View } from "react-native";

export default function Config() {
  return (
    <View style={styles.viewStyle}>
      <Text>Configurações</Text>
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
