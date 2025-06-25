// tsrnfs

import { StyleSheet, Text, View} from 'react-native'
import React from 'react'

type Props = {
  item: ImageSliderType;
  index: number;
}

const SliderItem = ({item, index}: Props) =>{
  return(
    <View>
      <Image source={item.image} style={{width: 300, height: 500}}/>
      <Text>{item.title}</Text>
    </View>
}

export default SlideItem

const style = StyleSheet.create({})
