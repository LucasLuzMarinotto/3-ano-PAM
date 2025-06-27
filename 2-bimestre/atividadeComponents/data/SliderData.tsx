import{ ImageSourcePropType } from "react-native";

export type Props = {

}

export type ImageSliderType = {
    title: string;
    image: ImageSourcePropType;
    description: string;
};

export const ImageSlider = [
    {
      title: 'imagem1',
      image: require('../src/imagens/img_carousel1.png'),
      description: 'primeira imagem do slider'
    },
    {
      title: 'imagem2',
      image: require('../src/imagens/img_carousel2.png'),
      description: 'segunda imagem do slider'
    }
]
