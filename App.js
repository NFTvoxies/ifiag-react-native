import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Profile from "./assets/cookies.png";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins-Black': require('./assets/Fonts/Poppins-Black.ttf'),
  });

  if (!fontsLoaded) {
    return null; // or render a loading indicator
  }
  return (
    <View style={styles.container}>
      <Ionicons name="settings-outline" size={32} color={"#003049"} />
      <StatusBar style="auto" />
      <View style={styles.AlignImage}>
        <Image source={Profile} style={styles.ImgRounded} />
        <Text style={styles.title}>M.cookies</Text>
        {/* <Ionicons name="call-outline" size={15} color={"#003049"} /> */}
        <Text>+212 657483525</Text>
      </View>

      <View style={styles.cardsContainer}>
        <View style={[styles.card, { backgroundColor: "#8338ec" }]}>
          <Text style={styles.cardText1}>2</Text>
          <Text style={styles.cardSubText1}>Products</Text>
        </View>
        <View style={[styles.card, { backgroundColor: "#01161e" }]}>
          <Text style={styles.cardText2}>$2,8765</Text>
          <Text style={styles.cardSubText2}>Monthly Earn</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 40,
    paddingHorizontal: 15,
  },
  ImgRounded: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  AlignImage: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 10,
    marginTop: 40,
  },
  title: {
    color: "black",
    fontSize: 27,
    fontFamily: "Poppins-Black",
  },
  icon: {
    paddingTop: 10,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 15,
  },
  card: {
    width: 140,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  cardText1: {
    color: "#ffffff",
    fontSize: 16,
  },
  cardText2: {
    color: "#ffffff",
    fontSize: 16,
  },
  cardSubText1: {
    color: "grey",
  },
  cardSubText2: {
    color: "grey",
  },
});
