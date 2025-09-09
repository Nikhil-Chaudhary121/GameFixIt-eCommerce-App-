// src/components/home/Header.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { images } from "../../constants";
import { router } from "expo-router";


export const Header = React.memo(() => {
  return (
    <View className="flex-row items-center justify-between px-6 py-4 bg-white">
      <TouchableOpacity className="">
        <Text className=" font-jaro text-3xl tracking-normal text-purple-600">GameFixIt</Text>
      </TouchableOpacity>

      

      <TouchableOpacity onPress={()=> {router.push("/notification")}} className="w-10 h-10 bg-purple-500 rounded-full items-center justify-center">
        <Ionicons name="notifications" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
});
