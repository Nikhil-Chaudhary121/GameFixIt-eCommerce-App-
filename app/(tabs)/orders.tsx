import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { orders } from '../../constants/orders';

const Orders = ({ navigation }: any) => {
  const handleOrderPress = (orderId: string) => {
    navigation.navigate('OrderDetails', { orderId });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-4 py-4">
        <Text className="text-2xl font-bold text-black">Orders</Text>
      </View>

      {/* Status Filter */}
      <View className="bg-white px-4 py-3">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 16 }}
        >
          <View className="flex-row space-x-2">
            <TouchableOpacity className="bg-purple-600 px-4 py-2 rounded-full mr-2">
              <Text className="text-white font-medium text-sm">Processing</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-100 px-4 py-2 rounded-full mr-2">
              <Text className="text-gray-600 font-medium text-sm">Shipped</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-100 px-4 py-2 rounded-full mr-2">
              <Text className="text-gray-600 font-medium text-sm">Delivered</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-100 px-4 py-2 rounded-full mr-2">
              <Text className="text-gray-600 font-medium text-sm">Returned</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-100 px-4 py-2 rounded-full">
              <Text className="text-gray-600 font-medium text-sm">Cancelled</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* Orders List */}
      <ScrollView className="flex-1 bg-gray-50 px-4 pt-4">
        {orders.map((order, index) => (
          <TouchableOpacity
            key={order.id}
            className="bg-white rounded-xl p-4 mb-3 shadow-sm border border-gray-100"
            onPress={() => handleOrderPress(order.id)}
          >
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center flex-1">
                <View className="bg-gray-100 w-12 h-12 rounded-lg items-center justify-center mr-3">
                  <Ionicons name="receipt-outline" size={20} color="#6B7280" />
                </View>
                
                <View className="flex-1">
                  <Text className="text-base font-semibold text-black mb-1">
                    Order #{order.id.split('-')[2]}
                  </Text>
                  <Text className="text-sm text-gray-500">
                    {order.items.length} items
                  </Text>
                </View>
              </View>
              
              <Ionicons name="chevron-forward" size={20} color="#D1D5DB" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Navigation Placeholder */}
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
            <View className="w-12 h-1 bg-black rounded-full mt-1" />
          </View>
          <View className="items-center">
            <Ionicons name="person-outline" size={24} color="#D1D5DB" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Orders;