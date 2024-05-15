import { ActivityIndicator, StyleSheet } from "react-native";

export function Loading() {
  return <ActivityIndicator style={styles.indicator} />;
}

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
