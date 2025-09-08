import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // Using Ionicons (you can choose MaterialIcons, FontAwesome, etc.)
import { router } from 'expo-router';

const CartButton = () => {
  const totalItems = 10;

  return (
    <TouchableOpacity
      className="cart-btn relative"
      onPress={() => router.push('/')} 
    >
      {/* Cart Icon */}
      <Ionicons  name="cart-outline" size={32} color="#000" />

      
      {/* Badge */}
      {totalItems > 0 && (
        <View className="cart-badge">
                    <Text className="small-bold text-white">{totalItems}</Text>
                </View>
      )}
    </TouchableOpacity>
  );
};

export default CartButton;
