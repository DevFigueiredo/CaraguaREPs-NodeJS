import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Republics from './src/pages/Republics';
import Login from './src/pages/Login/indexs';

// import BottomMenu from './routes/bottomMenu.routes';

 const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer initialRouteName="Login">
    <AppStack.Navigator screenOptions={{headerShown: false}}>
    
    <AppStack.Screen name="Republics" component={Republics} />
    <AppStack.Screen name="Home" component={Login} />
    <AppStack.Screen name="Republics" component={Republics} />

    </AppStack.Navigator>
    </NavigationContainer>
    
  );
  
}
