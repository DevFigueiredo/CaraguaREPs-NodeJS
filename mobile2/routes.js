import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './src/pages/Home';
import Republics from './src/pages/Republics';
 const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer initialRouteName="Home">
    <AppStack.Navigator screenOptions={{headerShown: false}}>
    
    <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="Republics" component={Republics} />

    </AppStack.Navigator>
    </NavigationContainer>
    
  );
  
}
