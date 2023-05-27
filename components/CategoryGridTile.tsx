import React from "react";
import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

const CategoryGridTile = ({
  title,
  color,
}: {
  title: string;
  color: string;
}) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#d3d3d3" }}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: color },
          pressed && Platform.OS === "ios" ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategoryGridTile;
