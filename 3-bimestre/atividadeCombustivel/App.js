import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';

export default function App() {

const [valorAlcool, setValorAlcool] = useState('')
const [valorGasolina, setValorGasolina] = useState('')
const [melhorCombustivel, setMelhorCombustivel] = useState('')
const [tipoCombustivel, setTipoCombustivel] = useState('')

const verificar = ()=>{
  const r = parseFloat(valorAlcool) / parseFloat(valorGasolina)
  setMelhorCombustivel(r.toFixed(2));

  if (r >= 0.7) {
    setTipoCombustivel('Gasolina');
  } else {
    setTipoCombustivel('Álcool');
  }
}

  return (
    <View style={styles.container}>
      <View>

        <Text>Qual combustível devo abastecer?</Text>

        <View>
          <TextInput
            style={styles.caixaDeTexto}
            placeholder='Digite aqui o valor do álcool'
            placeholderTextColor='#000'
            keyboardType='numeric'

            onChangeText ={text => setValorAlcool(text)}
          />

          <TextInput
            style={styles.caixaDeTexto}
            placeholder='Digite aqui o valor da gasolina'
            placeholderTextColor='#000'
            keyboardType='numeric'

            onChangeText ={text => setValorGasolina(text)}
          />
        </View>

        <Button
        title='Verificar'

        onPress= {()=>verificar()}
        />

        <Text>O combustível que vale mais a pena é: {tipoCombustivel} Índice: {melhorCombustivel}</Text>
      </View>

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
