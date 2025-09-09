// src/components/home/SearchBar.tsx
import React from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  value: string;
  onChange: (text: string) => void;
}

export const SearchBar: React.FC<Props> = React.memo(({ value, onChange }) => (
  <View className="px-6 py-4 bg-white">
    <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-3">
      <Ionicons name="search" size={20} color="#9CA3AF" />
      <TextInput
        className="flex-1 ml-3 text-base text-gray-900"
        placeholder="Search"
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={onChange}
      />
    </View>
  </View>
));
