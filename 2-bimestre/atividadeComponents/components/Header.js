import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (


        <View style={styles.header}>
                <Text>Outback</Text>
                <Text>Nossos Produtos</Text>
                <Text>Restaurantes</Text>
                <Text>Espera Digital</Text>
                <Text>Vale-Presente</Text>
                <Text>Delivery</Text>
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