import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Profile from "../assets/cookies.png";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "./components/button";
import * as ImagePicker from "expo-image-picker";
import MapView from "react-native-maps";

const App = () => {
  //const [image, setImage] = useState(null);

  const OpenGalerie = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ alignItems: "center", marginTop: 40 }}>
          <Link href={"/chats"}>Go to Profile</Link>
          <Text>App</Text>
          <CustomButton title="Open Galerie" handleClick={OpenGalerie} />
          <MapView
            style={styles.map}
            showsUserLocation={true}
            showsMyLocationButton={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    marginTop: 40,
  },
});

export default App;
