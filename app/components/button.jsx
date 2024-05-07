import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const CustomButton = ({ title, handleClick }) => {
  return (
    <TouchableOpacity onPress={handleClick} style={styles.button}>
      <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FB933C",
    padding: 10,
    borderRadius: 100,
    width: "50%",
    color: "white",
  },
});

export default CustomButton;
