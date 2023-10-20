// DetailScreen.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function DetailScreen({ route }) {
  // Dapatkan dataNama dari prop route
  const { dataNama } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: dataNama.imageUrl }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>{dataNama.nama}</Text>
      <Text style={styles.nim}>{dataNama.nim}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
  },
  nim: {
    fontSize: 16,
    color: "gray",
  },
});

export default DetailScreen;
