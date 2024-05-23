import { theme } from "@/theme";
import { Tabs } from "expo-router";
import { ReactNode } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface CustomTabBarButtonProps {
  children: ReactNode;
  onPress?: (e: GestureResponderEvent) => void;
}

export default function TabLayout() {
  const CustomTabBarButton = ({
    children,
    onPress,
  }: CustomTabBarButtonProps) => (
    <TouchableOpacity
      style={{
        top: -20,
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 35,
          backgroundColor: theme.Colors.PURPLE_500,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.Colors.PURPLE_500,
        tabBarInactiveTintColor: theme.Colors.PURPLE_200,
        tabBarStyle: {
          borderWidth: 0.1,
          borderTopColor: theme.Colors.PURPLE_100,
          position: "absolute",
          bottom: 10,
          left: 10,
          right: 10,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pageFive"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="calendar-month" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pageTwo"
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialIcons
              name="add-chart"
              size={size}
              color={theme.Colors.PRIMARY}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="extract"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="assignment" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pageFour"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="attach-money" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: theme.Colors.PURPLE_500,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
});
