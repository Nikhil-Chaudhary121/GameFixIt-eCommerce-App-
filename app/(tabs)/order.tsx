import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { order } from '../../constants/orders';

const Order = ({ navigation, route }: any) => {
//   const { orderId } = route.params || {};

  const handleBackPress = () => {
    navigation.goBack();
  };

  const orderStatuses = [
    { label: 'Delivered', date: '30 May', completed: true, current: true },
    { label: 'Shipped', date: '29 May', completed: true, current: false },
    { label: 'Order Confirmed', date: '28 May', completed: true, current: false },
    { label: 'Order Placed', date: '28 May', completed: true, current: false },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-4 py-4 flex-row items-center border-b border-gray-100">
        <TouchableOpacity onPress={handleBackPress} className="mr-3">
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-black">Order #{'456765'}</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Order Status */}
        <View className="bg-white mx-4 mt-6 rounded-2xl p-6">
          {orderStatuses.map((status, index) => (
            <View key={index} className="flex-row items-center mb-6 last:mb-0">
              <View className="w-4 h-4 rounded-full bg-purple-600 mr-4" />
              <View className="flex-1 flex-row items-center justify-between">
                <Text className="text-base font-medium text-black">
                  {status.label}
                </Text>
                <Text className="text-sm text-gray-500">{status.date}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Order Items */}
        <View className="bg-white mx-4 mt-4 rounded-2xl overflow-hidden">
          <View className="px-6 py-4 border-b border-gray-100">
            <Text className="text-lg font-bold text-black">Order Items</Text>
          </View>
          
          <TouchableOpacity className="px-6 py-4 flex-row items-center justify-between">
            <View className="flex-row items-center flex-1">
              <View className="bg-gray-100 w-8 h-8 rounded-lg items-center justify-center mr-3">
                <Ionicons name="cube-outline" size={16} color="#6B7280" />
              </View>
              <Text className="text-base font-medium text-black">4 items</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-sm text-purple-600 font-medium mr-2">View All</Text>
              <Ionicons name="chevron-forward" size={16} color="#7C3AED" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Shipping Details */}
        <View className="bg-white mx-4 mt-4 rounded-2xl p-6">
          <Text className="text-lg font-bold text-black mb-4">Shipping details</Text>
          
          <View className="bg-gray-50 p-4 rounded-xl">
            <Text className="text-sm text-gray-600 mb-1">
              270 4th St, San Jose, South Dakota 83475
            </Text>
            <Text className="text-sm text-gray-600">
              ID 224-1690
            </Text>
          </View>
        </View>

        {/* Bottom Spacing */}
        <View className="h-20" />
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="bg-white border-t border-gray-200 px-4 py-2">
        <View className="flex-row justify-around items-center py-2">
          <View className="items-center">
            <Ionicons name="home-outline" size={24} color="#D1D5DB" />
          </View>
          <View className="items-center">
            <Ionicons name="search-outline" size={24} color="#D1D5DB" />
          </View>
          <View className="items-center">
            <Ionicons name="list-outline" size={24} color="#7C3AED" />
          </View>
          <View className="items-center">
            <Ionicons name="person-outline" size={24} color="#D1D5DB" />
          </View>
        </View>
        <View className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-black rounded-full" />
      </View>
    </SafeAreaView>
  );
};

export default Order;