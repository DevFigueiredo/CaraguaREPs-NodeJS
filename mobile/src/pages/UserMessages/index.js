import * as React from 'react';
import {Text, View, TextInput,ScrollView, Image, ImageBackground } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';


export default function UserMessages( {navigation} ) {

  return (
<ScrollView style={styles.scrollView}>
<Text>Bem vindo as Mensagens</Text>
</ScrollView>

  )

}