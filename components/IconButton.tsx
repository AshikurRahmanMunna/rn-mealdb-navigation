import React from "react";
import {
  View,
  Pressable,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const IconButton = ({
  onPress,
  icon,
  color = "white",
}: {
  onPress?: (event: GestureResponderEvent) => void;
  icon: any;
  color?: string;
}) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
