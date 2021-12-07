import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './routes';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   RobotoThin: require('./src/assets/fonts/Roboto-Thin.ttf'),
  //   RobotoLight: require('./src/assets/fonts/Roboto-Light.ttf'),
  //   RobotoBlack: require('./src/assets/fonts/Roboto-Black.ttf'),
  //   RobotoMedium: require('./src/assets/fonts/Roboto-Medium.ttf'),
  //   MontserratSemiBold: require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
  //   MontserratMedium: require('./src/assets/fonts/Montserrat-Medium.ttf'),
  //   MontserratRegular: require('./src/assets/fonts/Montserrat-Regular.ttf'),
  // });
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {
  return <Routes />;
  // }
}
