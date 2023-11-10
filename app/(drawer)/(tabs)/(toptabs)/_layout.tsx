import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import { router, useNavigation, withLayoutContext } from 'expo-router';

import { useTheme } from 'react-native-paper';
import { Appbar, View } from '../../../../widgets';
import { NavigationProp } from '@react-navigation/native';

const { Navigator } = createMaterialTopTabNavigator();

export const Toptabs = withLayoutContext<MaterialTopTabNavigationOptions, typeof Navigator>(
  Navigator
);

export default function Toptab_Layout() {
  const colors = useTheme();
  const navigation = useNavigation<NavigationProp<DrawerParamList>>();

  const routeToSettings = () => router.push('/(modals)/Settings');
  const routeToProfile = () => navigation.toggleDrawer();

  return (
    <View s='f'>
      <Appbar
        logo
        startActions={[{ icon: 'account-circle', onPress: routeToProfile }]}
        endActions={[{ icon: 'cog', onPress: routeToSettings }]}
      />
      <ToptabLayout />
    </View>
  );
}

function ToptabLayout() {
  const colors = useTheme();
  return (
    <Toptabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.colors.background,
        },
        tabBarLabelStyle: {
          color: colors.colors.onBackground,
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.colors.primary,
        },
      }}
    >
      <Toptabs.Screen name='A' />
      <Toptabs.Screen name='B' />
    </Toptabs>
  );
}
