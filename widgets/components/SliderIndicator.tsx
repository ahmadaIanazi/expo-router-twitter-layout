import { Dimensions, View } from 'react-native';
import { useTheme } from 'react-native-paper';

const { height } = Dimensions.get('window');

export default function SliderIndicator({ currentSlideIndex, index }) {

  const colors = useTheme()
  return (
    <View
      style={[
        currentSlideIndex == index
          ? {
              marginHorizontal: 7,
              height: height * 0.0355,
              width: height * 0.0355,
              borderRadius: 15,
              backgroundColor: colors.colors.onBackground,
            }
          : {
              marginHorizontal: 7,
              height: height * 0.0355,
              width: height * 0.0355,
              borderRadius: 15,
              borderWidth: 4,
              borderColor: colors.colors.onBackground,
            },
      ]}
    />
  );
};