import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { order } from '../../constants/orders';
import { router } from 'expo-router';

const Cart = () => {
  // Calculate total number of items in cart
  const totalItems = order.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4 py-6">
        {/* Cart Header */}
        <View className="mb-6">
          <Text className="text-3xl font-righteous text-gray-900">Your Cart</Text>
          <Text className=" font-nunito-semibold text-gray-500 mt-1">{totalItems} item{totalItems !== 1 ? 's' : ''} in cart</Text>
        </View>

        {/* Cart Items */}
        <View className="mb-6">
          {order.items.map((item) => (
            <View key={item.id} className="flex-row mb-4 pb-4 border-b border-gray-200">
              {/* Item Image */}
              <View className="w-24 h-24 justify-center items-center rounded-lg overflow-hidden bg-gray-100">
                <Image 
                  source={item.image} 
                  className=" max-w-[60%] max-h-[70%]" 
                  resizeMode="contain"
                />
              </View>
              
              {/* Item Details */}
              <View className="flex-1 ml-4 justify-between">
                <View>
                  <Text className=" font-quicksand-bold text-lg text-gray-900">{item.title}</Text>
                  {item.variant && (
                    <Text className=" font-nunito-semibold text-sm text-gray-500 mt-1">Variant: {item.variant}</Text>
                  )}
                  {item.color && (
                    <Text className=" font-nunito-semibold text-sm text-gray-500">Color: {item.color}</Text>
                  )}
                </View>
                
                <View className="flex-row justify-between items-center">
                  <Text className=" font-quicksand tracking-wider text-lg font-bold text-gray-900">${item.price.toFixed(2)}</Text>
                  <View className="flex-row items-center">
                    <TouchableOpacity className="w-8 h-8 rounded-full border border-gray-300 items-center justify-center">
                      <Text className="text-gray-600">-</Text>
                    </TouchableOpacity>
                    <Text className="mx-3 font-medium">{item.quantity}</Text>
                    <TouchableOpacity className="w-8 h-8 rounded-full border border-gray-300 items-center justify-center">
                      <Text className="text-gray-600">+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Order Summary */}
        <View className=" bg-gray-50 rounded-xl p-4 mb-6">
          <Text className="font-nunito-semibold text-lg  text-gray-900 mb-3">Order Summary</Text>
          
          <View className="flex-row justify-between mb-2">
            <Text className="font-nunito-semibold text-gray-600">Subtotal</Text>
            <Text className="text-gray-900 font-nunito-semibold ">${order.subtotal.toFixed(2)}</Text>
          </View>
          
          <View className="flex-row justify-between mb-2">
            <Text className="font-nunito-semibold text-gray-600">Shipping</Text>
            <Text className="font-nunito-semibold text-gray-900">${order.shipping.toFixed(2)}</Text>
          </View>
          
          <View className="flex-row justify-between mb-2">
            <Text className="font-nunito-semibold text-gray-600">Tax</Text>
            <Text className="text-gray-900 font-nunito-semibold">${order.tax.toFixed(2)}</Text>
          </View>
          
          {order.discount > 0 && (
            <View className="flex-row justify-between mb-2">
              <Text className="font-nunito-semibold text-gray-600">Discount</Text>
              <Text className="font-nunito-semibold text-green-600">-${order.discount.toFixed(2)}</Text>
            </View>
          )}
          
          <View className="h-px bg-gray-200 my-3" />
          
          <View className="flex-row justify-between">
            <Text className="font-nunito-semibold text-lg font-semibold text-gray-900">Total</Text>
            <Text className="font-quicksand text-lg font-bold text-gray-900">${order.total.toFixed(2)}</Text>
          </View>
        </View>

        {/* Checkout Button */}
        <TouchableOpacity onPress={()=>{router.push("/checkout")}} className="bg-purple-600 py-4 rounded-xl items-center mb-8">
          <Text className="font-nunito-bold text-white text-lg font-semibold">Checkout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Cart;