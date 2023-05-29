import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CustomStackRouteProp } from "../types/navigation";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import MealItem from "../components/MealItem";
interface IRoute {
  route: CustomStackRouteProp<"MealsOverview">;
}
const MealsOverviewScreen = ({ route }: IRoute) => {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );
  const renderMealItem = ({ item }: { item: Meal }) => {
    return <MealItem meal={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
