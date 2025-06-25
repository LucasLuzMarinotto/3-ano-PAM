import{ ImageSourcePropsType } from "react-native";

type ImageSliderType = {
    title: string;
    image: ImageSourcePropsType;
    description: string;
};

const ImageSlider = [
    {
      title: 'imagem1',
      image: require('@/src/imagens/img_carousel.png'),
      description: 'primeira imagem do slider'
    }
    {
      title: 'imagem2',
      image: require('@/src/imagens/img_carouse2.png'),
      description: 'segunda imagem do slider'
    }
]
