import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Cart = ({ cart = [], onRemoveFromCart }) => {
  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.cartItemText}>{item.name} - Quantity: {item.quantity}</Text>
      <TouchableOpacity onPress={() => onRemoveFromCart(item.id)}>
        <Icon name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  const handleCheckout = () => {
    Alert.alert('Success', 'Proceeding to Checkout!');
  };

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<Text style={styles.emptyCartText}>Your cart is empty.</Text>}
      />
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cartItemText: {
    fontSize: 16,
  },
  checkoutButton: {
    backgroundColor: '#0072C6',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 16,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyCartText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#999',
  }
});

export default Cart;
