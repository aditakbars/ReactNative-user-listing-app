
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import Header from "../components/Header";
import fetchDataFromAPI from "../data/animeData";

const windowWidth = Dimensions.get('window').width;
const cardWidth = windowWidth * 0.5; // Lebar card sekitar 80% dari lebar layar
const cardHeight = cardWidth * 2; // Tinggi card sekitar 1.5 kali lebar card

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
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        {animeData.map((item) => (
          <View key={item.mal_id} style={styles.itemContainer}>
            <Image source={{ uri: item.images.jpg.small_image_url }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.rating}>Rating: {item.score}</Text>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.title}>All Anime</Text>
      <FlatList
        data={animeData}
        keyExtractor={(item) => item.mal_id.toString()}
        renderItem={({ item }) => (
          <View>
            <View
              style={{
                  paddingVertical: 8,
                  borderRadius: 8,
                  flexDirection: "column",
                  alignItems: "center",
              }}
              >
            <View
                style={{
                borderWidth: 2,
                borderRadius: 8,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                width: 300,
                }}
            >
            <Image
            source={{ uri: item.images.jpg.image_url }}
            style={{
                width: 100,
                height: 150,
                borderRightWidth: 2,
                borderBottomLeftRadius: 6,
                borderTopLeftRadius: 6,
                borderColor: "black",
            }}
            />
            <View
            style={{
                flexDirection: "column",
                marginLeft: 16,
                justifyContent: "center",
                maxWidth: 180,
            }}
            >
            <Text
                style={{
                fontSize: 18,
                fontWeight: "600",
                }}
            >
                {item.title}
            </Text>
            <Text
                style={{
                fontWeight: "400",
                color: "gray",
                }}
            >
                {item.score}
            </Text>
            </View>
          </View>
        </View>
            {/* <Image source={{ uri: item.images.jpg.image_url }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.rating}>Rating: {item.score}</Text> */}
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
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '90%', // Gambar akan memenuhi 70% dari tinggi card
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