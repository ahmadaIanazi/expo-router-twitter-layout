import { router, useNavigation } from 'expo-router';
import { bottom } from 'bottoms';
import { Text } from 'react-native-paper';
import { Background, Button } from '../../../../widgets';

export default function ToptabOne() {
  const navigation = useNavigation();

  return (
    <Background>
      <Text variant='displayLarge'>A</Text>
      <Button mode='contained' onPress={() => navigation.toggleDrawer()}>Toggle Drawer</Button>
      <Button mode='contained' onPress={() => router.push('/Settings')}>Open Modal</Button>
      <Button mode='contained' onPress={() => bottom.open('One')}>Open Bottom Sheet</Button>
    </Background>
  );
}
