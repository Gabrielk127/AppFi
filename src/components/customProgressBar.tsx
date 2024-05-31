// components/CustomProgressBar.tsx

import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { MotiView } from "moti";

interface CustomProgressBarProps {
  maxValue: number;
  currentValue: number;
  height?: number;
  backgroundColor?: string;
  progressColor?: string;
  progressColor50?: string;
  progressColor70?: string;
  borderRadius?: number;
  showLabel?: boolean;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

const CustomProgressBar: React.FC<CustomProgressBarProps> = ({
  maxValue,
  currentValue,
  height = 10,
  backgroundColor = "#e0e0df",
  progressColor = "#3b5998",
  progressColor50 = "#FFA500", // Orange for >50%
  progressColor70 = "#FF0000", // Red for >70%
  borderRadius = 5,
  showLabel = false,
  labelStyle,
  containerStyle,
}) => {
  const progress = Math.min(currentValue / maxValue, 1);

  let currentProgressColor = progressColor;
  if (progress > 0.7) {
    currentProgressColor = progressColor70;
  } else if (progress > 0.5) {
    currentProgressColor = progressColor50;
  }

  return (
    <View
      style={[
        styles.container,
        { height, borderRadius, backgroundColor },
        containerStyle,
      ]}
    >
      <MotiView
        from={{ width: "0%" }}
        animate={{ width: `${progress * 100}%` }}
        transition={{ type: "timing", duration: 500 }}
        style={[
          styles.progress,
          { backgroundColor: currentProgressColor, borderRadius },
        ]}
      />
      {showLabel && (
        <View style={styles.labelContainer}>
          <Text style={[styles.label, labelStyle]}>
            {`${Math.round(progress * 100)}%`}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#e0e0df",
    borderRadius: 5,
    overflow: "hidden",
    justifyContent: "center",
  },
  progress: {
    height: "100%",
    borderRadius: 5,
  },
  labelContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#000",
    fontWeight: "bold",
  },
});

export default CustomProgressBar;
