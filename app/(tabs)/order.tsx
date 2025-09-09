// app/order.tsx
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { ChevronLeft, Package, Check } from 'lucide-react-native';
import { router } from 'expo-router';

const OrderDetailsPage = () => {
  const orderStatuses = [
    { id: 4, title: 'Delivered', date: '28 May', completed: false },
    { id: 3, title: 'Shipped', date: '28 May', completed: true },
    { id: 2, title: 'Order Confirmed', date: '28 May', completed: true },
    { id: 1, title: 'Order Placed', date: '28 May', completed: true },
  ];

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <SafeAreaView className="bg-white">
        <View className="flex-row items-center px-5 py-4">
          <TouchableOpacity onPress={() => router.back()} className="mr-4">
            <ChevronLeft size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-lg font-semibold flex-1 text-center mr-8">Order #456765</Text>
        </View>
      </SafeAreaView>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Order Status Timeline */}
        <View className="px-5 pt-6 pb-8">
          {orderStatuses.map((status, index) => (
            <View key={status.id} className={`flex-row items-center ${index < orderStatuses.length - 1 ? 'mb-8' : 'mb-6'}`}>
              {/* Status Icon */}
              <View className={`w-6 h-6 rounded-full items-center justify-center mr-4 ${
                status.completed 
                  ? 'bg-purple-600' 
                  : 'bg-gray-300'
              }`}>
                {status.completed ? (
                  <Check size={12} color="white" strokeWidth={3} />
                ) : (
                  <View className="w-2 h-2 rounded-full bg-gray-500" />
                )}
              </View>

              {/* Status Text */}
              <View className="flex-1">
                <Text className={`text-base font-medium ${
                  status.completed ? 'text-gray-900' : 'text-gray-400'
                }`}>
                  {status.title}
                </Text>
              </View>

              {/* Date */}
              <Text className={`text-sm ${
                status.completed ? 'text-gray-500' : 'text-gray-400'
              }`}>
                {status.date}
              </Text>
            </View>
          ))}
        </View>

        {/* Order Items Section */}
        <View className="px-5 mb-8">
          <Text className="text-lg font-semibold text-gray-900 mb-4">Order Items</Text>
          
          <View className="bg-gray-100 rounded-2xl px-4 py-4">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-white rounded-xl items-center justify-center mr-4">
                  <Package size={18} color="#6B7280" />
                </View>
                <Text className="font-medium text-gray-900 text-base">4 items</Text>
              </View>
              
              <TouchableOpacity onPress={()=> {router.push('/orders')}}>
                <Text className="text-purple-600 font-medium text-base">View All</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Shipping Details Section */}
        <View className="px-5 mb-8">
          <Text className="text-lg font-semibold text-gray-900 mb-4">Shipping details</Text>
          
          <View className="bg-gray-100 rounded-2xl px-4 py-4">
            <Text className="text-gray-900 font-medium text-base leading-6 mb-1">
              2715 Ash Dr, San Jose, South Dakota 83475
            </Text>
            <Text className="text-gray-600 text-base">
              121-224-7890
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetailsPage;