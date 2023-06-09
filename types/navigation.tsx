import { NativeStackScreenProps } from "@react-navigation/native-stack";
// root params
export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: {
    categoryId: string;
  };
  MealDetail: {
    mealId: string;
  };
};

// use this to get both the navigation and route
export type CustomStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

// use this to get the navigation not the route
export type CustomStackNavigationProp<Screen extends keyof RootStackParamList> =
  CustomStackScreenProps<Screen>["navigation"];

// use this to get the route
export type CustomStackRouteProp<Screen extends keyof RootStackParamList> =
  CustomStackScreenProps<Screen>["route"];
