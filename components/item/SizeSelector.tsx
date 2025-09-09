// src/components/item/SizeSelector.tsx
import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  selected: string;
  onSelect: (size: string) => void;
}

const sizes = ["500GB" , "1TB" , "2TB" , "4TB"];

const SizeSelector: React.FC<Props> = ({ selected, onSelect }) => {
  return (
    <View className="mb-6">
      <View className="flex-row items-center justify-between mb-3">
        <Text className="font-nunito-semibold text-base font-semibold text-gray-900">Size</Text>
        <View className="flex-row items-center">
          <Ionicons name="star" size={14} color="#EAB308" />
          <Text className="text-sm font-nunito-semibold text-gray-600 ml-1">4.5</Text>
        </View>
      </View>

      <FlatList
        data={sizes}
        horizontal
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onSelect(item)}
            className={` font-nunito-semibold px-4   h-12 rounded-xl border-2 mr-3 items-center justify-center ${
              selected === item
                ? "border-purple-600 bg-purple-50"
                : "border-gray-200 bg-white"
            }`}
          >
            <Text
              className={` font-nunito-semibold text-sm font-medium ${
                selected === item ? "text-purple-600" : "text-gray-700"
              }`}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default React.memo(SizeSelector);
