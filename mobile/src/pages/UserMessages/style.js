import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';

  export default StyleSheet.create({
    scrollView:{
        backgroundColor: '#FFF',
        width: "100%",
        height: "100%",
        
     },
  

},
   Font.loadAsync({
    RobotoThin: {
      uri: require('../../assets/fonts/Roboto-Thin.ttf'),
    },
    RobotoLight: {
        uri: require('../../assets/fonts/Roboto-Light.ttf'),
    },
    RobotoBlack: {
        uri: require('../../assets/fonts/Roboto-Black.ttf'),
    },
    RobotoMedium: {
      uri: require('../../assets/fonts/Roboto-Medium.ttf'),
  },
  MontserratSemiBold:{
    uri: require('../../assets/fonts/Montserrat-SemiBold.ttf'), 
  },
  MontserratMedium:{
    uri: require('../../assets/fonts/Montserrat-Medium.ttf'),
  },

  MontserratRegular:{
    uri: require('../../assets/fonts/Montserrat-Regular.ttf'),
  }
    
  
  })
  
  
  );
  