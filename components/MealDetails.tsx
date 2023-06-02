import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

const MealDetails = ({
  duration,
  complexity,
  affordablity,
  style,
  textStyle,
}: {
  duration: number;
  complexity: string;
  affordablity: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordablity.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
