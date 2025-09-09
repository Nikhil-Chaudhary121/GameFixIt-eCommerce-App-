
import React, { useState, useCallback } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Product, Review } from "../../constants/item";
import { images } from "../../constants";
import ItemHeader from "../../components/item/ItemHeader";
import ItemImageCarousel from "../../components/item/ItemImageCarousel";
import ColorSelector from "../../components/item/ColorSelector";
import SizeSelector from "../../components/item/SizeSelector";
import TabSelector from "../../components/item/TabSelector";
import DescriptionContent from "../../components/item/DescriptionContent";
import ReviewsList from "../../components/item/ReviewsList";
import BottomActions from "../../components/item/BottomActions";

const sampleProduct: Product = {
  id: 1,
  title: "Ps4 Pro Pre Owned Console",
  price: 148,
  image: images.ps4Pro,
  variants: [
    { name: "500 GB", price: 148 },
    { name: "1TB", price: 198 },
  ],
  des :  `
    The PlayStation 5 Pro delivers the next level of performance for gamers who want the ultimate console experience. 
    With upgraded GPU and CPU power, enjoy smoother frame rates, faster load times, and stunning 8K gaming support. 

    Features:
    • Up to 3x more GPU performance compared to PS5  
    • Enhanced ray tracing for lifelike lighting and shadows  
    • Ultra-fast 1TB / 2TB SSD for near-instant loading  
    • 8K resolution support and 4K at higher frame rates  
    • Backward compatible with PS5 & PS4 games  
    • Integrated Tempest 3D AudioTech for immersive sound  
    • Redesigned cooling for quieter gameplay sessions  

    Perfect for gamers who demand cutting-edge visuals, 
    next-gen speed, and the most immersive PlayStation experience yet.
  `,
};  

const sampleReviews: Review[] = [
  {
    id: 1,
    user: "John Doe",
    rating: 5,
    comment: "Best Console ever",
    date: "2 days ago",
    avatar: images.userAvatar,
  },
  {
    id: 2,
    user: "Jane Smith",
    rating: 4,
    comment: "Good product, fast delivery. Will order again.",
    date: "1 week ago",
    avatar: images.userAvatar,
  },
];

const ItemPage = ({ navigation }: any) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("  ");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState<"Description" | "Reviews">("Description");

  const handleBuyNow = useCallback(() => {
    console.log("Buy Now pressed");
  }, []);

  const productImages = [images.ps4Pro, images.ps4Pro, images.ps4Pro];

  return (
    // <SafeAreaView className="flex-1 bg-white">
    //   <ItemHeader
    //     navigation={navigation}
    //     isWishlisted={isWishlisted}
    //     toggleWishlist={() => setIsWishlisted(!isWishlisted)}
    //   />

    //   <ScrollView
    //     className="flex-1"
    //     contentContainerStyle={{ paddingBottom: 100 }}
    //     showsVerticalScrollIndicator={false}
    //   >
    //     <ItemImageCarousel
    //       images={productImages}
    //       selectedIndex={selectedColor}
    //       onSelect={setSelectedColor}
    //     />

    //     <View className="px-4">
    //       <ColorSelector
    //         images={productImages}
    //         selected={selectedColor}
    //         onSelect={setSelectedColor}
    //       />

    //       <SizeSelector selected={selectedSize} onSelect={setSelectedSize} />

    //       <View className="flex-row items-center justify-between mb-6">
    //         <Text className="font-nunito-bold text-2xl font-bold text-gray-900 flex-1">
    //           {sampleProduct.title}
    //         </Text>
    //         <Text className=" font-nunito-bold text-2xl font-bold text-purple-600">
    //           ${sampleProduct.price}
    //         </Text>
    //       </View>

    //       <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />

    //       <View className="mb-6">
    //         {activeTab === "Description" ? (
    //           <DescriptionContent text={sampleProduct.des} />
    //         ) : (
    //           <ReviewsList reviews={sampleReviews} />
    //         )}
    //       </View>
    //     </View>
    //   </ScrollView>

    //   <BottomActions onBuyNow={handleBuyNow} />
    // </SafeAreaView>
  <SafeAreaView className="flex-1 bg-white">
  <ItemHeader
    navigation={navigation}
    isWishlisted={isWishlisted}
    toggleWishlist={() => setIsWishlisted(!isWishlisted)}
  />

  <ScrollView
    className="flex-1"
    contentContainerStyle={{ paddingBottom: 180 }} // extra space for BottomActions + tab
    showsVerticalScrollIndicator={false}
  >
    <ItemImageCarousel
      images={productImages}
      selectedIndex={selectedColor}
      onSelect={setSelectedColor}
    />

    <View className="px-4">
      <ColorSelector images={productImages} selected={selectedColor} onSelect={setSelectedColor} />
      <SizeSelector selected={selectedSize} onSelect={setSelectedSize} />

      <View className="flex-row items-center justify-between mb-6">
        <Text className="font-nunito-bold text-2xl text-gray-900 flex-1">{sampleProduct.title}</Text>
        <Text className="font-nunito-bold text-2xl text-purple-600">${sampleProduct.price}</Text>
      </View>

      <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />

      <View className="mb-6">
        {activeTab === "Description" ? (
          <DescriptionContent text={sampleProduct.des} />
        ) : (
          <ReviewsList reviews={sampleReviews} />
        )}
      </View>
    </View>
  </ScrollView>

  {/* Make BottomActions absolutely positioned */}
  <View style={{ position: "absolute", bottom: 80, left: 0, right: 0 }}>
    <BottomActions onBuyNow={handleBuyNow} />
  </View>
</SafeAreaView>
  );
};

export default ItemPage;
