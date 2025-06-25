// tsrnfs

import { StyleSheet, Text, View} from 'react-native'
import React from 'react'

type Props = {
  item: ImageSliderType;
  index: number;
}
// pegar as dimensões espaciais da tela
const {widht} = dimensions.get('screen');

const SliderItem = ({item, index}: Props) =>{
  return(
    <View style={estiloItens.itemContainer>
      <Image source={item.image} style={{width: 300, height: 500}}/>
      <Text>{item.title}</Text>
    </View>
}

export default SlideItem

const estiloIntens = StyleSheet.create({
  justifyContent: 'center',
  alignItens:'center',
  gap: 20,
  widht: widht
})
