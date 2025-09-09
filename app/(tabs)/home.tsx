
import React, { useState, useMemo, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, FlatList, StatusBar, Dimensions } from "react-native";
import { Header } from "../../components/hCompo/Header";
import { SearchBar } from "../../components/hCompo/SearchBar";
import { CategoryCard } from "../../components/hCompo/CategoryCard";
import { ProductCard } from "../../components/hCompo/ProductCard";
import { OfferCard } from "../../components/hCompo/OfferCard";
import { SectionHeader } from "../../components/hCompo/SectionHeader";
import {
  categoryList,
  topSellingSlides,
  offers,
  shopProducts,
  type Product,
  type Category,
} from "../../constants";

const { width: screenWidth } = Dimensions.get("window");

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return shopProducts;
    return shopProducts.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleProductPress = useCallback((product: Product) => {
    console.log("Product pressed:", product.title);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#F7F9F8]">
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
      <Header />

      <ScrollView showsVerticalScrollIndicator={false} className=" bg-[#fff] flex-1">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {/* Categories */}
        <SectionHeader title="Categories" onPress={() => console.log("See all categories")} />
        <FlatList
          data={categoryList}
          renderItem={({ item }) => (
            <CategoryCard item={item} onPress={() => setSelectedCategory(item.filterKey)} />
          )}
          keyExtractor={(item: Category) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24 , marginVertical : 12 }}
        />

        {/* Top Selling */}
        <SectionHeader title="Top Selling" onPress={() => console.log("See all top selling")} />
        <FlatList
          data={topSellingSlides}
          renderItem={({ item }) => <ProductCard item={item} onPress={()=>{handleProductPress(item)}} />}
          keyExtractor={(item: Product) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24  , gap : 20}}
        />

        {/* Offers */}
        <FlatList
          data={offers}
          renderItem={({ item, index }) => <OfferCard item={item} index={index} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={screenWidth * 0.9 + 16}
          decelerationRate="fast"
          contentContainerStyle={{ paddingHorizontal: 24 }}

        />

        {/* Deals */}
        <SectionHeader title="Deal Fit" onPress={() => console.log("See all deals")} />
        <FlatList
        className=""
          data={filteredProducts.slice(0, 6)}
          renderItem={({ item }) => (
            <ProductCard item={item} onPress={()=>{handleProductPress(item)}} compact />
          )}
          keyExtractor={(item: Product) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-around" }}
          contentContainerStyle={{ paddingHorizontal: 24, marginBottom : 80 }}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Home);
