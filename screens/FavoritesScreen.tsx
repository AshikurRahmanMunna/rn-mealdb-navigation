import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const FavoritesScreen = () => {
  const { ids } = useSelector((state: RootState) => state.favorites);
  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));
  return (
    <View style={styles.container}>
      {favoriteMeals.length ? (
        <MealsList meals={favoriteMeals} />
      ) : (
        <View style={styles.noFavorites}>
          <Text style={styles.noFavoriteText}>
            You have no favorite meals yet.
          </Text>
        </View>
      )}
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  noFavorites: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  noFavoriteText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
  },
});
