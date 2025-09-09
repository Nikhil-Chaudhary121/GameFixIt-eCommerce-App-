// app/cart.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import { cartItems as cartData } from "../../constants/index";

const Cart = () => {
  const [cartItems, setCartItems] = useState(cartData);
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const updateQuantity = (id: string, action: "increase" | "decrease") => {
    setCartItems((prev: any) =>
      prev.map((item: any) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increase"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev: any) => prev.filter((item: any) => item.id !== id));
  };

  const removeAll = () => setCartItems([]);

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save20") {
      setIsPromoApplied(true);
    }
  };

  const subtotal = cartItems.reduce(
    (sum: any, item: any) => sum + item.price * item.quantity,
    0
  );
  const shippingCost = subtotal > 100 ? 0 : 8.99;
  const discount = isPromoApplied ? subtotal * 0.1 : 0;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal + shippingCost + tax - discount;

  const renderItem = ({ item }: any) => (
  <View className="bg-white p-4 mb-3 rounded-2xl shadow-sm">
    <View className="flex-row gap-4 items-center">
      {/* Product Image */}
      <View className="w-20 h-20 bg-gray-100 rounded-xl items-center justify-center overflow-hidden">
        <Image
          source={item.image}
          style={{ width: "80%", height: "80%" }}
          resizeMode="contain"
        />
      </View>

      {/* Details */}
      <View className="flex-1">
        <Text className="font-semibold text-base text-gray-900">
          {item.title}
        </Text>
        {item.variant && (
          <Text className="text-sm text-gray-600">Variant: {item.variant}</Text>
        )}
        {item.color && (
          <Text className="text-sm text-gray-600">Color: {item.color}</Text>
        )}
        <Text className="text-purple-600 font-bold mt-1">
          ${item.price.toFixed(2)}
        </Text>
      </View>

      {/* Remove Button */}
      <TouchableOpacity onPress={() => removeItem(item.id)}>
        <Feather name="trash-2" size={20} color="gray" />
      </TouchableOpacity>
    </View>

    {/* Quantity & Item Total */}
    <View className="flex-row justify-between items-center mt-3">
      <View className="flex-row items-center gap-3">
        <TouchableOpacity
          onPress={() => updateQuantity(item.id, "decrease")}
          disabled={item.quantity <= 1}
          className="w-8 h-8 rounded-full bg-purple-100 items-center justify-center"
        >
          <AntDesign name="minus" size={16} color="#7C3AED" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold">{item.quantity}</Text>
        <TouchableOpacity
          onPress={() => updateQuantity(item.id, "increase")}
          className="w-8 h-8 rounded-full bg-purple-100 items-center justify-center"
        >
          <AntDesign name="plus" size={16} color="#7C3AED" />
        </TouchableOpacity>
      </View>
      <Text className="text-lg font-bold text-gray-900">
        ${(item.price * item.quantity).toFixed(2)}
      </Text>
    </View>
  </View>
);


  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-4 py-3 flex-row justify-between items-center shadow-sm">
        <Ionicons name="chevron-back" size={24} color="black" />
        <Text className="text-lg font-semibold text-gray-900">Cart</Text>
        <TouchableOpacity onPress={removeAll}>
          <Text className="text-red-500 font-medium">Remove All</Text>
        </TouchableOpacity>
      </View>

      {/* Cart List */}
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {cartItems.length > 0 ? (
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        ) : (
          <View className="items-center justify-center py-20">
            <Feather name="shopping-bag" size={60} color="gray" />
            <Text className="text-lg font-semibold text-gray-800 mt-4">
              Your cart is empty
            </Text>
            <Text className="text-gray-500 mt-1">
              Add some items to get started
            </Text>
          </View>
        )}

        {/* Promo Code */}
        {cartItems.length > 0 && (
          <View className="bg-white mx-4 mt-4 rounded-2xl p-4">
            <View className="flex-row items-center gap-3">
              <Feather name="tag" size={20} color="gray" />
              <TextInput
                placeholder="Enter coupon code"
                value={promoCode}
                onChangeText={setPromoCode}
                className="flex-1 py-2 px-3 border border-gray-200 rounded-lg"
              />
              <TouchableOpacity
                onPress={applyPromoCode}
                className="bg-purple-600 px-4 py-2 rounded-lg"
              >
                <Text className="text-white font-semibold">Apply</Text>
              </TouchableOpacity>
            </View>
            {isPromoApplied && (
              <View className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <Text className="text-green-700 text-sm">
                  ✓ Coupon applied! 10% discount added.
                </Text>
              </View>
            )}
          </View>
        )}

        {/* Order Summary */}
        {cartItems.length > 0 && (
          <View className="bg-white mx-4 mt-4 rounded-2xl p-4">
            <Text className="text-lg font-semibold mb-3">Order Summary</Text>
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Subtotal</Text>
              <Text className="font-semibold">${subtotal.toFixed(2)}</Text>
            </View>
            <View className="flex-row justify-between mt-2">
              <Text className="text-gray-600">Shipping</Text>
              <Text className="font-semibold">
                {shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}
              </Text>
            </View>
            <View className="flex-row justify-between mt-2">
              <Text className="text-gray-600">Tax</Text>
              <Text className="font-semibold">${tax.toFixed(2)}</Text>
            </View>
            {isPromoApplied && (
              <View className="flex-row justify-between mt-2">
                <Text className="text-green-600">Discount (10%)</Text>
                <Text className="font-semibold text-green-600">
                  -${discount.toFixed(2)}
                </Text>
              </View>
            )}
            <View className="border-t border-gray-200 mt-3 pt-3 flex-row justify-between">
              <Text className="text-lg font-semibold">Total</Text>
              <Text className="text-xl font-bold text-purple-600">
                ${total.toFixed(2)}
              </Text>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Checkout Button */}
      {cartItems.length > 0 && (
        <View className="bg-white border-t border-gray-200 p-4">
          <TouchableOpacity className="bg-purple-600 py-4 rounded-xl items-center">
            <Text className="text-white font-semibold text-lg">Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Cart;
