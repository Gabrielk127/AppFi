import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Wallet() {
  // return (
  //   <View style={styles.viewStyle}>
  //     <Text>Carteira</Text>
  //     <CircularProgressBar
  //       progress={500}
  //       size={300}
  //       strokeWidth={50}
  //       color="#3498db"
  //       backgroundColor="#ecf0f1"
  //       maxValue={1000}
  //     />
  //   </View>
  // );

  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    ></View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
