import { GOALS } from "@/api/goalsData";
import GoalsCard from "@/components/goalsCard";
import { theme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ButtonBack from "@/components/buttonBack";
// Definição da interface para o item da lista
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
  const renderItem = ({ item }: { item: GoalItem }) => (
    <GoalsCard
      key={item.id}
      date={item.date}
      title={item.title}
      accumulated={item.accumulated}
      goal={item.goal}
    />
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
          data={GOALS}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>
      <View style={styles.containerAdd}>
        <Link href="movements">
          <MaterialIcons name="add" size={30} color={theme.Colors.PRIMARY} />
        </Link>
      </View>
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
    fontSize: 18,
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
    fontSize: 14,
  },
  textNumberTotal: {
    fontFamily: theme.fontFamily.subtitle,
    color: theme.Colors.GREEN,
    fontSize: 12,
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
