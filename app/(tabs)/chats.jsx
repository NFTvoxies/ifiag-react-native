import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const chats = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{ uri: "https://i.pravatar.cc/300" }}
          style={styles.ImageProfile}
        />
        <View style={styles.messageContainer}>
          <View>
            <Text style={{ fontWeight: "bold" }}>Achraf Bsibiss</Text>
            <Text numberOfLines={1} style={styles.message}>
              hello youssef how are you doing{" "}
            </Text>
          </View>
          <View>
            <Text style={styles.time}>10:00 PM</Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.ImageProfile}
        />
        <View style={styles.messageContainer}>
          <View>
            <Text style={{ fontWeight: "bold" }}>Mourad </Text>
            <Text numberOfLines={1} style={styles.message}>
              Thanks for the Help{" "}
            </Text>
          </View>
          <View>
            <Text style={styles.time}>9:33 AM</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#bdbcbd",
    marginBottom: 10,
  },
  messageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ImageProfile: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 10,
  },
  message: {
    color: "grey",
    marginTop: 5,
    maxWidth: "90%",
  },
  time: {
    color: "black",
  },
});

export default chats;
