// src/components/home/OfferCard.tsx
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Image } from "expo-image";
import cn from "clsx";
import { images } from "../../constants";

interface Props {
  item: any;
  index: number;
}

export const OfferCard: React.FC<Props> = React.memo(({ item, index }) => {
  const isEven = index % 2 === 0;
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className={cn("flex-row rounded-2xl overflow-hidden my-3", isEven ? "flex-row-reverse" : "flex-row")}
      style={{
        backgroundColor: item.color,
        height: 160,
        width: 320,
        marginHorizontal: 8,
      }}
    >
      <View className="h-full w-2/5 items-center justify-center">
        <Image source={item.image} style={{ width: "90%", height: "90%" }} contentFit="contain" />
      </View>
      <View className={cn("flex-1 justify-center px-5", isEven ? "items-start" : "items-end")}>
        <Text className="text-2xl font-bold text-white leading-snug">{item.title}</Text>
        <Image source={images.arrowRight} style={{ width: 48, height: 48, marginTop: 8 }} contentFit="contain" />
      </View>
    </TouchableOpacity>
  );
});
