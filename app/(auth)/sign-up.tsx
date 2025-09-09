// SignUp.tsx
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

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleBack = () => {
    console.log('Navigate back');
    // Navigate back to previous screen
  };

  const handleContinue = () => {
    // Validate form
    if (!formData.firstName.trim()) {
      Alert.alert('Error', 'Please enter your first name');
      return;
    }
    
    if (!formData.lastName.trim()) {
      Alert.alert('Error', 'Please enter your last name');
      return;
    }

    if (!formData.email.trim()) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    if (!formData.password.trim()) {
      Alert.alert('Error', 'Please enter a password');
      return;
    }

    if (formData.password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return;
    }

    console.log('Create account with:', formData);
    // Handle account creation
  };

  const handleForgotPassword = () => {
    console.log('Navigate to forgot password');
    // Navigate to forgot password screen
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
          <View className="flex-1 px-6 pt-12">
            {/* Back Button */}
            <TouchableOpacity
              className="self-start mb-6 p-2 -ml-2"
              onPress={handleBack}
              activeOpacity={0.7}
            >
              <Ionicons name="chevron-back" size={28} color="#333" />
            </TouchableOpacity>

            {/* Header */}
            <View className="mb-10">
              <Text className="text-3xl font-bold text-gray-900">
                Create Account
              </Text>
            </View>

            {/* Form */}
            <View className="mb-8">
              <TextInput
                className="bg-gray-100 rounded-2xl px-5 py-5 text-base text-gray-900 mb-4"
                placeholder="Firstname"
                placeholderTextColor="#9CA3AF"
                value={formData.firstName}
                onChangeText={(text) => updateFormData('firstName', text)}
                autoCapitalize="words"
                textContentType="givenName"
              />

              <TextInput
                className="bg-gray-100 rounded-2xl px-5 py-5 text-base text-gray-900 mb-4"
                placeholder="Lastname"
                placeholderTextColor="#9CA3AF"
                value={formData.lastName}
                onChangeText={(text) => updateFormData('lastName', text)}
                autoCapitalize="words"
                textContentType="familyName"
              />

              <TextInput
                className="bg-gray-100 rounded-2xl px-5 py-5 text-base text-gray-900 mb-4"
                placeholder="Email Address"
                placeholderTextColor="#9CA3AF"
                value={formData.email}
                onChangeText={(text) => updateFormData('email', text)}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                textContentType="emailAddress"
              />

              <TextInput
                className="bg-gray-100 rounded-2xl px-5 py-5 text-base text-gray-900 mb-6"
                placeholder="Password"
                placeholderTextColor="#9CA3AF"
                value={formData.password}
                onChangeText={(text) => updateFormData('password', text)}
                secureTextEntry
                textContentType="newPassword"
                autoComplete="password-new"
              />

              <TouchableOpacity
                className="bg-purple-500 rounded-2xl py-5 items-center mb-6 active:bg-purple-600"
                onPress={handleContinue}
                activeOpacity={0.8}
              >
                <Text className="text-white text-base font-semibold">
                  Continue
                </Text>
              </TouchableOpacity>

            <TouchableOpacity
                className="items-center justify-center flex-row mt-6"
                
                activeOpacity={0.7}
              >
                <Text className="text-black text-sm font-medium">
                   Already have an Account?
                </Text>
                <Text onPress={()=> router.push("/sign-in")} className="text-purple-500 text-sm font-medium">
                   { } Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;