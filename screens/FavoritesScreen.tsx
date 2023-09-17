import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

const FavoritesScreen = () => {
  const FavoriteCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    FavoriteCtx.ids.includes(meal.id)
  );
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
