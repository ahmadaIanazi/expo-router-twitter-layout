import { router, useNavigation } from 'expo-router';
import { NavigationProp } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import { Appbar } from '../widgets';
import { View } from 'react-native';

export default function HomeWrapper({ children }) {

  const colors = useTheme();
  const navigation = useNavigation<NavigationProp<DrawerParamList>>();

  const routeToSettings = () => router.push('/(modals)/Alerts');
  const routeToProfile = () => navigation.toggleDrawer();


  return (
    <View style={{ flex: 1 }}>
      <Appbar
        // color
        blur={80}
        logo
        startActions={[{ icon: 'account-circle', onPress: routeToProfile }]}
        endActions={[{ icon: 'bell', onPress: routeToSettings }]}
      />
      {children}
    </View>
  )
}
