import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Box, Flex, Stack, Wrap, Selector} from "react-native-flex-layout";

export default function App() {
  return (
    <View style={styles.tudo}>

      <View Style={styles.header}>
          <Text style={styles.textoGrande}>Outback Steakhouse</Text>

          <Text style={styles.textoPequeno}>Nossos Produtos</Text>
          <Text style={styles.textoPequeno}>Restaurantes</Text>
          <Text style={styles.textoPequeno}>Espera Digital</Text>
          <Text style={styles.textoPequeno}>Vale-Presente</Text>
          <Text style={styles.textoPequeno}>Delivery</Text>
      </View>

      <View>
        <Text style={styles.textoGrande}>Explore o seu</Text>
        <Text style={styles.textoGrande}>Momento Outback</Text>
      </View>

      <View>
        <Text style={styles.textoPequeno}>Menu Principal</Text>
        <Text style={styles.textoPequeno}>Lunch Menu</Text>
        <Text style={styles.textoPequeno}>Billabong hour</Text>
        <Text style={styles.textoPequeno}>Kids menu</Text>
        <Text style={styles.textoPequeno}>Bebidas</Text>
        <Text style={styles.textoPequeno}>Sobremesas</Text>
      </View>

    </View>
)};

const styles = StyleSheet.create({

  tudo: {
    backgroundColor:'#fff',
    flex:1,
    height: '100%',
    width:'100%'
  },

  header:{
    backgroundColor:'#ff6400',
    color:'#ff6400',
    flex:1,
    flexDirection: 'row',
    width:'100%',
    height:'20%'
  },

  textoPequeno:{
    color:'#000000',
    fontSize:15,
    textAlign:'center',
    marginTop:30
  },

  textoGrande:{
    color:'#000000',
    fontSize:30,
    textAlign:'center',
    marginTop:30
  }

});
