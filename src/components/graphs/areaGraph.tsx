import { INCOMES } from "@/api/incomes";
import { theme } from "@/theme";
import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryTheme,
} from "victory-native";

export default function AreaGraph() {
  const formattedData = INCOMES.Fevereiro.map((item) => ({
    x: item.id,
    y: item.value,
    // label: ` R$ ${item.value}`,
    date: item.date,
  }));

  const dates = formattedData.map((data) => data.date); // Array de datas para usar como valores de ticks
  dates.push(formattedData[formattedData.length - 1].date); // Adicionando a última data

  return (
    <>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={20}
        width={380} // Defina a largura do gráfico
        height={200} // Defina a altura do gráfico
        padding={{ left: 0, right: 0, top: 20, bottom: 40 }} // Remova os paddings laterais
        style={{
          parent: {
            border: "1px solid #ccc",
          },
        }}
      >
        <VictoryAxis
          tickValues={dates.map((date, index) => index)} // Usar índices como valores de ticks
          tickFormat={(index) => dates[index]} // Exibir as datas como rótulos
          style={{
            axis: { stroke: "none" }, // Remova a linha do eixo
            ticks: { stroke: "none" }, // Remova os ticks
            tickLabels: {
              fill: "black",
              fontSize: 10,
              angle: -45,
            }, // Estilo dos rótulos
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "none" }, // Remova a linha do eixo
            ticks: { stroke: "none" }, // Remova os ticks
            tickLabels: { fill: "none" }, // Remova os rótulos dos ticks
          }}
        />
        <VictoryArea
          data={formattedData}
          x="x"
          y="y"
          style={{
            data: {
              fill: theme.Colors.MATTE_BLUE,
              fillOpacity: 0.7,
              stroke: theme.Colors.BLUE,
              strokeWidth: 2,
            },
          }}
        />
      </VictoryChart>
    </>
  );
}
