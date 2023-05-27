import React from "react";
import { View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = () => {
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={({ item }) => (
        <CategoryGridTile title={item.title} color={item.color} />
      )}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
};

export default CategoriesScreen;
