import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from '../index';
import ProductDetails from '../components/ProductDetails';
import { StoreProvider } from '../storeContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <StoreProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen name="index" component={Index} options={{ title: 'Home' }} />
          <Stack.Screen name="components/ProductDetails" component={ProductDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
