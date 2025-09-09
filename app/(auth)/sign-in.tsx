// SignIn.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const SignIn = () => {
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    console.log('Continue with email:', email);
    // Navigate to password screen or handle authentication
  };

  const handleCreateAccount = () => {
    console.log('Navigate to Create Account');
    // Navigate to SignUp screen
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Continue with ${provider}`);
    // Handle social authentication
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 px-6 pt-16">
            {/* Header */}
            <View className="mb-12">
              <Text className="text-3xl font-bold text-gray-900">
                Sign in
              </Text>
            </View>

            {/* Email Form */}
            <View className="mb-8">
              <TextInput
                className="bg-gray-100 rounded-2xl px-5 py-5 text-base text-gray-900 mb-6"
                placeholder="Email Address"
                placeholderTextColor="#9CA3AF"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                textContentType="emailAddress"
              />

              <TouchableOpacity
                className="bg-purple-500 rounded-2xl py-5 items-center active:bg-purple-600"
                onPress={handleContinue}
                activeOpacity={0.8}
              >
                <Text className="text-white text-base font-semibold">
                  Continue
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="items-center justify-center flex-row mt-6"
                onPress={handleCreateAccount}
                activeOpacity={0.7}
              >
                <Text className="text-black text-sm font-medium">
                   Don't have an Account?
                </Text>
                <Text onPress={()=> router.push("/sign-up")} className="text-purple-500 text-sm font-medium">
                   { } Create One
                </Text>
              </TouchableOpacity>
            </View>

            {/* Social Login Options */}
            <View className="space-y-4 mt-8">
              <TouchableOpacity
                className="flex-row items-center bg-gray-50 rounded-2xl py-5 px-5 active:bg-gray-100"
                onPress={() => handleSocialLogin('Apple')}
                activeOpacity={0.8}
              >
                <View className="w-6 h-6 items-center justify-center">
                  <Ionicons name="logo-apple" size={20} color="#000" />
                </View>
                <Text className="text-gray-900 text-base font-medium ml-4">
                  Continue With Apple
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="flex-row items-center bg-gray-50 rounded-2xl py-5 px-5 active:bg-gray-100"
                onPress={() => handleSocialLogin('Google')}
                activeOpacity={0.8}
              >
                <View className="w-6 h-6 items-center justify-center">
                  <Ionicons name="logo-google" size={20} color="#4285F4" />
                </View>
                <Text className="text-gray-900 text-base font-medium ml-4">
                  Continue With Google
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="flex-row items-center bg-gray-50 rounded-2xl py-5 px-5 active:bg-gray-100"
                onPress={() => handleSocialLogin('Facebook')}
                activeOpacity={0.8}
              >
                <View className="w-6 h-6 items-center justify-center">
                  <Ionicons name="logo-facebook" size={20} color="#1877F2" />
                </View>
                <Text className="text-gray-900 text-base font-medium ml-4">
                  Continue With Facebook
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;