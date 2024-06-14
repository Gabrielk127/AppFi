import { StyleSheet, Text, View } from "react-native";
import CustomBackground from "./customBackground";
import CustomProgressBar from "./customProgressBar";
import { theme } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

interface GoalsCardProps {
  date: string;
  title: string;
  accumulated: number;
  goal: number;
}

const GoalsCard: React.FC<GoalsCardProps> = ({
  date,
  title,
  accumulated,
  goal,
}) => {
  return (
    <CustomBackground containerStyle={styles.ViewContainer}>
      <View style={styles.containerTitle}>
        <MaterialIcons name="check-circle-outline" size={24} color="black" />
        <Text style={styles.date}>Prazo: {date}</Text>
      </View>
      <Text style={styles.TextTitle}>{title}</Text>

      <View style={styles.balance}>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Acumulado</Text>
          <Text style={styles.accumulated}>R$ {accumulated}</Text>
        </View>
        <View
          style={{ width: 1, height: 40, backgroundColor: theme.Colors.GRAY }}
        />
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Meta</Text>
          <Text style={styles.goalStyle}>R$ {goal}</Text>
        </View>
      </View>
      <CustomProgressBar
        maxValue={goal}
        currentValue={accumulated}
        height={22}
        backgroundColor={theme.Colors.MATTE_BLUE}
        progressColor={theme.Colors.RED}
        progressColor50={theme.Colors.GOLDEN}
        progressColor70={theme.Colors.GREEN}
        borderRadius={10}
        showLabel
        labelStyle={{
          color: theme.Colors.PRIMARY,
          fontWeight: "bold",
        }}
      />
    </CustomBackground>
  );
};

const styles = StyleSheet.create({
  ViewContainer: {
    width: 350,
    marginHorizontal: 30,
    marginVertical: 10,
  },
  TextTitle: {
    fontFamily: theme.fontFamily.subtitle,
    color: theme.Colors.BLUE,
    fontSize: 14,
  },
  containerTitle: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  date: {
    fontFamily: theme.fontFamily.light,
    fontSize: 12,
    color: theme.Colors.GRAY,
  },
  balance: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  balanceContainer: {
    alignItems: "center",
  },
  balanceTitle: {
    fontFamily: theme.fontFamily.light,
    fontSize: 12,
    color: theme.Colors.BLACK,
  },
  accumulated: {
    fontFamily: theme.fontFamily.body,
    color: theme.Colors.GREEN,
  },
  goalStyle: {
    fontFamily: theme.fontFamily.body,
    color: theme.Colors.BLACK,
  },
});

export default GoalsCard;
