import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { CustomStackNavigationProp } from "../types/navigation";
import Category from "../models/category";

const CategoriesScreen = ({
  navigation,
}: {
  navigation: CustomStackNavigationProp<"MealsCategories">;
}) => {
  const pressHandler = (item: Category) => {
    navigation.navigate("MealsOverview", {
      categoryId: item.id,
    });
  };
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={({ item }) => (
        <CategoryGridTile
          navigation={navigation}
          onPress={() => pressHandler(item)}
          title={item.title}
          color={item.color}
        />
      )}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
};

export default CategoriesScreen;
