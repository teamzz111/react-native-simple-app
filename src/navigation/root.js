import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

import Home from '../screens/home';

const Stack = createStackNavigator();

export const AppNavigator = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
        options={{
          headerShown: false,
          title: 'HOME',
          headerStyle: {
            backgroundColor: 'white',
            
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            alignSelf: 'center'
          },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
);