import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { Link } from "expo-router";
import Profile from "../assets/cookies.png";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "./components/button";
import * as ImagePicker from "expo-image-picker";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

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

  useEffect(() => {
    _getLocation();
  }, []);

  const _getLocation = async () => {
    let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  };

  //const pickImage = async () => {
  //  let result = await ImagePicker.launchImageLibraryAsync({
  //    mediaTypes: ImagePicker.MediaTypeOptions.All,
  //    allowsEditing: true,
  //    aspect: [4, 3],
  //})
  // }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ alignItems: "center", marginTop: 40 }}>
          {/* <Link href={"/chats"}>Go to Profile</Link> */}
          {/* <Text>App</Text> */}
          <CustomButton title="Open Galerie" handleClick={OpenGalerie} />
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 33.5731,
              longitude: -7.5898,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
            followsUserLocation={true}
            showsMyLocationButton={true}
            zoomControlEnabled

            
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
    width: Dimensions.get("window").width,
    height: 650,
    marginTop: 40,
  },
});

export default App;
