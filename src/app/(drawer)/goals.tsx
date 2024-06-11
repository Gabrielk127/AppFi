import { GOALS } from "@/api/goalsData";
import GoalsCard from "@/components/goalsCard";
import { theme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, StyleSheet, Text, View } from "react-native";

// Definição da interface para o item da lista
interface GoalItem {
  id: number;
  date: string;
  title: string;
  accumulated: number;
  goal: number;
}

export default function Goals() {
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
        <Text style={styles.textExtract}>Objetivos</Text>
      </LinearGradient>
      <View style={styles.contentStyle}>
        <FlatList
          data={GOALS}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ flexGrow: 1 }}
        />
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
