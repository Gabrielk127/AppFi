import { theme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Income() {
  return (
    <View style={styles.viewStyle}>
      <LinearGradient
        style={styles.gradient}
        colors={[theme.Colors.BLUE, theme.Colors.BLACK]}
      >
        <View style={styles.containerTitle}>
          <MaterialIcons
            name="arrow-back"
            size={26}
            color={theme.Colors.PRIMARY}
          />
          <Text style={styles.textTitle}>Receita</Text>
        </View>

        <View style={styles.containerIncome}>
          <View style={styles.containerTextIncome}>
            <Text style={styles.textIncome}>Valor da receita</Text>
            <Text style={styles.textValueIncome}>R$ 0,00</Text>
          </View>
          <Text style={styles.typeCoin}>BRL</Text>
        </View>
      </LinearGradient>

      <SafeAreaView style={styles.containerView}>
        <Text>RECEITA</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
  },
  gradient: {
    height: 250,
  },
  containerTitle: {
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 30,
    gap: 25,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textTitle: {
    fontFamily: theme.fontFamily.subtitle,
    color: theme.Colors.PRIMARY,
    fontSize: 18,
  },
  containerIncome: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginHorizontal: 30,
    paddingTop: 40,
  },
  containerTextIncome: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  textIncome: {
    fontFamily: theme.fontFamily.light,
    color: theme.Colors.GRAY,
    fontSize: 12,
  },
  textValueIncome: {
    fontFamily: theme.fontFamily.body,
    color: theme.Colors.PRIMARY,
    fontSize: 24,
  },
  typeCoin: {
    fontFamily: theme.fontFamily.light,
    color: theme.Colors.GRAY,
    fontSize: 12,
  },
  containerView: {
    height: "100%",
    backgroundColor: theme.Colors.PRIMARY,
    borderRadius: 50,
    marginTop: -50,
    padding: 30,
  },
});
