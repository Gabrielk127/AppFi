import CustomStatement from "@/components/customStatement";
import { theme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Extract() {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        colors={[theme.Colors.BLUE, theme.Colors.BLACK]}
      >
        <Text style={styles.textExtract}>Extrato</Text>
      </LinearGradient>
      <View style={styles.contentStyle}>
        <SafeAreaView style={{ flex: 1 }}>
          <CustomStatement />
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  contentStyle: {
    flex: 1,
    paddingTop: 50,
    borderRadius: 50,
    marginTop: -50,
    backgroundColor: "#f0f0f0",
    paddingBottom: 30,
    height: "100%",
  },
  textExtract: {
    fontFamily: theme.fontFamily.subtitle,
    color: theme.Colors.PRIMARY,
    fontSize: 20,
  },
});
