// src/components/item/DescriptionContent.tsx
import React from "react";
import { View, Text } from "react-native";

interface Props {
  text: string;
}

const DescriptionContent: React.FC<Props> = ({ text }) => {
  return (
    <View className="space-y-4">
      {/* Product Description */}
      <View>
        <Text className="text-lg font-nunito-bold text-gray-900 mb-1">
          Product Description
        </Text>
        <Text className=" font-nunito-semibold text-gray-600 leading-6">{text}</Text>
      </View>

      {/* Return Policy */}
      <View>
        <Text className=" font-nunito-bold text-lg  text-gray-900 mb-1">
          Return Policy
        </Text>
        <Text className="font-nunito-semibold text-gray-600 leading-6">
          You can return the product within{" "}
          <Text className="font-nunito-bold font-semibold text-gray-800">7 days</Text> of
          delivery if it is unused and in original packaging. Refunds are issued
          to the original payment method.
        </Text>
      </View>

      {/* Warranty */}
      <View>
        <Text className="font-nunito-bold text-lg  text-gray-900 mb-1">
          Warranty
        </Text>
        <Text className= "font-nunito-semibold text-gray-600 leading-6">
          This console comes with a{" "}
          <Text className="font-nunito-bold text-gray-800">3-month warranty</Text>{" "}
          covering hardware defects. Accidental damage is not included.
        </Text>
      </View>
    </View>
  );
};

export default React.memo(DescriptionContent);
