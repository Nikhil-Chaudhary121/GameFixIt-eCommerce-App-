import { AntDesign   } from "@expo/vector-icons";
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { order } from '../../constants/orders';
import { router } from 'expo-router';

const Checkout = () => {
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <View className="flex-1  bg-white">
      <ScrollView className="flex-1 px-4 py-6">
        {/* Checkout Header */}
        <View className="mb-6 flex justify-between  flex-row">
          <AntDesign name="arrowleft" size={24} color="black" />
          <Text className=" font-righteous text-2xl font-bold text-gray-900">Checkout</Text>
          <Text className="text-2xl font-bold text-gray-900"></Text>
          {/* <Text className="text-gray-500 mt-1">Order #{order.id}</Text> */}
        </View>

        {/* Shipping Address */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-900 mb-3">Shipping Address</Text>
          <View className="bg-gray-50 rounded-xl p-4">
            <Text className="font-medium text-gray-900">{order.shippingAddress.name}</Text>
            <Text className="text-gray-600 mt-1">{order.shippingAddress.street}</Text>
            <Text className="text-gray-600">
              {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postalCode}
            </Text>
            <Text className="text-gray-600">{order.shippingAddress.country}</Text>
          </View>
        </View>

        {/* Payment Method */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-900 mb-3">Payment Method</Text>
          <View className="bg-gray-50 rounded-xl p-4 flex-row items-center">
            <View className="w-10 h-6 bg-gray-800 rounded mr-3" />
            <Text className="text-gray-900">Credit Card ending in 4187</Text>
          </View>
        </View>

        {/* Order Items Summary */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-900 mb-3">Order Items</Text>
          <View className="bg-gray-50 rounded-xl p-4">
            {order.items.map((item) => (
              <View key={item.id} className="flex-row items-center mb-3 last:mb-0">
                <View className="w-12 h-12 justify-center items-center rounded-lg overflow-hidden bg-gray-100">
                  <Image 
                    source={item.image} 
                    className="max-w-[60%] max-h-[60%] object-cover" 
                    resizeMode="cover"
                  />
                </View>
                <View className="flex-1 ml-3">
                  <Text className="font-medium text-gray-900">{item.title}</Text>
                  <Text className="text-sm text-gray-500">Qty: {item.quantity}</Text>
                </View>
                <Text className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Order Summary */}
        <View className="bg-gray-50 rounded-xl p-4 mb-6">
          <Text className="text-lg font-semibold text-gray-900 mb-3">Order Summary</Text>
          
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-600">Subtotal</Text>
            <Text className="text-gray-900">${order.subtotal.toFixed(2)}</Text>
          </View>
          
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-600">Shipping</Text>
            <Text className="text-gray-900">${order.shipping.toFixed(2)}</Text>
          </View>
          
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-600">Tax</Text>
            <Text className="text-gray-900">${order.tax.toFixed(2)}</Text>
          </View>
          
          {order.discount > 0 && (
            <View className="flex-row justify-between mb-2">
              <Text className="text-gray-600">Discount</Text>
              <Text className="text-green-600">-${order.discount.toFixed(2)}</Text>
            </View>
          )}
          
          <View className="h-px bg-gray-200 my-3" />
          
          <View className="flex-row justify-between">
            <Text className="text-lg font-semibold text-gray-900">Total</Text>
            <Text className="text-lg font-bold text-gray-900">${order.total.toFixed(2)}</Text>
          </View>
        </View>

        {/* Place Order Button */}
        <TouchableOpacity
        onPress={()=>{router.push('/order-success')}}
         className="bg-purple-600 py-4  rounded-xl items-center mb-16">
          <Text className="text-white text-lg font-semibold">Place Order</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Checkout;