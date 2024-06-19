import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Slot, Stack } from "expo-router";

import {
  useFonts,
  LexendDeca_200ExtraLight,
  LexendDeca_400Regular,
  LexendDeca_500Medium,
  LexendDeca_700Bold,
} from "@expo-google-fonts/lexend-deca";
import { Loading } from "@/components/loading";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    LexendDeca_200ExtraLight,
    LexendDeca_400Regular,
    LexendDeca_500Medium,
    LexendDeca_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <Stack initialRouteName="oneScreen">
      <Stack.Screen name="oneScreen" options={{ headerShown: false }} />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="loginScreen" options={{ headerShown: false }} />
      <Stack.Screen name="registerScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
