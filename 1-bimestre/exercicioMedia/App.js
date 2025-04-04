import React,{useState} from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';

export default function App(){

  const [n1, setN1] = useState()
  const [n2, setN2] = useState()
  const [n3, setN3] = useState()
  const [n4, setN4] = useState()
  const [aprovar, setAprovar] = useState()
  const [resultado, setResultado] = useState()

  const media = ()=>{
    const r = (parseInt(n1) + parseInt(n2) + parseFloat(n3) + parseFloat(n4)) / 4
    setResultado(r)

    if(resultado < 6){
      setAprovar('Reprovado')
    }else{
      setAprovar('Aprovado')
    }
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
        <Text>Segundo número:</Text>
        <TextInput 
          style={styles.caixaDeTexto}
          placeholder='Digite aqui o terceiro número'
          placeholderTextColor='#0ff'
          keyboardType={'numeric'}

          onChangeText ={text => setN3(text)}
        />
      </View>

      <View style={{margin:15}}>
        <Text>Segundo número:</Text>
        <TextInput 
          style={styles.caixaDeTexto}
          placeholder='Digite aqui o quarto número'
          placeholderTextColor='#0ff'
          keyboardType={'numeric'}

          onChangeText ={text => setN4(text)}
        />
      </View>

      <View style={{margin:15}}>
        <Button
          title='Calcular a média'

          onPress= {()=>media()}
        />
      </View>
      
      <View>
        <Text style={styles.resposta}> Total da média: {resultado}</Text>
      </View>

      <View>
        <Text style={styles.resposta}> Você foi: {aprovar}</Text>
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
