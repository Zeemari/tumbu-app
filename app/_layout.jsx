import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Layout() {
    return (
	    <Tabs>
	    <Tabs.Screen name="index" options={{ title: 'Zeekart', tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} /> }} />
	    <Tabs.Screen name="products" options={{ title: 'Products', tabBarIcon: ({ color }) => <FontAwesome size={28} name="shopping-cart" color={color} /> }} />
	    <Tabs.Screen name="api" options={{ href: null }} />
	    <Tabs.Screen name="components/ProductListItem" options={{ href: null }} /> 
	    </Tabs>
    );
}
