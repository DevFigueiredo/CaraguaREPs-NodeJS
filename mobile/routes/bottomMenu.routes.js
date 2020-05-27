import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Text, View} from 'react-native';
import Republics from '../src/pages/Republics';
import User from '../src/pages/User';
// // import UserMessages from '../src/pages/UserMessages';

function WindowsComponent ({title}){
 return (<Text>{title}</Text>)
}


const Tab = createMaterialBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator >
      <Tab.Screen
      initialRouteName="Home"
      name="Repúblicas" component={Republics} 
      options={{
        tabBarLabel: 'Repúblicas',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
        
      }}
      
      />
      <Tab.Screen
        name="Profile"
        component={User}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen
        name="Message"
        component={User}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
       
    </Tab.Navigator>
  );
}