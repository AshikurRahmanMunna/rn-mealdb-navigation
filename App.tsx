import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { RootStackParamList } from "./types/navigation";
import { CATEGORIES } from "./data/dummy-data";
export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
          initialRouteName="MealsCategories"
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={({ navigation, route }) => {
              const { categoryId } = route.params;
              const category = CATEGORIES.find((c) => c.id === categoryId);
              return {
                title: category?.title,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
