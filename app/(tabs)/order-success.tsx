// app/order-success.tsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { CheckCircle, ShoppingBag, CreditCard } from 'lucide-react-native';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

const OrderSuccessPage = () => {
  return (
    <SafeAreaView className="flex-1 bg-gradient-to-br from-purple-500 to-purple-700">
      <StatusBar barStyle="light-content" />
      
      {/* Main Content */}
      <View className="flex-1 px-6 justify-center items-center">
        {/* Illustration Container */}
        <View className="bg-white/10 rounded-3xl p-8 mb-8" style={{ width: width * 0.8 }}>
          <View className="items-center">
            {/* Laptop with Cards Illustration */}
            <View className="relative mb-4">
              {/* Laptop Base */}
              <View className="w-32 h-20 bg-pink-200 rounded-lg relative">
                {/* Screen */}
                <View className="absolute -top-16 left-2 right-2 h-16 bg-pink-100 rounded-t-lg border-2 border-pink-200">
                  {/* Screen Content */}
                  <View className="flex-1 bg-white m-1 rounded-sm relative overflow-hidden">
                    <View className="absolute top-1 left-1 w-2 h-1 bg-pink-300 rounded-full" />
                    <View className="absolute top-1 right-1 w-4 h-1 bg-pink-200 rounded-full" />
                    <View className="absolute bottom-1 left-1 right-1 h-2 bg-pink-100 rounded-sm" />
                  </View>
                </View>
                {/* Keyboard */}
                <View className="absolute bottom-2 left-4 right-4 h-1 bg-pink-300 rounded-full" />
              </View>
              
              {/* Credit Cards */}
              <View className="absolute -right-4 -top-8">
                <View className="w-12 h-8 bg-purple-600 rounded shadow-lg transform rotate-12" />
                <View className="absolute top-2 -left-2 w-12 h-8 bg-blue-500 rounded shadow-lg transform -rotate-6" />
              </View>
              
              {/* Shopping Bag Icon */}
              <View className="absolute -left-6 top-2">
                <View className="w-8 h-8 bg-yellow-400 rounded-full items-center justify-center">
                  <ShoppingBag size={16} color="white" />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Success Content */}
        <View className="items-center mb-12">
          <View className="w-16 h-16 bg-green-500 rounded-full items-center justify-center mb-6">
            <CheckCircle size={32} color="white" />
          </View>
          
          <Text className="text-white text-2xl font-bold mb-4 text-center">
            Order Placed{'\n'}Successfully
          </Text>
          
          <Text className="text-white/80 text-base text-center leading-6 px-4">
            You will receive an email confirmation
          </Text>
        </View>
      </View>

      {/* Bottom Button */}
      <View className="px-6 pb-8">
        <TouchableOpacity
          onPress={() => router.push('/order')}
          className="bg-white rounded-xl py-4 items-center shadow-lg"
        >
          <Text className="text-purple-600 font-semibold text-lg">See Order details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OrderSuccessPage;