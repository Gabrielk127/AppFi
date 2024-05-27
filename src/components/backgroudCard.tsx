import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface BackgroundCardProps {
  children?: ReactNode;
}

const BackgroundCard = ({ children }: BackgroundCardProps) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    height: "100%",
    position: "relative",
    backgroundColor: "rgba(69, 73, 69, 0.2)",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingBottom: 14,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    overflow: "visible",
  },
});

export default BackgroundCard;
