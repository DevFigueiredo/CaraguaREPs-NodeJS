import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Text} from 'react-native'


import Login from './src/pages/Login';
import Principal from './routes/bottomMenu.routes';
import Message from './src/pages/Message';

 const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer initialRouteName="Login">
    <AppStack.Navigator screenOptions={{
      headerShown: true,
   }} 
   
  mode="modal"
   >
    
    <AppStack.Screen name="Login" component={Login} options={{headerShown:false}} />
    <AppStack.Screen name="Home" component={Principal} options={{headerShown:false}} />
    <AppStack.Screen name="Message" component={Message} />
 
    </AppStack.Navigator>
    </NavigationContainer>
    
  );
  
}
