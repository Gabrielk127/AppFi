import { Avatar } from "@/components/avatar";
import { MenuButton } from "@/components/menu-button";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Página Home</Text>
      <Link href={"/oneScreen"}>
        <Avatar source={{ uri: "https://github.com/gabrielk127.png" }} />
      </Link>
      <MenuButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
