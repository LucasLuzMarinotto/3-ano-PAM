import React,{useState} from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';

export default function App(){

  const [n1, setN1] = useState()
  const [n2, setN2] = useState()
  const [resultado, setResultado] = useState()

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
  tudo: {
    backgroundColor:'#000',
    height: '100%',
    width:'100%'
  },

  titulo: {
    color:'#00f',
    fontSize:25,
    textAlign:'center',
    marginTop:25,
    marginBottom:10
  },

  caixaDeTexto:{
    borderWidth:1,
    borderColor:'#0ff',
    color:'#0ff',
    borderRadius:40,
    paddingLeft:25,
    height:60
  },

  resposta:{
    color:'#fff',
    fontSize:25,
    textAlign:'center',
    marginTop:30
  }
});
