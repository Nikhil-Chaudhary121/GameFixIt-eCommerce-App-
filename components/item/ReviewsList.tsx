// src/components/item/ReviewsList.tsx
import React from "react";
import { FlatList } from "react-native";
import { Review } from "../../constants/item";
import ReviewItem from "./ReviewItem";

interface Props {
  reviews: Review[];
}

const ReviewsList: React.FC<Props> = ({ reviews }) => {
  return (
    <FlatList
      data={reviews}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ReviewItem review={item} />}
      scrollEnabled={false}
    />
  );
};

export default React.memo(ReviewsList);
