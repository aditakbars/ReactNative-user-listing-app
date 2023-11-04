import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import Header from "../components/Header";
import fetchDataFromAPI from "../data/animeData";

const windowWidth = Dimensions.get('window').width;
const cardWidth = windowWidth * 0.8; // Lebar card sekitar 80% dari lebar layar
const cardHeight = cardWidth * 1.5; // Tinggi card sekitar 1.5 kali lebar card

function HomeScreen() {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    fetchDataFromAPI().then((data) => {
      setAnimeData(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Header
        headerIcon={"bell-o"}
        headerText={"Hi, Adit dari Kelompok 17!"}
        flexPosition={"center"}
      />
      <Text style={styles.title}>Top Anime</Text>
      <FlatList
        data={animeData}
        keyExtractor={(item) => item.mal_id.toString()}
        renderItem={({ item }) => (
          <View key={item.mal_id} style={styles.itemContainer}>
            <Image source={{ uri: item.images.jpg.small_image_url }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.rating}>Rating: {item.score}</Text>
          </View>
        )}
        horizontal // Menjadikan list horizontal
        showsHorizontalScrollIndicator={false} // Hilangkan indikator gulir horizontal
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
      />
      <Text style={styles.title}>All Anime</Text>
      <FlatList
        data={animeData}
        keyExtractor={(item) => item.mal_id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.images.jpg.image_url }} style={styles.imageHorizontal} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.rating}>Rating: {item.score}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 16,
  },
  itemContainer: {
    width: cardWidth,
    height: cardHeight,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 15,
    shadowColor: 'black',
    elevation: 4,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '50%', // Gambar akan memenuhi 70% dari tinggi card
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  imageHorizontal: {
    width: '100%',
    height: '70%', // Gambar akan memenuhi 70% dari tinggi card
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    padding: 8,
  },
  rating: {
    fontSize: 16,
    color: 'gray',
    padding: 8,
  },
});

export default HomeScreen;
