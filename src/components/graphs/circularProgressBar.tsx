import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { VictoryPie, VictoryAnimation } from "victory-native";

interface CircularProgressBarProps {
  progress: number; // de 0 a 100
  size: number;
  strokeWidth: number;
  color: string;
  backgroundColor: string;
  maxValue: number; // valor correspondente aos 100%
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  progress,
  size,
  strokeWidth,
  color,
  backgroundColor,
  maxValue,
}) => {
  const halfSize = size / 2;
  const radius = halfSize - strokeWidth / 2;

  return (
    <View style={{ width: size, height: size }}>
      <VictoryAnimation duration={1000} data={{ progress }}>
        {(animatedProps) => (
          <View>
            <VictoryPie
              standalone={true}
              width={size}
              height={size}
              data={[
                { x: 1, y: animatedProps.progress },
                { x: 2, y: maxValue - Number(animatedProps.progress) },
              ]}
              innerRadius={radius}
              cornerRadius={radius}
              labels={() => null}
              style={{
                data: {
                  fill: ({ datum }) =>
                    datum.x === 1 ? color : backgroundColor,
                },
              }}
            />
            <View
              style={[
                styles.center,
                {
                  position: "absolute",
                  top: halfSize - strokeWidth,
                  left: halfSize - strokeWidth,
                  width: strokeWidth * 2,
                  height: strokeWidth * 2,
                  borderRadius: strokeWidth,
                },
              ]}
            >
              <Text style={{ fontSize: 20 }}>
                {Math.round((Number(animatedProps.progress) / maxValue) * 100)}%{" "}
              </Text>
            </View>
          </View>
        )}
      </VictoryAnimation>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CircularProgressBar;
