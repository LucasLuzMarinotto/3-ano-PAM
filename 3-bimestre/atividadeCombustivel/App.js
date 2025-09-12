import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';

const [valorAlcool, setValorAlcool] = useState()
const [valorGasolina, setValorGasolina] = useState()
const [melhorCombustivel, setMelhorCombustivel] = useState()
var tipoCombustivel='oi';

const verificar = ()=>{
  const r = valorAlcool / valorGasolina
  setMelhorCombustivel(r)
}

export default function App() {
  return (
    <View style={styles.container}>
      <View>

        <Text>Qual combustível devo abastecer?</Text>

        <View>
          <TextInput
            style={styles.caixaDeTexto}
            placeholder='Digite aqui o valor do álcool'
            placeholderTextColor='#000'

            onChangeText ={text => setValorAlcool(text)}
          />

          <TextInput
            style={styles.caixaDeTexto}
            placeholder='Digite aqui o valor da gasolina'
            placeholderTextColor='#000'

            onChangeText ={text => setValorGasolina(text)}
          />
        </View>

        <Button
        title='Verificar'

        onPress= {()=>verificar()}
        />

        <Text>O combustível que valerá mais a pena é o {tipoCombustivel} que é R${melhorCombustivel} mais barato</Text>
      </View>

      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
});
