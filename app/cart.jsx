import React, { useRef, useState } from "react";
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Svg, { Path, Rect } from "react-native-svg";


const specialOffersData = [
    {
      title: "Athletic/Sportswear",
      description: "Air Jordan running wear",
      image: require("../assets/icons/victor-olamide-ajibola-5emTz0Gv2rI-unsplash-removebg-preview.png"),
      price: "₦28,000.00",
    },
  ];
  

export default function cart() {
        const [currentIndex, setCurrentIndex] = useState(0);
      
        const renderSpecialOfferItem = ({ item, index }) => (
          <View key={index} style={styles.specialOfferItemContainer}>
            <View style={styles.imageColor}>
              <Image source={item.image} style={styles.specialOfferImage} />
            </View>
            <View style={styles.specialOfferTextContainer}>
              <Text style={styles.specialOfferTitle}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
      
              <View style={styles.cartStyle}>
                <Text style={styles.specialOfferPrice}> {item.price} </Text>
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
        );
      
        return (
          <ScrollView>
            <View style={styles.container}>
              {/* Special Offers Section */}
              <View style={styles.specialOffersHeader}>
                <Text style={styles.specialOffersText}>My Cart</Text>
              </View>
              <FlatList
                data={specialOffersData}
                renderItem={renderSpecialOfferItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                columnWrapperStyle={styles.specialOffersRow}
                showsVerticalScrollIndicator={false}
              />
    
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
      flexDirection: 'row',
      margin: 10,
      borderRadius: 10,
      padding: 10,
      alignItems: "center",
      justifyContent: 'center',
      gap: 4,
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
      textAlign: "center",
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
      gap: 30,
      marginTop: 10,
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: 20,
    },
    buttonStyle: {
      backgroundColor: '#007bff',
      borderRadius: 5,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      width: 120,
    },
  });