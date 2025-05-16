import React,{useState} from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';

export default function App(){

  return (
    <View style={styles.tudo}>

      <View>
        <View>
          <Text>Outback</Text>
        </View>

        <View>
          <Text>Nossos Produtos</Text>
          <Text>Restaurantes</Text>
          <Text>Espera Digital</Text>
          <Text>Vale-Presente</Text>
          <Text>Delivery</Text>
        </View>
      </View>

      <View>
        <Text>Explore o seu</Text>
        <Text>Momento Outback</Text>
      </View>

      <View>
        <Text>Menu Principal</Text>
        <Text>Lunch Menu</Text>
        <Text>Billabong hour</Text>
        <Text>Kids menu</Text>
        <Text>Bebidas</Text>
        <Text>Sobremesas</Text>
      </View>

    </View>
)};


const styles = StyleSheet.create({

  tudo: {
    backgroundColor:'#fff',
    height: '100%',
    width:'100%'
  },

  textoPequeno:{
    color:'#000',
    fontSize:15,
    textAlign:'center',
    marginTop:30
  },

  textoGrande:{
    color:'#000',
    fontSize:30,
    textAlign:'center',
    marginTop:30
  }
});
