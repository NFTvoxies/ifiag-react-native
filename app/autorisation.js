import React from "react";
import { View, Text, Button } from "react-native";

const FirstPage = ({ navigation }) => {
  const handleAuthorize = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);

      if (status === "granted") {
        navigation.navigate("SecondPage");
      } else {
        console.log("Camera permission denied");
      }
    } catch (error) {
      console.error("Error requesting camera permission:", error);
    }
    navigation.navigate("SecondPage");
  };

  return (
    <View>
      <Text>Please authorize camera access</Text>
      <Button title="Authorize" onPress={handleAuthorize} />
    </View>
  );
};

export default FirstPage;
