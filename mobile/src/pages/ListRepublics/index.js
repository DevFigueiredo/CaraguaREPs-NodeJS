import * as React from 'react';
import {Text, View, TextInput,ScrollView, Image, StatusBar, SafeAreaView, FlatList } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Separator from '../../components/Separator';
var republics = [
  { id: "00", name: "Relâmpago McQueen", price: 200, city:"Caraguatatuba", primary: require("../../images/RepublicList/RepublicExample.png") },
  { id: "01", name: "Agente Tom Mate", price: 250, city:"Caraguatatuba", primary: require("../../images/RepublicList/RepublicExample.png") },
  { id: "02", name: "Doc Hudson", price: 300, city:"Caraguatatuba", primary: require("../../images/RepublicList/RepublicExample.png") },
  { id: "04", name: "Coalas Ramirez", price: 450, city:"Caraguatatuba", primary: require("../../images/RepublicList/RepublicExample.png") },
  { id: "05", name: "Rep do Além", price: 450, city:"Caraguatatuba", primary: require("../../images/RepublicList/RepublicExample.png") },
  { id: "06", name: "Os caras", price: 450, city:"Caraguatatuba", primary: require("../../images/RepublicList/RepublicExample.png") },
  { id: "07", name: "As minas", price: 470, city:"Caraguatatuba", primary: require("../../images/RepublicList/RepublicExample.png") },
  { id: "08", name: "As mi2nas", price: 470, city:"Caraguatatuba", primary: require("../../images/RepublicList/RepublicExample.png") },
];

var filters = [
  {id: "01", name:"Masculino"},
  {id: "02", name:"Feminino"},
  {id: "03", name:"Casa"},
  {id: "04", name:"Apartamento"},
  {id: "05", name:"4 pessoas"},
  {id: "06", name:"Quintal"},
  {id: "07", name:"2 Banheiros"},
];


function Republic({data}){
  var results = Object.keys(data).length;
  var image;
  return (
    <SafeAreaView style={styles.scrollView}>

    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return (
          
          <View style={styles.Republic}>
          <Text style={styles.RepublicTitle}>
            {item.name}
          </Text>
          <View style={styles.ImageRepublicDetail}>
          <Image
          style={styles.ImageRepublic}
          source={item.primary}
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
        <Text style={{color: '#8F92A1'}}>{item.city}</Text>
         </View>
        
        
         <View style={styles.RepublicDescriptionPrice}>
         <Text style={styles.RepublicTextPrice} >R${item.price},00</Text>
         <Text style={styles.RepublicTextPerMonth} >/Por Mês</Text>
         </View>
         </View>
        </View>
        );
      }}
    />
    
  </SafeAreaView>
  );
  
}

function Filter ({data}){
return(

  <FlatList
    showsHorizontalScrollIndicator={false}
    data={data}
    horizontal={true}
    keyExtractor={item => item.id}
    renderItem={({ item }) => {
      return (
<Text style={styles.TextFiltered}>{item.name}</Text>
      );
    }}
  />



  
);
}

export default function ListRepublics( {navigation} ) {

  return (

<View>
<StatusBar/>
<View style={styles.Navbar}>

<Separator space={10}/>

<View style={styles.container}>

<View style={styles.TopBar}>
<View style={styles.Filter}>
<Image style={styles.FilterImage} source={require('../../images/TopBar/Filter.png')}/>
</View>

<View style={styles.Search}>
<TextInput maxLength={40} style={styles.InputSearch} placeholder='Pesquise Pela Republica' />
</View>

</View>
</View>
</View>


<View style={styles.Filtered}>
<View style={styles.container}>

<Filter data={filters}/>

</View>
</View>



<View style={styles.container}>
<View style={styles.ListRepublics}>

<Republic data = {republics}/>

</View>
</View>


<Separator space={60}/>
</View>
  )

}