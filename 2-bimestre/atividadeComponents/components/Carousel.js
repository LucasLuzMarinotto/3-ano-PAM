import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function carousel() {
  return (
    <View>
        <FlatList 
         data={imageSlider}
         renderItem={({item,index}) => <SliderItem item={item} index={index}
         horizontal
         showHorizontalScrollIndicator={false}
         pagingEnabled
         />
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
  containerRow: {
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
