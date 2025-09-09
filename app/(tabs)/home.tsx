// Home.tsx
import React, { useState, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  topSellingSlides,
  offers,
  shopProducts,
  categoryList,
  images,
  type Product,
  type Category,
} from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import cn from 'clsx';

const { width: screenWidth } = Dimensions.get('window');
const CARD_WIDTH = (screenWidth - 48) / 2 - 8;

interface HomeProps {
  navigation?: any;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return shopProducts;
    return shopProducts.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
  }, []);

  const handleCategoryPress = useCallback((filterKey: string) => {
    setSelectedCategory(filterKey);
  }, []);

  const handleProductPress = useCallback((product: Product) => {
    console.log('Product pressed:', product.title);
  }, []);

  const handleSeeAllPress = useCallback((section: string) => {
    console.log('See All pressed for:', section);
  }, []);

  // Renders
  const renderCategory = useCallback(
    ({ item }: { item: Category }) => (
      <TouchableOpacity
        className="items-center mr-6"
        onPress={() => handleCategoryPress(item.filterKey)}
        activeOpacity={0.7}
      >
        <View className="w-16 h-16 bg-gray-100 rounded-2xl items-center justify-center mb-2">
          <Image
            source={item.image}
            style={{
              width: '70%',
              height: '70%',
              aspectRatio: 1,
              resizeMode: 'contain',
            }}
          />
        </View>
        <Text className="text-xs text-gray-700 font-medium text-center">
          {item.title}
        </Text>
      </TouchableOpacity>
    ),
    [handleCategoryPress]
  );

  const renderTopSelling = useCallback(
    ({ item }: { item: Product }) => (
      <TouchableOpacity
        className="mr-4 bg-white rounded-2xl shadow-sm"
        style={{ width: CARD_WIDTH }}
        onPress={() => handleProductPress(item)}
        activeOpacity={0.8}
      >
        <View className="p-3">
          <TouchableOpacity className="absolute top-3 right-3 z-10">
            <Ionicons name="heart-outline" size={20} color="#9CA3AF" />
          </TouchableOpacity>

          <View className="h-28 items-center justify-center mb-3">
            <Image
              source={item.image}
              style={{
                width: '90%',
                height: '90%',
                aspectRatio: 1,
                resizeMode: 'contain',
              }}
            />
          </View>

          <Text className="text-sm font-semibold text-gray-900 mb-1" numberOfLines={2}>
            {item.title}
          </Text>
          <Text className="text-lg font-bold text-purple-600">${item.price}</Text>
        </View>
      </TouchableOpacity>
    ),
    [handleProductPress]
  );

//   const renderOffer = useCallback(
//     ({ item }: { item: any }) => (
//       <TouchableOpacity
//         className="mr-4 rounded-2xl overflow-hidden"
//         style={{ width: screenWidth * 0.8 }}
//         activeOpacity={0.9}
//       >
//         <View
//           className="h-40 justify-center items-center px-6"
//           style={{ backgroundColor: item.color }}
//         >
//           <Text className="text-white text-2xl font-bold text-center mb-2">
//             {item.title}
//           </Text>
//           <View className="absolute right-4 bottom-4">
//             <Image
//               source={item.image}
//               style={{
//                 width: '80%',
//                 height: '80%',
//                 aspectRatio: 1,
//                 resizeMode: 'contain',
//               }}
//             />
//           </View>
//         </View>
//       </TouchableOpacity>
//     ),
//     []
//   );

const renderOffer = useCallback(
  ({ item, index }: { item: any; index: number }) => {
    const isEven = index % 2 === 0;

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        className={cn(
          "flex-row rounded-2xl overflow-hidden my-3",
          isEven ? "flex-row-reverse" : "flex-row"
        )}
        style={{
          backgroundColor: item.color,
          height: 160,
          width: screenWidth * 0.9,
          marginHorizontal: 8,
        }}
      >
        {/* Image side */}
        <View className="h-full w-2/5 items-center justify-center">
          <Image
            source={item.image}
            style={{
              width: "90%",
              height: "90%",
              aspectRatio: 1,
              resizeMode: "contain",
            }}
          />
        </View>

        {/* Info side */}
        <View
          className={cn(
            "flex-1 justify-center px-5",
            isEven ? "items-start" : "items-end"
          )}
        >
          <Text className="text-2xl font-bold text-white leading-snug">
            {item.title}
          </Text>
          <Image
            source={images.arrowRight}
            style={{
              width: 48,
              height: 48,
              marginTop: 8,
              tintColor: "#fff",
            }}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    );
  },
  []
);

  const renderDealProduct = useCallback(
    ({ item }: { item: Product }) => (
      <TouchableOpacity
        className="bg-white rounded-2xl shadow-sm mb-4"
        style={{ width: CARD_WIDTH }}
        onPress={() => handleProductPress(item)}
        activeOpacity={0.8}
      >
        <View className="p-3">
          <TouchableOpacity className="absolute top-3 right-3 z-10">
            <Ionicons name="heart-outline" size={18} color="#9CA3AF" />
          </TouchableOpacity>

          <View className="h-24 items-center justify-center mb-2">
            <Image
              source={item.image}
              style={{
                width: '85%',
                height: '85%',
                aspectRatio: 1,
                resizeMode: 'contain',
              }}
            />
          </View>

          <Text className="text-xs font-medium text-gray-900 mb-1" numberOfLines={2}>
            {item.title}
          </Text>
          <Text className="text-sm font-bold text-purple-600">${item.price}</Text>
        </View>
      </TouchableOpacity>
    ),
    [handleProductPress]
  );

  const keyExtractors = {
    category: (item: Category) => item.id,
    topSelling: (item: Product) => item.id,
    offer: (item: any) => item.id,
    deal: (item: Product) => item.id,
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />

      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4 bg-white">
        <TouchableOpacity className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center">
            <Image
                source={images.avatar}
                style={{
                width: "100%",      // fills the container
                height: "100%",     // matches parent size
                borderRadius: 9999, // makes it round
                resizeMode: "cover" // keeps proportions while filling
                }}
            />
            </TouchableOpacity>


        <View className="flex-1 mx-4">
          <Text className="text-xs text-gray-500">Hey 👋</Text>
          <Text className="text-sm font-semibold text-gray-900">John Doe</Text>
        </View>

        <TouchableOpacity className="w-10 h-10 bg-purple-500 rounded-full items-center justify-center">
          <Ionicons name="notifications" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Search Bar */}
        <View className="px-6 py-4 bg-white">
          <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-3">
            <Ionicons name="search" size={20} color="#9CA3AF" />
            <TextInput
              className="flex-1 ml-3 text-base text-gray-900"
              placeholder="Search"
              placeholderTextColor="#9CA3AF"
              value={searchQuery}
              onChangeText={handleSearch}
            />
          </View>
        </View>

        {/* Categories */}
        <View className="bg-white pb-6">
          <View className="flex-row items-center justify-between px-6 mb-4">
            <Text className="text-lg font-bold text-gray-900">Categories</Text>
            <TouchableOpacity onPress={() => handleSeeAllPress('categories')}>
              <Text className="text-sm text-purple-500 font-medium">See All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={categoryList}
            renderItem={renderCategory}
            keyExtractor={keyExtractors.category}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24 }}
          />
        </View>

        {/* Top Selling */}
        <View className="mt-4">
          <View className="flex-row items-center justify-between px-6 mb-4">
            <Text className="text-lg font-bold text-gray-900">Top Selling</Text>
            <TouchableOpacity onPress={() => handleSeeAllPress('topSelling')}>
              <Text className="text-sm text-purple-500 font-medium">See All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={topSellingSlides}
            renderItem={renderTopSelling}
            keyExtractor={keyExtractors.topSelling}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24 }}
          />
        </View>

        {/* Special Offers */}
        <View className="mt-6">
          <FlatList
            data={offers}
            renderItem={renderOffer}
            keyExtractor={keyExtractors.offer}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            snapToInterval={screenWidth * 0.8 + 16}
            decelerationRate="fast"
          />
        </View>

        {/* Deal Fit */}
        <View className="mt-6 pb-20">
          <View className="flex-row items-center justify-between px-6 mb-4">
            <Text className="text-lg font-bold text-gray-900">Deal Fit</Text>
            <TouchableOpacity onPress={() => handleSeeAllPress('deals')}>
              <Text className="text-sm text-purple-500 font-medium">See All</Text>
            </TouchableOpacity>
          </View>

          <View className="px-6">
            <FlatList
              data={filteredProducts.slice(0, 6)}
              renderItem={renderDealProduct}
              keyExtractor={keyExtractors.deal}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              scrollEnabled={false}
            />
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-100 flex-row items-center justify-around">
        <TouchableOpacity className="items-center">
          <Ionicons name="home" size={24} color="#8B5CF6" />
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="search" size={24} color="#9CA3AF" />
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="bag-outline" size={24} color="#9CA3AF" />
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="person-outline" size={24} color="#9CA3AF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
