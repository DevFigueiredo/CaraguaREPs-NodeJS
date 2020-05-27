import * as React from 'react';
import {Text, View, TextInput,ScrollView, Image, StatusBar } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';


export default function Republics( {navigation} ) {

  return (





<View>

  <StatusBar
                    backgroundColor="#2085A8"
                    barStyle="light-content"
                />
<View style={styles.Navbar}>
<View style={styles.Top}></View>
<View style={styles.container}>
<View style={styles.TopBar}>
<View style={styles.Filter}>
<Image
style={{  width:60, 
  height: '100%'}}
source={require('../../images/TopBar/Filter.png')}
        />
</View>

<View style={styles.Search}>
<TextInput
    maxLength={40}
    style={styles.InputSearch}
    placeholder='Pesquise Pela Republica'
    autoCorrect={false}
  />
  </View>
</View>
</View>
</View>

<ScrollView style={styles.scrollView}>






<View style={styles.Filtered}>
<View style={styles.container}>
<ScrollView horizontal={true}>
<Text style={styles.TextFiltered}>Masculina</Text>
<Text style={styles.TextFiltered}>Casa</Text>
<Text style={styles.TextFiltered}>Loucura</Text>
<Text style={styles.TextFiltered}>Loucura</Text>
<Text style={styles.TextFiltered}>Loucura</Text>
<Text style={styles.TextFiltered}>Teste</Text>
</ScrollView>
</View>
</View>
<View style={styles.container}>






<View style={styles.ListRepublics}>


<View style={styles.Republic}>
  <Text style={styles.RepublicTitle}>
    Republica Coalas Rep
  </Text>
  <View style={styles.ImageRepublicDetail}>
  <Image
  style={styles.ImageRepublic}
  source={require('../../images/RepublicList/RepublicExample.png')}
  />
 </View>
 <View style={styles.RepublicDescription} >
 <View style={styles.RepublicLocationIcon}>
 <Image
 style={{width: 15,height: 18}}
  source={require('../../images/RepublicList/Location.png')}
  />
  </View>
 <View style={styles.RepublicDescriptionText}>
<Text style={{color: '#8F92A1'}}>Caraguatatuba</Text>
 </View>


 <View style={styles.RepublicDescriptionPrice}>
 <Text style={styles.RepublicTextPrice} >R$200,00</Text>
 <Text style={styles.RepublicTextPerMonth} >/Por Mês</Text>
 </View>
 </View>


</View>






<View style={styles.Republic}>
  <Text style={styles.RepublicTitle}>
    Republica Coalas Rep
  </Text>
  <View style={styles.ImageRepublicDetail}>
  <Image
  style={styles.ImageRepublic}
  source={require('../../images/RepublicList/RepublicExample.png')}
  />
 </View>
 <View style={styles.RepublicDescription} >
 <View style={styles.RepublicLocationIcon}>
 <Image
 style={{width: 15,height: 18}}
  source={require('../../images/RepublicList/Location.png')}
  />
  </View>
 <View style={styles.RepublicDescriptionText}>
<Text style={{color: '#8F92A1'}}>Caraguatatuba</Text>
 </View>


 <View style={styles.RepublicDescriptionPrice}>
 <Text style={styles.RepublicTextPrice} >R$200,00</Text>
 <Text style={styles.RepublicTextPerMonth} >/Por Mês</Text>
 </View>
 </View>


</View>




<View style={styles.Republic}>
  <Text style={styles.RepublicTitle}>
    Republica Coalas Rep
  </Text>
  <View style={styles.ImageRepublicDetail}>
  <Image
  style={styles.ImageRepublic}
  source={require('../../images/RepublicList/RepublicExample.png')}
  />
 </View>
 <View style={styles.RepublicDescription} >
 <View style={styles.RepublicLocationIcon}>
 <Image
 style={{width: 15,height: 18}}
  source={require('../../images/RepublicList/Location.png')}
  />
  </View>
 <View style={styles.RepublicDescriptionText}>
<Text style={{color: '#8F92A1'}}>Caraguatatuba</Text>
 </View>


 <View style={styles.RepublicDescriptionPrice}>
 <Text style={styles.RepublicTextPrice} >R$200,00</Text>
 <Text style={styles.RepublicTextPerMonth} >/Por Mês</Text>
 </View>
 </View>


</View>





<View style={styles.Republic}>
  <Text style={styles.RepublicTitle}>
    Republica Coalas Rep
  </Text>
  <View style={styles.ImageRepublicDetail}>
  <Image
  style={styles.ImageRepublic}
  source={require('../../images/RepublicList/RepublicExample.png')}
  />
 </View>
 <View style={styles.RepublicDescription} >
 <View style={styles.RepublicLocationIcon}>
 <Image
 style={{width: 15,height: 18}}
  source={require('../../images/RepublicList/Location.png')}
  />
  </View>
 <View style={styles.RepublicDescriptionText}>
<Text style={{color: '#8F92A1'}}>Caraguatatuba</Text>
 </View>


 <View style={styles.RepublicDescriptionPrice}>
 <Text style={styles.RepublicTextPrice} >R$200,00</Text>
 <Text style={styles.RepublicTextPerMonth} >/Por Mês</Text>
 </View>
 </View>


</View>








</View>

</View>
</ScrollView>

</View>
  )

}