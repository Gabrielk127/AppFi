import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { GOALS } from "@/api/goalsData";
import GoalsCard from "@/components/cards/goalsCard";
import { theme } from "@/theme";
import GoalModal from "@/components/modals/goalModal";
import ButtonBack from "@/components/buttons/buttonBack";
import { Link, useRouter } from "expo-router";

interface GoalItem {
  id: number;
  date: string;
  title: string;
  accumulated: number;
  goal: number;
}

export default function Goals() {
  const totalAccumulated = GOALS.reduce(
    (total, goal) => total + goal.accumulated,
    0
  );
  const totalMeta = GOALS.reduce((total, goal) => total + goal.goal, 0);

  const [selectedGoal, setSelectedGoal] = useState<GoalItem | null>(null);

  const renderItem = ({ item }: { item: GoalItem }) => (
    <TouchableOpacity onPress={() => setSelectedGoal(item)}>
      <GoalsCard
        key={item.id}
        date={item.date}
        title={item.title}
        accumulated={item.accumulated}
        goal={item.goal}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        colors={[theme.Colors.BLUE, theme.Colors.BLACK]}
      >
        <View style={styles.containerTitle}>
          <ButtonBack />
          <Text style={styles.textGoals}>Objetivos</Text>
        </View>
        <View style={styles.containerTotal}>
          <View style={styles.containerTextTotal}>
            <Text style={styles.textTotal}>Total economizado:</Text>
            <Text style={styles.textNumberTotal}>R$ {totalAccumulated}</Text>
          </View>
          <View style={styles.containerTextTotal}>
            <Text style={styles.textTotal}>Total em metas:</Text>
            <Text
              style={[styles.textNumberTotal, { color: theme.Colors.GOLDEN }]}
            >
              R$ {totalMeta}
            </Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.contentStyle}>
        <FlatList
          style={{}}
          data={GOALS}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
          }}
        />
      </View>
      <View style={styles.containerAdd}>
        <Link href="goalsRegister">
          <MaterialIcons name="add" size={30} color={theme.Colors.PRIMARY} />
        </Link>
      </View>
      <GoalModal goal={selectedGoal} onClose={() => setSelectedGoal(null)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  contentStyle: {
    flex: 1,
    paddingTop: 50,
    borderRadius: 50,
    marginTop: -50,
    backgroundColor: "#f0f0f0",
    height: "100%",
  },
  textGoals: {
    fontFamily: theme.fontFamily.subtitle,
    color: theme.Colors.PRIMARY,
    fontSize: theme.Fontsize.SmallTitle,
  },
  containerTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginTop: 50,
  },
  containerTextTotal: {
    alignItems: "center",
  },
  textTotal: {
    fontFamily: theme.fontFamily.body,
    color: theme.Colors.PRIMARY,
    fontSize: theme.Fontsize.BodyPrimary,
  },
  textNumberTotal: {
    fontFamily: theme.fontFamily.subtitle,
    color: theme.Colors.GREEN,
    fontSize: theme.Fontsize.Body,
  },
  containerAdd: {
    position: "absolute",
    bottom: 20,
    right: 20,

    backgroundColor: theme.Colors.MATTE_BLUE,
    padding: 15,
    borderRadius: 40,
  },
});
