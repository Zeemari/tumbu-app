import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductListItem = ({ product }) => {
  const baseUrl = 'https://api.timbu.cloud/images/';

  const renderPhotos = () => {
    if (!product.photos || product.photos.length === 0) {
      return (
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.productImage}
          resizeMode="cover"
        />
      );
    }
    return product.photos.map((photo, index) => (
      <Image
        key={index}
        source={{ uri: baseUrl + photo.url }}
        style={styles.productImage}
        resizeMode="cover"
      />
    ));
  };

  const renderSizes = () => {
    if (!product.sizes || product.sizes.length === 0) {
      return <Text style={styles.noSizeText}>No sizes available</Text>;
    }
    return product.sizes.map((size, index) => (
      <TouchableOpacity key={index} style={styles.sizeButton}>
        <Text style={styles.sizeButtonText}>{size}</Text>
      </TouchableOpacity>
    ));
  };

  const renderColors = () => {
    if (!product.colors || product.colors.length === 0) {
      return <Text style={styles.noColorText}>No colors available</Text>;
    }
    return product.colors.map((color, index) => (
      <View key={index} style={[styles.colorBox, { backgroundColor: color }]} />
    ));
  };

  return (
    <View style={styles.productContainer}>
      <ScrollView horizontal pagingEnabled>
        {renderPhotos()}
      </ScrollView>
      <View style={styles.productDetails}>
        <Text style={styles.productBrand}>Iconic Casual Brands</Text>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>₦ {product.selling_price}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.soldText}>{product.sold} sold</Text>
          <View style={styles.rating}>
            <Icon name="star" size={14} color="#FFA41C" />
            <Text style={styles.ratingText}>{product.rating} ({product.reviews} reviews)</Text>
          </View>
        </View>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.sectionTitle}>Size</Text>
        <View style={styles.sizeContainer}>
          {renderSizes()}
        </View>
        <Text style={styles.sectionTitle}>Colours</Text>
        <View style={styles.colorContainer}>
          {renderColors()}
        </View>
        <Text style={styles.sectionTitle}>Quantity</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>1</Text>
          <TouchableOpacity style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.wishlistButton}>
        <Icon name="heart" size={24} color="red" />
      </TouchableOpacity>
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
    position: 'relative',
  },
  productImage: {
    width: 300, // Adjust accordingly
    height: 200, // Adjust accordingly
  },
  productDetails: {
    padding: 16,
  },
  productBrand: {
    fontSize: 12,
    color: '#666',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  productPrice: {
    fontSize: 18,
    color: '#333',
    marginVertical: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  soldText: {
    fontSize: 12,
    color: '#666',
    marginRight: 8,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  sizeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 4,
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 4,
    marginBottom: 4,
  },
  sizeButtonText: {
    fontSize: 14,
    color: '#333',
  },
  colorContainer: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  colorBox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  quantityButtonText: {
    fontSize: 14,
    color: '#333',
  },
  quantityText: {
    fontSize: 14,
    color: '#333',
    marginHorizontal: 8,
  },
  noSizeText: {
    fontSize: 14,
    color: '#999',
  },
  noColorText: {
    fontSize: 14,
    color: '#999',
  },
  wishlistButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
});

export default ProductListItem;
