import { Dimensions, Image, View } from 'react-native';
import { Text } from 'react-native-paper';

export default function OnboardSlider({ item }) {
  const { height, width } = Dimensions.get('screen');

  return (
    <View style={{ alignItems: 'center', width: width }}>
      <View style={{ marginTop: height * 0.07 }}>
        <Text variant='headlineMedium'>{item.title}</Text>
      </View>
      <Image style={{ width: height * 0.403, height: height * 0.403 }} source={item.image} />
      <View style={{ marginTop: height * 0.035, marginHorizontal: height * 0.035 }}>
        <Text variant='bodyMedium'>{item.subtitle}</Text>
      </View>
    </View>
  );
}
