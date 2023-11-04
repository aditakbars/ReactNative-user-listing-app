
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import Header from "../components/Header";
import fetchDataAnime from "../data/animeData";

function HomeScreen() {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    fetchDataAnime().then((data) => {
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
      <Text style={styles.toptitle}>Top Anime</Text>
      <FlatList
        data={animeData}
        keyExtractor={(item) => item.mal_id.toString()}
        renderItem={({ item }) => (
          <View key={item.mal_id} style={styles.itemContainer}>
            <Image source={{ uri: item.images.jpg.image_url }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.rating}>Rating: {item.score}</Text>
          </View>
        )}
        horizontal // Menjadikan list horizontal
        showsHorizontalScrollIndicator={true}
      />
      <Text style={styles.toptitle}>All Anime</Text>
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
  toptitle: {
    fontSize: 24,
    fontWeight: '800',
    marginVertical: 10,
  },
  itemContainer: {
    width: 150,
    height: 600,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
  },
  image: {
    width: 148,
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    padding: 5,
  },
  rating: {
    fontSize: 12,
    fontWeight: '500',
    color: 'gray',
    paddingTop: 0,
    padding: 5,
  },
});

export default HomeScreen;