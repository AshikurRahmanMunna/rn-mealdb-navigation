import React, { useLayoutEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import {
  CustomStackNavigationProp,
  CustomStackRouteProp,
} from "../types/navigation";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
interface IMealDetailScreen {
  route: CustomStackRouteProp<"MealDetail">;
  navigation: CustomStackNavigationProp<"MealDetail">;
}
const MealDetailScreen = ({ navigation, route }: IMealDetailScreen) => {
  const { mealId } = route.params;
  const meal = MEALS.find((m) => m.id === mealId);
  useLayoutEffect(() => {
    navigation.setOptions({ title: meal?.title });
  }, [meal]);
  return (
    <View>
      <Image source={{ uri: meal?.imageUrl }} />
      <Text>{meal?.title}</Text>
      {meal && (
        <MealDetails
          affordablity={meal?.affordablity}
          complexity={meal?.complexity}
          duration={meal?.duration}
        />
      )}
      <Text>Ingredients</Text>
      {meal?.ingredients.map((ingredient, i) => (
        <Text key={i}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {meal?.steps.map((step, i) => (
        <Text key={i}>{step}</Text>
      ))}
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
});
