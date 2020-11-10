import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import Preload from '../screens/Preload';
import Hall from '../screens/Hall';
import Flights from '../screens/Flights';
import Freight from '../screens/Freight';
import Cargo from '../screens/Cargo';

export default() => (
    <Stack.Navigator 
    initialRouteName="Preload"
    screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Hall" component={Hall} />
        <Stack.Screen name="Flights" component={Flights} />
        <Stack.Screen name="Freight" component={Freight} />
        <Stack.Screen name="Cargo" component={Cargo} />
    </Stack.Navigator>
);