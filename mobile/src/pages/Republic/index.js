import * as React from 'react';
import {Text, View,ScrollView, ImageBackground, TouchableHighlight, SafeAreaView   } from 'react-native';
import styles from './style';
import { SliderBox } from "react-native-image-slider-box";

// style={{width: '100%', height: '100%', minHeight: 200 ,maxHeight: 300}}

var infoRepublic = {
  title: 'Republica do povo',
  description: 'teste',
  republic_like: '',
  rules: '',
  address:'',
  republic_person_perfil: '',
  contact: '',
  capacity: '',
  quantidy_bedroom: '',
  quantidy_bathroom: '',

  images: [
    require('../../images/RepublicList/RepublicExample2.jpg'),
    require('../../images/RepublicList/RepublicExample3.jpg'),
    require('../../images/RepublicList/RepublicExample4.jpg'),
    ]

}


export default function Republic( {navigation} ) {

  return (
<SafeAreaView>
  <View>
<SliderBox
  images={infoRepublic.images}
  sliderBoxHeight={280}
  ImageComponentStyle={{borderBottomLeftRadius: 24, borderBottomRightRadius: 24}}
/>
</View>
 <View style={styles.container}>

<View style={styles.TopInfo} >  

<View style={styles.Title}>
<Text style={styles.TitleText}>Republica de Exemplo</Text>
</View>

<View style={styles.RepublicLike}>
<Text style={styles.RepublicLikeText}>Feminina</Text>

</View>
</View>

<View style={styles.section}>
<Text style={styles.SubTitleText}>Descrição</Text>
<Text style={styles.description}>Minha descrição</Text>
</View>

<View style={styles.section}>
<Text style={styles.SubTitleText}>Descrição</Text>
</View>

</View> 
 </SafeAreaView>

  );

}