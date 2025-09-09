// src/components/item/ReviewItem.tsx
import React from "react";
import { View, Text } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { Review } from "../../constants/item";

interface Props {
  review: Review;
}

const ReviewItem: React.FC<Props> = ({ review }) => {
  return (
    <View className="mb-4 border-b border-gray-100 pb-4">
      <View className="flex-row items-start">
        <Image
          source={review.avatar}
          className="w-10 h-10 rounded-full mr-3"
          contentFit="cover"
        />
        <View className="flex-1">
          <View className="flex-row justify-between items-center mb-1">
            <Text className="font-semibold text-gray-900">{review.user}</Text>
            <Text className="text-xs text-gray-500">{review.date}</Text>
          </View>
          <View className="flex-row mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Ionicons
                key={i}
                name={i < review.rating ? "star" : "star-outline"}
                size={12}
                color={i < review.rating ? "#EAB308" : "#d1d5db"}
              />
            ))}
          </View>
          <Text className="text-gray-600 text-sm leading-5">{review.comment}</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(ReviewItem);
