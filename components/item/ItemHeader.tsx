// src/components/item/ItemHeader.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

interface Props {
  navigation: any;
  isWishlisted: boolean;
  toggleWishlist: () => void;
}

const ItemHeader: React.FC<Props> = ({ navigation, isWishlisted, toggleWishlist }) => {
  return (
    <View className="px-4 py-3 flex-row items-center justify-between">
      <TouchableOpacity onPress={() => router.push('/home')}>
        <Ionicons name="chevron-back" size={24} color="#374151" />
      </TouchableOpacity>
      <Text className="text-2xl font-jaro  text-gray-900">Details</Text>
      <TouchableOpacity onPress={toggleWishlist}>
        <Ionicons
          name={isWishlisted ? "heart" : "heart-outline"}
          size={24}
          color={isWishlisted ? "red" : "#374151"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(ItemHeader);
