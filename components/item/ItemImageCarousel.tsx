// src/components/item/ItemImageCarousel.tsx
import React from "react";
import { View } from "react-native";
import { Image } from "expo-image";

interface Props {
  images: any[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const ItemImageCarousel: React.FC<Props> = ({ images, selectedIndex }) => {
  return (
    <View className="items-center py-8 bg-gray-50 mx-4 rounded-2xl mb-6">
      <Image
        source={images[selectedIndex]}
        className="w-64 h-48"
        contentFit="contain"
      />

      <View className="flex-row mt-4">
        {images.map((_, i) => (
          <View
            key={i}
            className={`w-2 h-2 rounded-full mx-1 ${
              selectedIndex === i ? "bg-purple-600" : "bg-gray-300"
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default React.memo(ItemImageCarousel);
