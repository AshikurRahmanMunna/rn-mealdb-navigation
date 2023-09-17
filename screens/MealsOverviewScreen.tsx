import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import {
  CustomStackNavigationProp,
  CustomStackRouteProp,
} from "../types/navigation";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";
interface IMealsOverviewScreen {
  route: CustomStackRouteProp<"MealsOverview">;
  navigation: CustomStackNavigationProp<"MealsOverview">;
}
const MealsOverviewScreen = ({ route, navigation }: IMealsOverviewScreen) => {
  const { categoryId } = route.params;
  useLayoutEffect(() => {
    const category = CATEGORIES.find((category) => category.id === categoryId);
    navigation.setOptions({ title: category?.title });
  }, [categoryId, navigation]);
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );
  return (
    <View style={styles.container}>
      <MealsList meals={displayedMeals} />
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
