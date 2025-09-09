// src/components/home/ProductCard.tsx
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Product } from "../../constants";
import { router } from "expo-router";

interface Props {
  item: Product;
  onPress: () => void;
  compact?: boolean; // true → small card
}

export const ProductCard: React.FC<Props> = React.memo(
  ({ item, onPress, compact }) => (
    <TouchableOpacity
      className="bg-[#f6f6f6] rounded-2xl  mb-4"
      style={{ width: compact ? 150 : 170 }}
      onPress={()=>{router.push('/item')}}
      activeOpacity={0.9}
    >
      {/* Wishlist Icon */}
      <TouchableOpacity className="absolute top-3 right-3 z-10">
        <Ionicons
          name="heart-outline"
          size={compact ? 18 : 20}
          color="#9CA3AF"
        />
      </TouchableOpacity>

      {/* Product Image */}
      <View
        className={`items-center justify-center ${
          compact ? "h-28" : "h-32"
        } mt-4`}
      >
        <Image
          source={item.image}
          style={{ width: "85%", height: "85%" }}
          contentFit="contain"
        />
      </View>

      {/* Bottom Info Section */}
      <View className="px-3 py-3">
        <Text
          className={` font-quicksand-bold ${
            compact ? "text-xs" : "text-sm"
          } font-medium text-gray-800`}
          numberOfLines={1}
        >
          {item.title}
        </Text>

        <View className="flex-row items-center justify-between mt-1">
          <Text
            className={` font-quicksand tracking-wider ${
              compact ? "text-sm" : "text-lg"
            } font-bold text-gray-600`}
          >
            ${item.price}
          </Text>

          {/* Rating */}
          <View className="flex-row items-center">
            <Ionicons name="star" size={14} color="#FACC15" />
            <Text
              className={`ml-1 ${
                compact ? "text-xs" : "text-sm"
              } text-gray-600`}
            >
              {5}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
);
