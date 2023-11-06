import { StyleSheet, View,Text,Platform, ScrollView, Pressable, TextInput,Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView} from 'react-native-safe-area-context'
import { AntDesign } from "@expo/vector-icons";
import { SliderBox } from 'react-native-image-slider-box';


const HomeScreen = () => {
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
    ]

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
        <View>
          <Pressable>
            <AntDesign name="shoppingcart" size={24} color="black" />
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
          maxHeight:115,
          paddingTop: 2,
          marginHorizontal: 6,
        }}
      >
        <View
          style={{
            marginTop: 1,
            marginBottom:2,
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
      <View style={{
        justifyContent: "center",
        // backgroundColor: "black",
        marginHorizontal: "auto",
        borderWidth:0.2,
        borderColor:"#ddd",
        margin:1,
        padding: 10,
        alignItems: "center",
        flexDirection: "row"
      }}
        >
      </View>
      <View>
         <Text>Hello World</Text>
      </View>

    </SafeAreaView>
  );
}

export default HomeScreen

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
    fontSize:11
  },
});