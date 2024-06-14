import ButtonBack from "@/components/buttonBack";
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
        <View style={styles.containerTitle}>
          <ButtonBack />
          <Text style={styles.textExtract}>Extrato</Text>
        </View>
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
  containerTitle: {
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 30,
    gap: 25,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textExtract: {
    fontFamily: theme.fontFamily.subtitle,
    color: theme.Colors.PRIMARY,
    fontSize: 18,
  },
});
