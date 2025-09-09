// src/screens/Notification.tsx
import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Notification = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="items-center py-4">
        <Text className="text-base font-semibold text-gray-900">
          Notifications
        </Text>
      </View>

      {/* Content */}
      <View className="flex-1 items-center justify-center px-6">
        {/* Bell Icon */}
        <View className="mb-4">
          <Ionicons name="notifications-outline" size={80} color="#F59E0B" />
        </View>

        {/* Text */}
        <Text className="text-lg font-medium text-gray-800 mb-6">
          No Notification yet
        </Text>

        {/* Button */}
        <TouchableOpacity
          onPress={() => router.push('/home')}
          className="bg-purple-500 rounded-full px-6 py-3"
          activeOpacity={0.8}
        >
          <Text className="text-white font-semibold text-base">
            Explore Categories
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Notification;
