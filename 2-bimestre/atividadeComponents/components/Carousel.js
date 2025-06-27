import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { ImageSlider } from '../data/SliderData.tsx';
import { SliderItem } from './SliderItem';

export default function Carousel() {
  return (
    <View>
        <FlatList 
        data={ImageSlider}
        renderItem={({item,index}) => (
          <SliderItem item={item} />
        )}
        horizontal
        showHorizontalScrollIndicator={false}
        pagingEnabled
        />
    </View>
  );
};

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
