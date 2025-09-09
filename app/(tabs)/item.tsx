import React, { useState, useCallback, memo } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { reviews, products } from "../../constants/index";

const Item = () => {
  const itemData = products[0]; // later, pass via navigation route param

  const [selectedVariant, setSelectedVariant] = useState(itemData.variants?.[0]);
  const [selectedColor, setSelectedColor] = useState("White");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleQuantityChange = useCallback(
    (action: "increase" | "decrease") => {
      setQuantity((prev) =>
        action === "increase" ? prev + 1 : Math.max(1, prev - 1)
      );
    },
    []
  );

  const handleAddToCart = useCallback(() => {
    const cartItem = {
      id: itemData.id,
      title: itemData.title,
      image: itemData.image,
      variant: selectedVariant?.name,
      color: selectedColor,
      quantity,
      price: selectedVariant?.price,
    };
    console.log("Adding to cart:", cartItem);
  }, [itemData, selectedVariant, selectedColor, quantity]);

  const renderStars = useCallback((rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Ionicons
        key={index}
        name={index < Math.floor(rating) ? "star" : "star-outline"}
        size={16}
        color={index < Math.floor(rating) ? "#facc15" : "#d1d5db"}
        style={{ marginRight: 2 }}
      />
    ));
  }, []);

  /** ----- Variant Item ----- */
  const VariantItem = memo(({ variant }: { variant: any }) => (
    <TouchableOpacity
      onPress={() => setSelectedVariant(variant)}
      className={`px-4 py-2 rounded-lg border-2 mr-2 ${
        selectedVariant?.id === variant.id
          ? "border-purple-500 bg-purple-50"
          : "border-gray-200 bg-white"
      }`}
    >
      <Text
        className={
          selectedVariant?.id === variant.id
            ? "text-purple-600 font-semibold"
            : "text-gray-700"
        }
      >
        {variant.name}
      </Text>
    </TouchableOpacity>
  ));

  /** ----- Color Item ----- */
  const ColorItem = memo(({ color }: { color: string }) => (
    <TouchableOpacity
      onPress={() => setSelectedColor(color)}
      className={`px-4 py-2 rounded-lg border-2 mr-2 ${
        selectedColor === color
          ? "border-purple-500 bg-purple-50"
          : "border-gray-200 bg-white"
      }`}
    >
      <Text
        className={
          selectedColor === color
            ? "text-purple-600 font-semibold"
            : "text-gray-700"
        }
      >
        {color}
      </Text>
    </TouchableOpacity>
  ));

  /** ----- Review Item ----- */
  const ReviewItem = memo(({ item }: { item: any }) => (
    <View className="flex-row items-start mb-4 border-b border-gray-100 pb-4">
      <Image
        source={item.avatar}
        style={{ width: 40, height: 40, borderRadius: 20 }}
      />
      <View className="ml-3 flex-1">
        <View className="flex-row justify-between items-center mb-1">
          <Text className="font-semibold text-gray-900">{item.user}</Text>
          <Text className="text-xs text-gray-500">{item.date}</Text>
        </View>
        <View className="flex-row mb-1">{renderStars(item.rating)}</View>
        <Text className="text-gray-600 text-sm">{item.comment}</Text>
      </View>
    </View>
  ));

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-4 py-3 flex-row items-center justify-between shadow">
        <Ionicons name="chevron-back" size={24} color="#374151" />
        <Text className="text-lg font-semibold text-gray-900">
          Product Details
        </Text>
        <TouchableOpacity onPress={() => setIsWishlisted(!isWishlisted)}>
          <Ionicons
            name={isWishlisted ? "heart" : "heart-outline"}
            size={24}
            color={isWishlisted ? "red" : "#374151"}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Product Image */}
        <View className="bg-white m-4 rounded-2xl overflow-hidden">
          <Image
            source={itemData.image}
            style={{ width: "100%", height: 250, resizeMode: "contain" }}
          />
        </View>

        {/* Product Info */}
        <View className="bg-white mx-4 mt-4 rounded-2xl p-6">
          <Text className="text-2xl font-bold text-gray-900 mb-2">
            {itemData.title}
          </Text>

          <View className="flex-row items-center mb-4">
            <View className="flex-row mr-3">{renderStars(4.5)}</View>
            <Text className="text-sm text-gray-600">4.5 (128 reviews)</Text>
          </View>

          <Text className="text-3xl font-bold text-purple-600 mb-4">
            ${selectedVariant?.price}
          </Text>

          {/* Variants */}
          <View className="mb-6">
            <Text className="text-lg font-semibold mb-3">Size</Text>
            <FlatList
              data={itemData.variants}
              keyExtractor={(variant) => variant.id.toString()}
              renderItem={({ item }) => <VariantItem variant={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* Colors */}
          <View className="mb-6">
            <Text className="text-lg font-semibold mb-3">Color</Text>
            <FlatList
              data={["White", "Black"]}
              keyExtractor={(color) => color}
              renderItem={({ item }) => <ColorItem color={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* Quantity */}
          <View className="mb-6">
            <Text className="text-lg font-semibold mb-3">Quantity</Text>
            <View className="flex-row items-center space-x-4">
              <TouchableOpacity
                onPress={() => handleQuantityChange("decrease")}
                disabled={quantity <= 1}
                className="w-10 h-10 rounded-full bg-purple-100 items-center justify-center"
              >
                <MaterialCommunityIcons name="minus" size={20} color="#7c3aed" />
              </TouchableOpacity>

              <Text className="text-xl font-semibold">{quantity}</Text>

              <TouchableOpacity
                onPress={() => handleQuantityChange("increase")}
                className="w-10 h-10 rounded-full bg-purple-100 items-center justify-center"
              >
                <MaterialCommunityIcons name="plus" size={20} color="#7c3aed" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Description */}
          <Text className="text-gray-600 leading-relaxed mb-4">
            {itemData.description}
          </Text>
        </View>

        {/* Reviews */}
        <View className="bg-white mx-4 mt-4 rounded-2xl p-6">
          <Text className="text-lg font-semibold mb-4">Reviews</Text>
          <FlatList
            data={reviews}
            keyExtractor={(review) => review.id.toString()}
            renderItem={({ item }) => <ReviewItem item={item} />}
            scrollEnabled={false} // disable inner scroll
          />
        </View>
      </ScrollView>

      {/* Floating Add to Cart */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex-row items-center">
        <View className="flex-1">
          <Text className="text-sm text-gray-600">Total Price</Text>
          <Text className="text-xl font-bold text-gray-900">
            ${(selectedVariant?.price || 0) * quantity}
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleAddToCart}
          className="flex-1 bg-purple-600 rounded-xl py-3 items-center"
        >
          <Text className="text-white font-semibold text-lg">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Item;
