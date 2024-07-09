import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProductListItem = ({ item }) => {
  const baseUrl = 'https://api.timbu.cloud/images/';
  return (
    <View style={styles.productContainer}>
      <Image 
          source={{ uri: item.photos.length > 0 ? baseUrl + item.photos[0].url : 'https://via.placeholder.com/150' }} 
        style={styles.productImage} 
      />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        {product.selling_price && <Text style={styles.productPrice}>Price: ${item.selling_price}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  productDetails: {
    padding: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    color: '#333',
  },
});

export default ProductListItem;
