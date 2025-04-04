import React,{useState} from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';

export default function App(){

  const [saldo=30.00, novoSaldo] = useState()

  return (
    <View style={styles.tudo}>

      <View style={styles.caixaV}>
        <View style={styles.caixaB}>
          <Text style={styles.textoPequeno}>Lorem ipsum dolot</Text>
          <Text style={styles.textoGrande}>{saldo}</Text>
        </View>

        <View style={styles.conteiner}>

          <View style={styles.caixaB}>
            <Text style={styles.textoPequeno}>Lorem</Text>
          </View>
          
          <View style={styles.caixaB}>
            <Text style={styles.textoPequeno}>Ipsum</Text>
          </View>

          <View style={styles.caixaB}>
            <Text style={styles.textoPequeno}>Dolot</Text>
          </View>

        </View>
      </View>

      <View style={styles.conteiner}>
        <View>
          <Text style={styles.textoGrande}>Incomes</Text>
          <Text style={styles.textoGrande}>$267</Text>
        </View>
        <View>
          <Text style={styles.textoGrande}>Expenses</Text>
          <Text style={styles.textoGrande}>$255</Text>
        </View>
      </View>

      <Text style={styles.textoPequeno}>Lorem ipsum Dolot at amel consectatuer adpiscing alt, sed dam nonummy nbh lorem ipsum dolot</Text>

    </View>
)};


const styles = StyleSheet.create({
  tudo: {
    backgroundColor:'#fff',
    height: '100%',
    width:'100%'
  },

  conteiner:{
    flex:3,
    flexDirection: 'row',
  },

  caixaV:{
    backgroundColorcolor:'#f00',
    color:'#f00',
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30
  },

  caixaB:{
    backgroundColorcolor:'#fff',
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30
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
