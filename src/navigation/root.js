import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import List from '../screens/list';
import Details from '../screens/details';

const Stack = createStackNavigator();

/**
 * Represents a root navigation.
 * @AppNavigator
 */

export const AppNavigator = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="List" component={List}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Details" component={Details}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
);