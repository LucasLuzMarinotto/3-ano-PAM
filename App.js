import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { ScrollView } from 'react-native-web';
import React,{useState} from 'react';

export default function App() {

  const [n1, setN1] = useState()
  const [n2, setN2] = useSTate()

  const somar = ()=>{
    const r = parseInt(n1) + parseInt(n2)
    setResultado(r)
  }

  return (
    <View style={styles.tudo}>

      <View>
        <Text style={styles.titulo}> Somando dois valores</Text>
      </View>

      <View style={{margin:15}}>
        <Text>Primeiro número:</Text>
        <TextInput 
          style={styles.caixaDeTexto}
          placeholder='Digite aqui o primeiro número'
          placeholderTextColor='#0ff'
          autoFocus={true}
          keyboardType={'numeric'}

          onChangeText ={text => setN1(text)}
        />
      </View>

      <View style={{margin:15}}>
        <Text>Segundo número:</Text>
        <TextInput 
          style={styles.caixaDeTexto}
          placeholder='Digite aqui o segundo número'
          placeholderTextColor='#0ff'
          keyboardType={'numeric'}

          onChangeText ={text => setN2(text)}
        />
      </View>

      <View style={{margin:15}}>
        <Button
          title='somar os números'

          onPress= {()=>somar()}
        />
      </View>
      
      <View>
        <Text style={styles.resposta}> Total da soma: {resultado}</Text>
      </View>

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
