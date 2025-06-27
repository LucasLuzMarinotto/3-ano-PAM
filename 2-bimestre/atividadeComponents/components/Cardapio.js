import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Cardapio() {
  return (
    <View>
        <View>
            <Text>Explore o seu</Text>
            <Text>Momento Outback</Text>
        </View>

        <View>
            <Text>Menu Principal</Text>
            <Text>Lunch Menu</Text>
            <Text>Billabong hour</Text>
            <Text>Kids menu</Text>
            <Text>Bebidas</Text>
            <Text>Sobremesas</Text>
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
  header: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    
  },
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