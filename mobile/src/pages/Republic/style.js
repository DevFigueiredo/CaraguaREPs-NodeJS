import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';

  export default StyleSheet.create({
    scrollView:{
        backgroundColor: '#FFF'
     },
     container:{
     paddingHorizontal: 24

     },
     TopInfo:{
      width: '100%',
      flexDirection: 'row',
      paddingBottom: 30,
     },
    Title:{
        paddingTop: 10, 
        width: '70%',
        justifyContent: 'center',
        
    },
    TitleText:{
    fontSize: 20,
    fontFamily: 'RobotoLight',
    fontWeight: 'bold',
    },
    SubTitleText:{
        fontSize: 18,
        fontFamily: 'RobotoLight',
        fontWeight: 'bold',
    },
    RepublicLike:{
    paddingTop: 10, 
    width: '30%',
    justifyContent: 'center',
   },
    RepublicLikeText:{
    fontFamily: 'RobotoLight',
    fontWeight: 'bold',
    backgroundColor: '#18A0FB',
    color: '#FFF',
    textAlign: 'center',
    paddingVertical: 3,
    borderRadius: 15,
    },  
    section:{
        paddingBottom: 20,
    },
    description: {
    fontSize: 13,
    color: '#BCBDC7'
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
  }).catch(
    console.log('Fontes carregadas')
  ),
  
  
  
  );
  