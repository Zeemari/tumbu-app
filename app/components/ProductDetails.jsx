import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductDetails = ({ route }) => {
  const [quantity, setQuantity] = useState(1);
  const item = route?.params?.item;

  if (!item) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorMessage}>No product details was gotten, check your code!</Text>
      </View>
    );
  }

  const baseUrl = 'https://api.timbu.cloud/images/';

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    try {
      const productToAdd = { ...product, quantity };
      // Add productToAdd to the cart
      Alert.alert('Success', 'Product added to cart successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to add product to cart.');
      console.error(error);
    }
  };

  return (
    <View style={styles.productContainer}>
      <Image source={{ uri: `${baseUrl}/${item.photos?.[0]?.url}` }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>USD {item.current_price[0].USD[0]}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={handleDecrease}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={handleIncrease}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: '100%',
    height: 300,
  },
  productDetails: {
    marginTop: 16,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 16,
    marginVertical: 8,
  },
  productPrice: {
    fontSize: 18,
    color: '#333',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  },
  quantityButtonText: {
    fontSize: 18,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 8,
  },
  button: {
    backgroundColor: '#0072C6',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetails;
