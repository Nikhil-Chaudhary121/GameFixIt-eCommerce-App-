// src/components/item/BottomActions.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome6, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

interface Props {
  onBuyNow: () => void;
}

const BottomActions: React.FC<Props> = ({ onBuyNow }) => {
  return (
    <View className="px-4 z-10 py-4 flex flex-row gap-4 border-t border-gray-100">
      <TouchableOpacity
        onPress={()=>{router.push('/cart')}}
        className="bg-white-100 border-[#8e6cef] border-2 rounded-xl px-4 py-2 items-center flex-row justify-center"
      >
        <Ionicons name="cart" size={28} color="#8e6cef" />
        {/* <MaterialIcons name="add-shopping-cart" size={28} color="#8e6cef" /> */}
       
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>{router.push('/cart')}}
        className="bg-purple-600 flex-1 rounded-xl py-4 items-center flex-row justify-center"
      >
        <Ionicons name="bag-outline" size={20} color="white" />
        <Text className="text-white font-semibold text-base ml-2">Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(BottomActions);
