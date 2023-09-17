import React from "react";
import { FlatList, View } from "react-native";
import { MEALS } from "../../data/dummy-data";
import Meal from "../../models/meal";
import MealItem from "./MealItem";

interface IMealsList {
  meals: Meal[];
}
const MealsList = ({ meals }: IMealsList) => {
  const renderMealItem = ({ item }: { item: Meal }) => {
    return <MealItem meal={item} />;
  };
  return (
    <FlatList
      data={meals}
      renderItem={renderMealItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MealsList;
