import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { CustomStackNavigationProp } from "../types/navigation";

const CategoriesScreen = ({
  navigation,
}: {
  navigation: CustomStackNavigationProp<"MealsCategories">;
}) => {
  const pressHandler = () => {
    navigation.navigate("MealsOverview");
  };
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={({ item }) => (
        <CategoryGridTile
          onPress={pressHandler}
          title={item.title}
          color={item.color}
        />
      )}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
};

export default CategoriesScreen;
