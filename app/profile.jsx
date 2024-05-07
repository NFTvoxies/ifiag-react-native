import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";

const profile = () => {
  const handlePress = () => {
    router.push("/tabs");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
      <Image
        style={styles.image}
        source={require("../assets/motor.png")}
      ></Image>
      <Text style={styles.text}>Ne manquez plus jamais une </Text>
      <Text style={styles.text2}>
        occasion de mange avec <Text>Pide</Text>{" "}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Commencez à manger</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: 100,
  },
  image: {
    height: "40%",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#003049",
  },
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#003049",
    marginBottom: 17,
  },
  button: {
    backgroundColor: '#FB933C',
    padding: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default profile;
