import { Text } from 'react-native-paper'
import { View } from '../widgets';

export default function One() {
  console.log('#----- Examples TRIGGERED.');
  return (
    <View s='f c'>
      <Text variant='displayLarge'>One</Text>
    </View>
  )
}