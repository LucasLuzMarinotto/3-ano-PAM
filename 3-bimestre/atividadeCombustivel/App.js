import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {

  const [valorAlcool, setValorAlcool] = useState('');
  const [valorGasolina, setValorGasolina] = useState('');
  const [melhorCombustivel, setMelhorCombustivel] = useState('');
  const [tipoCombustivel, setTipoCombustivel] = useState('');

  const verificar = () => {
    const r = parseFloat(valorAlcool) / parseFloat(valorGasolina);
    setMelhorCombustivel(r.toFixed(2));

    if (r >= 0.7) {
      setTipoCombustivel('Gasolina');
    } else {
      setTipoCombustivel('Álcool');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qual combustível devo abastecer?</Text>

      <TextInput
        style={styles.caixaDeTexto}
        placeholder='Digite o valor do álcool'
        placeholderTextColor='#b5b5b5'
        keyboardType='numeric'
        onChangeText={text => setValorAlcool(text)}
      />

      <TextInput
        style={styles.caixaDeTexto}
        placeholder='Digite o valor da gasolina'
        placeholderTextColor='#b5b5b5'
        keyboardType='numeric'
        onChangeText={text => setValorGasolina(text)}
      />

      <TouchableOpacity style={styles.button} onPress={verificar}>
        <Text style={styles.buttonText}>Verificar</Text>
      </TouchableOpacity>

      {tipoCombustivel && (
        <Text style={styles.resultado}>
          O combustível que vale mais a pena é: {tipoCombustivel} (Índice: {melhorCombustivel})
        </Text>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2c3e50',
  },
  caixaDeTexto: {
    width: '100%',
    maxWidth: 300,
    height: 45,
    borderColor: '#bdc3c7',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingLeft: 15,
    marginVertical: 10,
    backgroundColor: '#ecf0f1',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 20,
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 18,
    color: '#27ae60',
    fontWeight: 'bold',
    marginTop: 20,
  },
});
