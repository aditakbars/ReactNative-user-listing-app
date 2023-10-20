import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { data } from "../data/data";
import Card from "../components/Card";
import Header from "../components/Header";

function ProfileScreen({ navigation }) {
  const [searchText, setSearchText] = useState(""); // State untuk kata kunci pencarian

  const filteredData = data.filter((item) =>
    item.nama.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Header headerText={"Kelompok 17"} flexPosition={"center"} />
      <TextInput
        style={styles.searchInput}
        placeholder="Cari data pengguna..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredData} // Gunakan data yang sudah difilter
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail", { dataNama: item })}
          >
            <Card dataNama={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});

export default ProfileScreen;
