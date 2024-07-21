import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import {
  fetchFeaturedSneakers,
  fetchSpecialOffers,
  fetchProducts,
  fetchData
} from "./api";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.75;

export default function Index() {
  const flatListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [featuredSneakersData, setFeaturedSneakersData] = useState([]);
  const [specialOffersData, setSpecialOffersData] = useState([]);
  const [data, setData] = useState([]);

  const baseUrl = "https://api.timbu.cloud/images";

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
    fetchSpecialOffers().then((data) => setSpecialOffersData(data));
    fetchFeaturedSneakers().then((data) => setFeaturedSneakersData(data));
    fetchData().then((data) => setData(data));
  }, []);

  const navigation = useNavigation();

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / SLIDER_WIDTH);
    setCurrentIndex(index);
  };

  const handleOnPress = (navigation, item) => {
    navigation.navigate('components/ProductDetails', { item });
  };   


  const renderItem = ({ item, index }) => (
    <View key={index} style={styles.itemContainer}>
      <Image source={{ uri:`${baseUrl}/${item.photos?.[0]?.url}` }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>{item.price | '0'} USD</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderSpecialOfferItem = ({ item, index, navigation }) => {
    return (
      <Pressable key={index} style={styles.specialOfferItemContainer} onPress={() => handleOnPress(navigation, item)}>
        <View>
          <View style={styles.imageColor}>
            <View style={styles.likeStyle}>
              <Svg
                width={32}
                height={31}
                viewBox="0 0 32 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Rect
                  x={0.5}
                  width={30.8}
                  height={30.8}
                  rx={15.4}
                  fill="#000"
                  fillOpacity={0.6}
                />
                <Path
                  d="M21.497 9.396c-2.01-1.234-3.766-.737-4.82.055-.433.325-.65.487-.777.487s-.343-.162-.775-.487c-1.055-.792-2.81-1.29-4.822-.055-2.64 1.619-3.236 6.96 2.852 11.466 1.16.859 1.74 1.288 2.745 1.288 1.006 0 1.586-.43 2.746-1.287 6.088-4.507 5.49-9.848 2.851-11.467z"
                  stroke="#fff"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                />
              </Svg>
            </View>
            <Image source={{ uri: `${baseUrl}/${item.photos?.[0]?.url}` }} style={styles.specialOfferImage} />
          </View>
          <View style={styles.specialOfferTextContainer}>
            <Text style={styles.description}>{item.name}</Text>
            <Text style={styles.specialOfferTitle}>{item.description}</Text>
            <View style={styles.ratingStyle}>
              <Svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M6 1l.002 8.702c-.18 0-.36.04-.496.12l-1.495.893c-1.075.64-1.72.166-1.44-1.059l.355-1.547c.065-.293-.05-.7-.26-.913l-1.24-1.25c-.734-.736-.494-1.482.526-1.653l1.594-.267c.27-.046.59-.283.71-.53l.88-1.774c.237-.48.55-.721.864-.722z"
                  fill="orange"
                />
                <Path
                  d="M6 1l.002 8.702c-.18 0-.36.04-.496.12l-1.495.893c-1.075.64-1.72.166-1.44-1.059l.355-1.547c.065-.293-.05-.7-.26-.913l-1.24-1.25c-.734-.736-.494-1.482.526-1.653l1.594-.267c.27-.046.59-.283.71-.53l.88-1.774c.237-.48.55-.721.864-.722zm0 0h.002M7.5 10.422l.49.293c1.07.64 1.72.161 1.44-1.059L9.077 8.11c-.065-.293.05-.7.26-.913l1.24-1.25c.73-.736.494-1.482-.525-1.653l-1.595-.267a1.09 1.09 0 01-.705-.53L7.5 2.99"
                  stroke="orange"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <Text>4.5 (100 sold)</Text>
            </View>
            <View style={styles.cartStyle}>
              <Text style={styles.specialOfferPrice}>{item.price | '0'} USD</Text>
              <Svg
                width={37}
                height={28}
                viewBox="0 0 37 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Rect
                  x={0.5}
                  width={36}
                  height={28}
                  rx={8}
                  fill="#0072C6"
                  fillOpacity={0.12}
                />
                <Path
                  d="M14.67 16.439l-.581-3.471c-.095-.565-.142-.847.004-1.033.145-.185.414-.185.952-.185h6.91c.538 0 .807 0 .952.185.146.186.099.468.004 1.033l-.582 3.471c-.204 1.224-.307 1.836-.713 2.199-.406.362-.99.362-2.156.362h-1.92c-1.167 0-1.75 0-2.156-.362-.406-.363-.508-.975-.714-2.199zM16 11.75v-.25a2.5 2.5 0 015 0v.25M14.75 16.75h7.5"
                  stroke="#0072C6"
                />
              </Svg>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };
  

  const renderFeaturedSneakersItem = ({ item, index }) => {

    return  (
      <View key={index} style={styles.specialOfferItemContainer}>
        <View style={styles.imageColor}>
          <View style={styles.likeStyle}>
            <Svg
              width={32}
              height={31}
              viewBox="0 0 32 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Rect
                x={0.5}
                width={30.8}
                height={30.8}
                rx={15.4}
                fill="#000"
                fillOpacity={0.6}
              />
              <Path
                d="M21.497 9.396c-2.01-1.234-3.766-.737-4.82.055-.433.325-.65.487-.777.487s-.343-.162-.775-.487c-1.055-.792-2.81-1.29-4.822-.055-2.64 1.619-3.236 6.96 2.852 11.466 1.16.859 1.74 1.288 2.745 1.288 1.006 0 1.586-.43 2.746-1.287 6.088-4.507 5.49-9.848 2.851-11.467z"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
              />
            </Svg>
          </View>
          <Image source={{ uri:`${baseUrl}/${item.photos?.[0]?.url}` }} style={styles.specialOfferImage} />
        </View>
        <View style={styles.specialOfferTextContainer}>
          <Text style={styles.description}>{item.name}</Text>
          <Text style={styles.specialOfferTitle}>{item.description}</Text>
          <View style={styles.ratingStyle}>
            <Svg
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M6 1l.002 8.702c-.18 0-.36.04-.496.12l-1.495.893c-1.075.64-1.72.166-1.44-1.059l.355-1.547c.065-.293-.05-.7-.26-.913l-1.24-1.25c-.734-.736-.494-1.482.526-1.653l1.594-.267c.27-.046.59-.283.71-.53l.88-1.774c.237-.48.55-.721.864-.722z"
                fill="orange"
              />
              <Path
                d="M6 1l.002 8.702c-.18 0-.36.04-.496.12l-1.495.893c-1.075.64-1.72.166-1.44-1.059l.355-1.547c.065-.293-.05-.7-.26-.913l-1.24-1.25c-.734-.736-.494-1.482.526-1.653l1.594-.267c.27-.046.59-.283.71-.53l.88-1.774c.237-.48.55-.721.864-.722zm0 0h.002M7.5 10.422l.49.293c1.07.64 1.72.161 1.44-1.059L9.077 8.11c-.065-.293.05-.7.26-.913l1.24-1.25c.73-.736.494-1.482-.525-1.653l-1.595-.267a1.09 1.09 0 01-.705-.53L7.5 2.99"
                stroke="orange"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <Text>4.5 (100 sold)</Text>
          </View>
          <View style={styles.cartStyle}>
            <Text style={styles.specialOfferPrice}>{item.price | '0'} USD</Text>
            <Svg
              width={37}
              height={28}
              viewBox="0 0 37 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Rect
                x={0.5}
                width={36}
                height={28}
                rx={8}
                fill="#0072C6"
                fillOpacity={0.12}
              />
              <Path
                d="M14.67 16.439l-.581-3.471c-.095-.565-.142-.847.004-1.033.145-.185.414-.185.952-.185h6.91c.538 0 .807 0 .952.185.146.186.099.468.004 1.033l-.582 3.471c-.204 1.224-.307 1.836-.713 2.199-.406.362-.99.362-2.156.362h-1.92c-1.167 0-1.75 0-2.156-.362-.406-.363-.508-.975-.714-2.199zM16 11.75v-.25a2.5 2.5 0 015 0v.25M14.75 16.75h7.5"
                stroke="#0072C6"
              />
            </Svg>
          </View>
        </View>
      </View>
    )
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* First section */}
        <View style={styles.firstHeader}>
          <View>
            <Text style={styles.headerText}>AG-EZENARD</Text>
          </View>
          <View>
            <Svg
              width={20}
              height={21}
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M14.583 14.605l3.75 3.75"
                stroke="#2A2A2A"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M16.667 9.188a7.5 7.5 0 10-15 0 7.5 7.5 0 0015 0z"
                stroke="#141B34"
                strokeWidth={1.5}
                strokeLinejoin="round"
              />
            </Svg>
          </View>
        </View>

        {/* Second section */}
        <View style={styles.secondHeader}>
          <View>
            <Svg
              width={49}
              height={48}
              viewBox="0 0 49 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M1 24C1 11.297 11.297 1 24 1h1c12.703 0 23 10.297 23 23S37.703 47 25 47h-1C11.297 47 1 36.703 1 24z"
                fill="#E89705"
              />
              <Path
                d="M1 24C1 11.297 11.297 1 24 1h1c12.703 0 23 10.297 23 23S37.703 47 25 47h-1C11.297 47 1 36.703 1 24z"
                stroke="orange"
                strokeWidth={2}
              />
              <Path
                d="M11.916 32l5.02-13.582h2.078L24.05 32h-2.198L18.28 21.953c-.075-.21-.14-.412-.195-.603-.05-.192-.096-.39-.14-.594h-.083a8.304 8.304 0 01-.148.594c-.05.191-.111.392-.186.603L13.95 32h-2.033zm2.375-3.358l.557-1.633h6.188l.547 1.633h-7.291zM25.444 32V18.492h4.119c1.75 0 3.2.566 4.351 1.698 1.15 1.132 1.726 2.678 1.726 4.639v.835c0 1.954-.576 3.5-1.726 4.638C32.77 31.434 31.32 32 29.562 32h-4.12zm2.087-1.651h2.014c1.206 0 2.167-.405 2.885-1.216.717-.81 1.076-1.954 1.076-3.432v-.91c0-1.478-.362-2.622-1.086-3.432-.717-.81-1.676-1.215-2.875-1.215H27.53v10.205z"
                fill="#2A2A2A"
              />
            </Svg>
          </View>
          <View>
            <Text>Good Afternoon</Text>
            <Text style={styles.nameStyle}>Ada Dennis</Text>
          </View>
        </View>

        {/* Third section */}
        <View>
          <FlatList
            ref={flatListRef}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          />
          <View style={styles.dotsContainer}>
            {data.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  { backgroundColor: index === currentIndex ? "#333" : "#888" },
                ]}
              />
            ))}
          </View>
        </View>

        {/* Fourth */}
        <View style={styles.brandStyle}>
          <Image
            source={require("../assets/icons/Frame 1171277056.png")}
            style={styles.imageStyle}
          />
        </View>

        {/* Special Offers Section */}
        <Pressable android_ripple={{ color: "#007bff" }}>
          <View style={styles.specialOffersHeader}>
            <Text style={styles.specialOffersText}>Our Special Offers</Text>
          </View>
          <FlatList
            data={specialOffersData}
            renderItem={({ item, index }) => renderSpecialOfferItem({ item, index, navigation })}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.specialOffersRow}
            showsVerticalScrollIndicator={false}
          />
        </Pressable>

        {/* Featured Sneakers Section */}
        <View style={styles.specialOffersHeader}>
          <Text style={styles.specialOffersText}>Featured Bags</Text>
        </View>
        <FlatList
          data={featuredSneakersData}
          renderItem={renderFeaturedSneakersItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={styles.specialOffersRow}
          showsVerticalScrollIndicator={false}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonText}>View more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  firstHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  secondHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 40,
  },
  headerText: {
    fontWeight: "700",
    fontStyle: "italic",
    fontSize: 16,
  },
  nameStyle: {
    fontWeight: "600",
    marginTop: 5,
  },
  itemContainer: {
    width: SLIDER_WIDTH,
    height: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    paddingVertical: 20,
    marginTop: 20,
    backgroundColor: "#1b4e74",
  },
  image: {
    width: ITEM_WIDTH * 0.6,
    height: 200,
    borderRadius: 8,
    resizeMode: "cover",
  },
  textContainer: {
    width: ITEM_WIDTH * 0.4,
    marginLeft: 20,
    overflow: "hidden",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 5,
    color: "#fff",
  },
  price: {
    fontSize: 16,
    color: "#fff",
    textAlign: "left", // Align text to the left
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  brandStyle: {
    marginTop: 50,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  specialOffersHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  specialOffersText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  specialOffersRow: {
    justifyContent: "space-between",
  },
  specialOfferItemContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  specialOfferImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode: "cover",
  },
  imageColor: {
    backgroundColor: "#f8f8f8",
    padding: 20,
  },
  specialOfferTextContainer: {
    alignItems: "flex-start",
    marginTop: 10,
  },
  specialOfferTitle: {
    fontSize: 12,
    textAlign: "start",
    marginBottom: 5,
  },
  description: {
    fontWeight: "bold",
    fontSize: 14,
  },
  specialOfferPrice: {
    fontSize: 16,
    color: "#0072C6",
    fontWeight: "600",
  },
  specialOfferButton: {
    backgroundColor: "#007bff",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  specialOfferButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  likeStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  ratingStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 5,
    marginTop: 10,
  },
  cartStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 50,
    marginTop: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  buttonStyle: {
    backgroundColor: "#007bff",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 120,
  },
});
