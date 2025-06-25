import{ ImageSourcePropsType } from "react-native";

type ImageSliderType = {
    title: string;
    image: ImageSourcePropsType;
    description: string;
};

const ImageSlider = [
    {
      title: 'imagem1',
      image: require(@/src/imagens/)
    }
]
