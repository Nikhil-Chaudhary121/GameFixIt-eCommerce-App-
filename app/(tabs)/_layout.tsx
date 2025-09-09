import React from "react";
import { View, TouchableOpacity, Platform, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Slot, router, usePathname } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const _layout = () => {
  const pathname = usePathname();

  const getIconColor = (tab: string) => {
    return pathname === tab ? "#8B5CF6" : "#9CA3AF";
  };

  // Screens where the bottom tab should be hidden
  const hideTabs = ["/order-success", "/checkout", "/login"];
  const shouldShowTabs = !hideTabs.includes(pathname);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {/* Page Content */}
      <Slot />

      {/* Bottom Navigation */}
      {shouldShowTabs && (
        <View className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-100 flex-row items-center justify-around">
          <TouchableOpacity className="items-center" onPress={() => router.push("/home")}>
            <Ionicons name="home-outline" size={26} color={getIconColor("/home")} />
          </TouchableOpacity>

          <TouchableOpacity className="items-center" onPress={() => router.push("/cart")}>
            <Ionicons name="cart-outline" size={26} color={getIconColor("/cart")} />
          </TouchableOpacity>

          <TouchableOpacity className="items-center" onPress={() => router.push("/orders")}>
            <Ionicons name="bag-outline" size={26} color={getIconColor("/orders")} />
          </TouchableOpacity>

          <TouchableOpacity className="items-center" onPress={() => router.push("/profile")}>
            <Ionicons name="person-outline" size={26} color={getIconColor("/profile")} />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default _layout;
