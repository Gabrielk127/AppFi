import { theme } from "@/theme";
import { Tabs } from "expo-router";
import React, { ReactNode, useState } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CustomModal from "@/components/modals/customModal";

interface CustomTabBarButtonProps {
  children: ReactNode;
  onPress?: (e: GestureResponderEvent) => void;
}

export default function TabLayout() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
      onPress={toggleModal}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 35,
          backgroundColor: theme.Colors.MATTE_BLUE,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.Colors.GOLDEN,
          tabBarInactiveTintColor: theme.Colors.BLUE,
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "#fff",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            height: 80,
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

      <CustomModal isVisible={isModalVisible} onClose={toggleModal} />
    </>
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
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    alignItems: "center",
  },
  modalButton: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: theme.Colors.PURPLE_500,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "white",
  },
});
