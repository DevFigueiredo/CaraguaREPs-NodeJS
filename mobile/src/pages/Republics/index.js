import * as React from 'react';
import {Text, View, TextInput,ScrollView, Image, StatusBar, SafeAreaView, FlatList } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

function Separator({space}){
 return(<View style={{height: space}}></View>)
}
var republics = [
  { id: "00", name: "Relâmpago McQueen", price: 200, city:"Caraguatatuba" },
  { id: "01", name: "Agente Tom Mate", price: 250, city:"Caraguatatuba" },
  { id: "02", name: "Doc Hudson", price: 300, city:"Caraguatatuba" },
  { id: "04", name: "Coalas Ramirez", price: 450, city:"Caraguatatuba" },
  { id: "05", name: "Rep do Além", price: 450, city:"Caraguatatuba" },
  { id: "06", name: "Os caras", price: 450, city:"Caraguatatuba" },
  { id: "07", name: "As minas", price: 450, city:"Caraguatatuba" },
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
<Text style={styles.TextFiltered}>Masculina</Text>
      );
    }}
  />



  
);
}

export default function Republics( {navigation} ) {

  return (
<View>
<StatusBar backgroundColor="#2085A8" barStyle="light-content" />

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

<Republic data = {republics}></Republic>

</View>
</View>


<Separator space={60}/>
</View>
  )

}