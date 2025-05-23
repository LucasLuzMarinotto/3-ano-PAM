import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src./components/Header.js';
import { Cardapio } from './src./components/Cardapio.js'

export default function App() {
  return (
    <View style={styles.tudo}>

      <Header/>

      <Cardapio/>

    </View>
  );
}

const styles = StyleSheet.create({
  tudo: {
    backgroundColor:'#fff',
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
