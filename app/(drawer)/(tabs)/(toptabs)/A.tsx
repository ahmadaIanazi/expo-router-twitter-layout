import { router, useNavigation } from 'expo-router';
import { bottom } from 'bottoms';
import { Button, Text } from 'react-native-paper';
import { Background } from '../../../../widgets';

export default function ToptabOne() {
  const navigation = useNavigation();

  return (
    <Background>
      <Text variant='displayLarge'>A</Text>
      <Button onPress={() => navigation.toggleDrawer()}>Toggle Drawer</Button>
      <Button onPress={() => router.push('/Settings')}>Open Modal</Button>
      <Button onPress={() => bottom.open('One')}>Open Bottom Sheet</Button>
    </Background>
  );
}
