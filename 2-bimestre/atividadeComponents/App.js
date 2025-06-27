import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Header from './components/Header.js';
import Cardapio from './components/Cardapio.js';
import Carousel from './components/Carousel.js'

export default function App() {
  return (
      <View style={styles.container}>

        <Header/>

        <Carousel/>
    
        <Cardapio/>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerRow: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tudo: {
    backgroundColor:'#fff',
  },

  itemContainer: {
    justifyContent: 'center',
    alignItens:'center',
    gap: 20,
    widht: widht
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