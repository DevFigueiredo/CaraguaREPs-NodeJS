import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
function WildCard({title}){
  return <Text>WildCard {title}</Text>
}

const Tab = createBottomTabNavigator();

export default function bottomMenu() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Page1" component={()=><WildCard title="Page1"/>} />
      <Tab.Screen name="Page2" component={()=><WildCard title="Page2"/>} />
    </Tab.Navigator>
  );
}