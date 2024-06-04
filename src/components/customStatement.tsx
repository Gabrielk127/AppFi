import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "@/theme";
import fetchExtratoData, { ExtratoItem } from "@/api/statementApi";

const CustomStatement: React.FC = () => {
  const [extratoData, setExtratoData] = useState<ExtratoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchExtratoData();
        setExtratoData(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados do extrato:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }: { item: ExtratoItem }) => (
    <View style={styles.statementContainer}>
      <View style={styles.iconView}>
        <MaterialIcons name="attach-money" size={32} />
      </View>
      <View>
        <Text style={styles.titleStatementStyle}>{item.descricao}</Text>
        <Text style={styles.dateStyle}>{item.data}</Text>
      </View>
      <View style={styles.viewSeparate} />
      <Text style={styles.categoryStyle}>{item.categoria}</Text>
      <View style={styles.viewSeparate} />
      <Text style={styles.balanceStyle}>R${item.valor.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          data={extratoData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingBottom: 60,
    paddingTop: 20,
  },
  statementContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  iconView: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.Colors.GRAY,
    width: 40,
    height: 40,
    padding: 5,
    borderRadius: 10,
  },
  titleStatementStyle: {
    width: 120,
    fontFamily: theme.fontFamily.body,
    color: theme.Colors.BLUE,
    fontSize: 12,
  },
  dateStyle: {
    fontFamily: theme.fontFamily.light,
    color: theme.Colors.MATTE_BLUE,
    fontSize: 12,
  },
  viewSeparate: {
    width: 1,
    height: 50,
    backgroundColor: theme.Colors.GRAY,
  },
  categoryStyle: {
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: theme.fontFamily.light,
    color: theme.Colors.MATTE_BLUE,
    fontSize: 10,
  },
  balanceStyle: {
    width: 70,
    fontFamily: theme.fontFamily.body,
    color: theme.Colors.GOLDEN,
    fontSize: 10,
  },
});

export default CustomStatement;
