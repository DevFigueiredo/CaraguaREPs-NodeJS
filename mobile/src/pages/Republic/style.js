import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';

  export default StyleSheet.create({
    scrollView:{
        backgroundColor: '#FFF'
     },
     container:{
     paddingHorizontal: 24,
     backgroundColor: '#FFF'
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
    Icons:{
     width: '100%',
     flexDirection: 'row',
    },
    Icon:{
     width: '25%',
     alignItems: 'center',
     justifyContent: 'flex-end'
    },
    description: {
    fontSize: 13,
    color: '#9698A6'
    },
    TextIcons:{
    fontSize: 12,
    
    color: '#9698A6'

    },
    Comfort:{
        flexDirection: 'row',
    },
    HalfSection:{
        width:'50%',
        alignItems: 'flex-start'    
    },
    CheckBoxContainer:{
        marginLeft: -5,
        backgroundColor: '#FFF',
        borderWidth: 0,
    },
    Share:{
        flexDirection: 'row',
        
    }
    

    
},
  
  
  
  );
 
  