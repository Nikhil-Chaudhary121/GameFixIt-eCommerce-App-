// src/components/item/ColorSelector.tsx
import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

interface Props {
  images: any[];
  selected: number;
  onSelect: (index: number) => void;
}

const ColorSelector: React.FC<Props> = ({ images, selected, onSelect }) => {
  return (
    <FlatList
      data={images}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => onSelect(index)}
          className={`mr-3 p-2 rounded-2xl overflow-hidden ${
            selected === index
              ? "border-2 border-purple-600"
              : "border border-gray-200"
          }`}
        >
          <Image source={item} className="w-16 h-16" contentFit="cover" />
        </TouchableOpacity>
      )}
      className="mb-6"
    />
  );
};

export default React.memo(ColorSelector);
