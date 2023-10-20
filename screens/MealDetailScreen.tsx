import React, { useLayoutEffect, useContext } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import {
  CustomStackNavigationProp,
  CustomStackRouteProp,
} from "../types/navigation";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import {
  addFavorite,
  removeFavorite,
} from "../features/favorites/favoritesSlice";
interface IMealDetailScreen {
  route: CustomStackRouteProp<"MealDetail">;
  navigation: CustomStackNavigationProp<"MealDetail">;
}
const MealDetailScreen = ({ navigation, route }: IMealDetailScreen) => {
  const { mealId } = route.params;
  const meal = MEALS.find((m) => m.id === mealId);
  const { ids: favoriteIds } = useSelector(
    (state: RootState) => state.favorites
  );
  const dispatch = useDispatch();
  const isInFavorite = favoriteIds.includes(mealId);
  const headerButtonPressed = () => {
    if (isInFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal?.title,
      headerRight: () => {
        return (
          <IconButton
            color="white"
            icon={isInFavorite ? "star" : "star-outline"}
            onPress={headerButtonPressed}
          />
        );
      },
    });
  }, [meal, navigation, headerButtonPressed]);
  return (
    <ScrollView style={styles.rootContainer}>
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
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          {meal?.ingredients && <List data={meal?.ingredients} />}
          <Subtitle>Steps</Subtitle>
          {meal?.steps && <List data={meal?.steps} />}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
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
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
