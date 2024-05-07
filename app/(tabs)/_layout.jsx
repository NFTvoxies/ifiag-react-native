import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "green" }}>
      <Tabs.Screen
        name="chats"
        options={{
          title: "Discussions",
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubble-ellipses" color={color} size={32} />
          ),
          tabBarLabelStyle: {
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#4a9164",
          },
          headerTintColor: "white",
          tabBarActiveBackgroundColor: "#4a9164",
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
        }}
      />

      <Tabs.Screen
        name="calls"
        options={{
          title: "calls",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call-outline" color={color} size={size} />
          ),
          tabBarLabelStyle: {
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#4a9164",
          },
          headerTintColor: "white",
          tabBarActiveBackgroundColor: "#4a9164",
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
        }}
      />

      <Tabs.Screen
        name="updates"
        options={{
          title: "updates",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-outline" color={color} size={size} />
          ),
          tabBarLabelStyle: {
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#4a9164",
          },
          tabBarActiveIndicatorStyle: {
            backgroundColor: "red", // Color of the active tab indicator
            borderRadius: 20, // Border radius for the active tab indicator
          },
          headerTintColor: "white",
          tabBarActiveBackgroundColor: "#4a9164",
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
        }}
      />

      <Tabs.Screen
        name="communities"
        options={{
          title: "communities",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" color={color} size={size} />
          ),
          tabBarLabelStyle: {
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#4a9164",
          },
          headerTintColor: "white",
          tabBarActiveBackgroundColor: "#4a9164",
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
