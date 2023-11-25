import { Animated, View } from 'react-native';
import { Text } from 'react-native-paper';
import useAnimatedHeader from '../events/useAnimatedHeader';
import { Main, Safe } from '../widgets';

export default function SecondTabExample() {

  const {
    handleOnScroll
  } = useAnimatedHeader()

  return (
    <View>
      <Animated.FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]} // Replace with your data
        keyExtractor={(item) => item.toString()}
        renderItem={({ item, index }) => {
          const backcolor = index % 2 == 0 ? 'pink' : 'lightgreen'
          return (
            <View style={{ height: 100, width: '100%', backgroundColor: backcolor }} />
          )
        }}
        scrollEventThrottle={16}
        onScroll={handleOnScroll}
        style={{ width: '100%' }}
      />
    </View>
  );
}