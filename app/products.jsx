import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProductListItem from './components/ProductListItem';
import { fetchProducts } from './api';

const ProductsScreen = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchProducts().then(data => setProducts(data));
  }, []);

  const handleAddToCart = (product, quantity) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const handleOnPress = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Products</Text>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ProductListItem
              product={item}
              onAddToCart={handleAddToCart}
              onPress={() => handleOnPress(item)}
            />
          )}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default ProductsScreen;
