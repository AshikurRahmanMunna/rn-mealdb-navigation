import React, { useLayoutEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import {
  CustomStackNavigationProp,
  CustomStackRouteProp,
} from "../types/navigation";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
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
      <Image style={styles.image} source={{ uri: meal?.imageUrl }} />
      <Text style={styles.title}>{meal?.title}</Text>
      {meal && (
        <MealDetails
          affordablity={meal?.affordablity}
          complexity={meal?.complexity}
          duration={meal?.duration}
          textStyle={styles.detailText}
        />
      )}
      <Subtitle>Ingredients</Subtitle>
      {meal?.ingredients && <List data={meal?.ingredients} />}
      <Subtitle>Steps</Subtitle>
      {meal?.steps && <List data={meal?.steps} />}
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
});
