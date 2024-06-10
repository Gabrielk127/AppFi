import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { MenuButton } from "@/components/menu-button";
import { theme } from "@/theme";
import CustomProgressBar from "@/components/customProgressBar";
import GoalsCard from "@/components/goalsCard";
import CustomStatement from "@/components/customStatement";
import { Link } from "expo-router";

export default function Home() {
  const expense = "250";
  const expenseNumber = Number(expense);

  const revenue = "1235";
  const revenueNumber = Number(revenue);

  const balance = String(revenueNumber - expenseNumber);

  const [goals, setGoals] = useState([
    {
      id: 1,
      date: "22/12/2024",
      title: "Comprar Carro",
      accumulated: 2500,
      goal: 45000,
    },
    {
      id: 2,
      date: "22/12/2024",
      title: "Comprar Casa",
      accumulated: 5000,
      goal: 100000,
    },
  ]);

  return (
    <ScrollView nestedScrollEnabled style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        colors={[theme.Colors.BLUE, theme.Colors.BLACK]}
      >
        <View style={styles.menuButtonStyle}>
          <MenuButton />
          <MaterialIcons
            name="notifications"
            size={30}
            color={theme.Colors.PRIMARY}
          />
        </View>
        <View style={styles.containerBalanceStyle}>
          <Text style={styles.BalanceTextStyle}>Saldo</Text>
          <Text style={styles.BalanceStyle}>R$ {balance}</Text>
        </View>
        <View style={styles.contentProgressStyle}>
          <CustomProgressBar
            maxValue={revenueNumber}
            currentValue={expenseNumber}
            height={22}
            backgroundColor={theme.Colors.PRIMARY}
            progressColor={theme.Colors.GREEN}
            progressColor50={theme.Colors.GOLDEN}
            progressColor70={theme.Colors.RED}
            borderRadius={10}
            showLabel
            labelStyle={{
              color: theme.Colors.BLACK,
              fontWeight: "bold",
            }}
            containerStyle={{ margin: 20 }}
          />
        </View>
        <View style={styles.infoBalanceStyle}>
          <View style={styles.containerInfoStyle}>
            <View style={styles.textInfoIcon}>
              <MaterialIcons
                name="align-vertical-top"
                size={16}
                color={theme.Colors.PRIMARY}
              />
              <Text style={styles.textInfoStyle}>Total Despesa</Text>
            </View>
            <Text style={[styles.infoTextStyle, { color: theme.Colors.RED }]}>
              R$ {expense}
            </Text>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.containerInfoStyle}>
            <View style={styles.textInfoIcon}>
              <MaterialIcons
                name="align-vertical-bottom"
                size={16}
                color={theme.Colors.PRIMARY}
              />
              <Text style={styles.textInfoStyle}>Total Receita</Text>
            </View>
            <Text style={[styles.infoTextStyle, { color: theme.Colors.GREEN }]}>
              R$ {revenue}
            </Text>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.contentStyle}>
        <Text style={styles.goalTitle}>Resumo Objetivos</Text>
        <ScrollView horizontal style={styles.scrollStyle}>
          {goals.map((goal) => (
            <GoalsCard
              key={goal.id}
              date={goal.date}
              title={goal.title}
              accumulated={goal.accumulated}
              goal={goal.goal}
            />
          ))}
        </ScrollView>
        <View>
          <Text style={[styles.goalTitle, { paddingBottom: 20 }]}>
            Transações
          </Text>

          <Link href={"oneScreen"}>
            <Text>Login</Text>
          </Link>
          {/* <CustomStatement /> */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  gradient: {
    height: 400,
  },
  menuButtonStyle: {
    marginTop: 60,
    marginHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentStyle: {
    flex: 1,
    borderRadius: 50,
    marginTop: -50,
    backgroundColor: "white",
    paddingBottom: 30,
    height: "100%",
  },
  containerBalanceStyle: {
    alignItems: "center",
    marginTop: 20,
  },
  BalanceTextStyle: {
    fontFamily: theme.fontFamily.light,
    color: theme.Colors.PRIMARY,
    fontSize: 16,
  },
  BalanceStyle: {
    fontFamily: theme.fontFamily.subtitle,
    color: theme.Colors.PRIMARY,
    fontSize: 24,
  },
  contentProgressStyle: {
    alignItems: "center",
    marginHorizontal: 40,
  },
  infoBalanceStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textInfoStyle: {
    fontFamily: theme.fontFamily.light,
    color: theme.Colors.PRIMARY,
    fontSize: 12,
  },
  textInfoIcon: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  containerInfoStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  infoTextStyle: {
    fontFamily: theme.fontFamily.subtitle,
    fontSize: 16,
    marginTop: 5,
  },
  verticalLine: {
    width: 1.5,
    color: "black",
    backgroundColor: theme.Colors.PRIMARY,
    height: 40,
    marginHorizontal: 20,
  },
  CardStyle: {
    alignItems: "center",
  },
  scrollStyle: {
    paddingBottom: 20,
  },
  goalTitle: {
    paddingTop: 30,
    paddingLeft: 20,
    fontFamily: theme.fontFamily.subtitle,
    color: theme.Colors.GOLDEN,
    fontSize: 16,
  },
});
