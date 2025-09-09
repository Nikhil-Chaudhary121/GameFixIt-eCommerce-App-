import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Profile = ({ navigation }: any) => {
  const profileImage = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face';

  const menuItems = [
    {
      title: 'Address',
      icon: 'location-outline',
      onPress: () => navigation.navigate('Address'),
    },
    {
      title: 'Wishlist',
      icon: 'heart-outline',
      onPress: () => navigation.navigate('Wishlist'),
    },
    {
      title: 'Payment',
      icon: 'card-outline',
      onPress: () => navigation.navigate('Payment'),
    },
    {
      title: 'Help',
      icon: 'help-circle-outline',
      onPress: () => navigation.navigate('Help'),
    },
    {
      title: 'Support',
      icon: 'headset-outline',
      onPress: () => navigation.navigate('Support'),
    },
  ];

  const handleEditProfile = () => {
    // Handle edit profile action
    console.log('Edit profile pressed');
  };

  const handleSignOut = () => {
    // Handle sign out action
    console.log('Sign out pressed');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      

      <ScrollView className="flex-1 bg-gray-50" showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View className="bg-white mx-4 mt-6 rounded-2xl p-6 items-center">
          {/* Profile Image */}
          <View className="w-20 h-20 rounded-full overflow-hidden mb-4">
            <Image
              source={{ uri: profileImage }}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>

          {/* User Info */}
          <Text className="text-xl font-bold text-black mb-1">Gilbert Jones</Text>
          <Text className="text-sm text-gray-500 mb-1">GilbertJones00@gmail.com</Text>
          <Text className="text-sm text-gray-500 mb-4">+91 234-7890</Text>

          {/* Edit Button */}
          <TouchableOpacity
            onPress={handleEditProfile}
            className="bg-blue-500 px-6 py-2 rounded-full"
          >
            <Text className="text-white font-medium text-sm">Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View className="bg-white mx-4 mt-4 rounded-2xl overflow-hidden">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={item.onPress}
              className={`px-6 py-4 flex-row items-center justify-between ${
                index < menuItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <View className="flex-row items-center flex-1">
                <Ionicons name={item.icon as any} size={20} color="#6B7280" />
                <Text className="ml-4 text-base font-medium text-black">
                  {item.title}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#D1D5DB" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Sign Out Button */}
        <View className="mx-4 mt-6 mb-8">
          <TouchableOpacity
            onPress={handleSignOut}
            className="bg-white rounded-2xl py-4 items-center"
          >
            <Text className="text-red-500 font-medium text-base">Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;