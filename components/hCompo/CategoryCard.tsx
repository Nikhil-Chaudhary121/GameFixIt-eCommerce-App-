// src/components/home/CategoryCard.tsx
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Image } from "expo-image";
import { Category } from "../../constants";

interface Props {
  item: Category;
  onPress: () => void;
}

export const CategoryCard: React.FC<Props> = React.memo(({ item, onPress }) => (
  <TouchableOpacity className="items-center bg-white mr-6" onPress={onPress} activeOpacity={0.7}>
    <View className="w-16 h-16 bg-gray-100 rounded-2xl items-center justify-center mb-2">
      <Image source={item.image} style={{ width: "70%", height: "70%" }} contentFit="contain" />
    </View>
    <Text className="text-xs font-nunito text-gray-700 font-medium text-center">{item.title}</Text>
  </TouchableOpacity>
));
