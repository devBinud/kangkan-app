import {
  StyleSheet,
  View,
  Text,
  Platform,
  ScrollView,
  Pressable,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const navigation=useNavigation();
  const categoryList = [
    {
      id: 1,
      image:
        "https://neilpatel.com/wp-content/themes/neilpatel/images/quiz/neil.png",
      name: "Women",
    },
    {
      id: 2,
      image:
        "https://neilpatel.com/wp-content/themes/neilpatel/images/quiz/neil.png",
      name: "Men",
    },
    {
      id: 3,
      image:
        "https://neilpatel.com/wp-content/themes/neilpatel/images/quiz/neil.png",
      name: "Kids",
    },
    {
      id: 4,
      image:
        "https://neilpatel.com/wp-content/themes/neilpatel/images/quiz/neil.png",
      name: "New",
    },
    {
      id: 5,
      image:
        "https://neilpatel.com/wp-content/themes/neilpatel/images/quiz/neil.png",
      name: "Trending",
    },
    {
      id: 6,
      image:
        "https://neilpatel.com/wp-content/themes/neilpatel/images/quiz/neil.png",
      name: "Upcoming",
    },
  ];

  const sliderImages = [
    "https://img.etimg.com/thumb/msid-93051525,width-1070,height-580,imgsize-2243475,overlay-economictimes/photo.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/PD23/Launches/Updated_ingress1242x550_3.gif",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/BB/JULY/1242x550_Header-BB-Jul23.jpg",
  ];

  const deals = [
    {
      id: "20",
      title: "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)",
      oldPrice: 25000,
      price: 19000,
      image:
        "https://imgs.search.brave.com/Z2nZkULc7Im1a5ke3SzUvU2La_owM0CW1fX6ns2G8QQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNC8w/Ni8wNS8xNC8zOC93/b21hbi0zNjI3NTRf/NjQwLmpwZw",
      carouselImages: [
        "https://m.media-amazon.com/images/I/61QRgOgBx0L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61uaJPLIdML._SX679_.jpg",
        "https://m.media-amazon.com/images/I/510YZx4v3wL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61J6s1tkwpL._SX679_.jpg",
      ],
      color: "Stellar Green",
      size: "6 GB RAM 128GB Storage",
    },
    {
      id: "30",
      title:
        "Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers",
      oldPrice: 74000,
      price: 26000,
      image:
        "https://imgs.search.brave.com/zDgLvf_OrmoAA2FkDZ7Zg1BHlG4ilYLv4OTpSlKByfI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8x/MS8xOS8xMS8xOC93/ZWRkaW5nLXNhcmVl/LWNvbGxlY3Rpb24t/MTA1MDkyOV82NDAu/anBn",
      carouselImages: [
        "https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY879_.jpg",
        "https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71yzyH-ohgL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg",
      ],
      color: "Cloud Navy",
      size: "8 GB RAM 128GB Storage",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.itemImage} source={{ uri: item.image }} />
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 14 : 0,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          marginBottom: 2,
          alignItems: "center",
          flexDirection: "row",
          marginHorizontal: 15,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "500", fontSize: 15, color: "#44546d" }}>
          Hello User
        </Text>
        <View style={{flexDirection:"row"}}>
          <Pressable>
            <Ionicons name="notifications-outline" size={22} color="black" />
          </Pressable>
          <Pressable>
            <Ionicons name="heart-outline" style={{marginHorizontal:3}} size={22} color="black" />
          </Pressable>
          <Pressable>
            <AntDesign name="shoppingcart" size={22} color="black" />
          </Pressable>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 5,
            gap: 10,
            backgroundColor: "white",
            borderRadius: 3,
            height: 38,
            flex: 1,
            borderWidth: 0.3,
          }}
        >
          <AntDesign
            name="search1"
            style={{ paddingLeft: 10 }}
            size={22}
            color="#535655"
          />
          <TextInput placeholder="Search Products and Brands"></TextInput>
        </Pressable>
      </View>
      <ScrollView
        style={{
          flex: 1,
          maxHeight: 115,
          paddingTop: 2,
          marginHorizontal: 6,
        }}
      >
        <View
          style={{
            marginTop: 1,
            marginBottom: 2,
            alignItems: "center",
            flexDirection: "row",
            marginHorizontal: 15,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "500", color: "#44546d" }}>
            Shop by Categories
          </Text>
        </View>
        <FlatList
          data={categoryList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
      <SliderBox
        images={sliderImages}
        autoPlay
        circleLoop
        dotColor={"#13274F"}
        // dotColor={"#b94747"}
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{ width: "100%" }}
      />
      <View
        style={{
          justifyContent: "center",
          marginHorizontal: 2,
          marginTop: 2,
          borderWidth: 1,
          borderColor: "#121212",
          borderStyle: "dotted",
          margin: 1,
          padding: 10,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: 15,
            color: "#44546d",
            letterSpacing: 0.3,
            textTransform: "uppercase",
          }}
        >
          Top Products
        </Text>
      </View>
      <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {deals.map((item, index) => (
              <Pressable
                onPress={() =>
                  navigation.navigate("Info", {
                    id: item.id,
                    title: item.title,
                    price: item?.price,
                    carouselImages: item.carouselImages,
                    color: item?.color,
                    size: item?.size,
                    oldPrice: item?.oldPrice,
                    item: item,
                  })
                }
                style={{
                  marginVertical: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ width: 180, height: 180, resizeMode: "contain" }}
                  source={{ uri: item?.image }}
                />
              </Pressable>
            ))}
          </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  itemContainer: {
    margin: 10,
    alignItems: "center",
  },
  itemImage: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 50,
  },
  itemText: {
    color: "#535655",
    fontSize: 11,
  },
  productRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 1,
    marginBottom: 12,
  },
});