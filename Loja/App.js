import React from 'react';
import {View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Tabs from './navigation/tabs';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "./Pages/Home"
import Settings from "./Pages/Settings"
import { NavigationContainer } from '@react-navigation/native';

const Stack = createBottomTabNavigator()

const App = () => {
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen}/>
      <Stack.Screen name="settings" component={Settings}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
