// src/components/home/SectionHeader.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
}

export const SectionHeader: React.FC<Props> = React.memo(({ title, onPress }) => (
  <View className="flex-row bg-white items-center justify-between px-6 mb-4">
    <Text className="text-lg font-nunito font-bold text-gray-900">{title}</Text>
    <TouchableOpacity onPress={onPress}>
      <Text className="text-sm font-nunito ">See All</Text>
    </TouchableOpacity>
  </View>
));
