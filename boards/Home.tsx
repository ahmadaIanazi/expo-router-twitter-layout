import { router, useNavigation } from 'expo-router';

import { NavigationProp } from '@react-navigation/native';
import { Text } from 'react-native-paper';
import { Appbar, Main } from '../widgets';

export default function Home() {

  const navigation = useNavigation<NavigationProp<DrawerParamList>>();
  
  const routeToSettings = () => router.push('/(modals)/Settings');
  const routeToProfile = () => navigation.toggleDrawer();

  return (
    <>
      <Appbar
        logo
        startActions={[{ icon: 'account-circle', onPress: routeToProfile }]}
        endActions={[{ icon: 'cog', onPress: routeToSettings }]}
        />
      <Main safe='top'>
        <Text variant='displayLarge'>Home</Text>
      </Main>
    </>
  );
}