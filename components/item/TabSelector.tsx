// src/components/item/TabSelector.tsx
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

interface Props {
  activeTab: "Description" | "Reviews";
  onTabChange: (tab: "Description" | "Reviews") => void;
}

const TabSelector: React.FC<Props> = ({ activeTab, onTabChange }) => {
  return (
    <View className="mb-4">
      <View className="flex-row">
        {["Description", "Reviews"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => onTabChange(tab as "Description" | "Reviews")}
            className={`flex-1 py-3 items-center border-b-2 ${
              activeTab === tab ? "border-purple-600" : "border-transparent"
            }`}
          >
            <Text
              className={`font-medium ${
                activeTab === tab ? "text-purple-600" : "text-gray-500"
              }`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default React.memo(TabSelector);
