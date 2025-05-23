import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (


        <View>
            <View>
                <Text>Outback</Text>
            </View>

            <View>
                <Text>Nossos Produtos</Text>
                <Text>Restaurantes</Text>
                <Text>Espera Digital</Text>
                <Text>Vale-Presente</Text>
                <Text>Delivery</Text>
            </View>
        </View>

  );
}

const styles = StyleSheet.create({
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