// tsrnfs

import { StyleSheet, Text, View, Dimensions, Image} from 'react-native'
import React from 'react'
import { ImageSliderType } from '../data/SliderData.tsx'

// pegar as dimensões espaciais da tela
const {widht} = Dimensions.get('screen');

const SliderItem = ({item, index}) =>{
  return(
    <View style={estiloItens.itemContainer}>
      <Image source={item.image} style={{width: 300, height: 500}}/>
    </View>
  )
}

export default SliderItem;

const estiloItens = StyleSheet.create({
  itemContainer: {
  justifyContent: 'center',
  alignItens:'center',
  gap: 20,
  widht: widht
  }
})
