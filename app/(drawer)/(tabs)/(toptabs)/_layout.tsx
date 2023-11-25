import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import { router, useNavigation, withLayoutContext } from 'expo-router';

import { NavigationProp } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import TopTabBar from '../../../../components/TopTabBar';
import { Appbar, Safe, View } from '../../../../widgets';

const { Navigator } = createMaterialTopTabNavigator();

export const Toptabs = withLayoutContext<MaterialTopTabNavigationOptions, typeof Navigator>(
  Navigator
);

export default function Toptab_Layout() {

  const colors = useTheme();
  const navigation = useNavigation<NavigationProp<DrawerParamList>>();

  const routeToSettings = () => router.push('/(modals)/Alerts');
  const routeToProfile = () => navigation.toggleDrawer();

  return (
    <View s='f'>
      <Appbar
        // color
        blur={80}
        logo
        startActions={[{ icon: 'account-circle', onPress: routeToProfile }]}
        endActions={[{ icon: 'bell', onPress: routeToSettings }]}
      />
      {/* <Safe safe='header' flex> */}
        <ToptabLayout />
      {/* </Safe> */}
    </View>
  );
}

function ToptabLayout() {
  const colors = useTheme();

  return (
    <Toptabs
      tabBar={(props) => (<TopTabBar {...props} />)}
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: colors.colors.primary,
          height: 2
        },
        tabBarStyle:{
          // blur: true,
          blurIntensity: 80,
          // backgroundColor: 'blue',
        }
      }}
    >
      <Toptabs.Screen name='A'
        options={{
          title: 'For You'
        }}
      />
      <Toptabs.Screen name='B'
        options={{ title: 'Following' }}
      />
    </Toptabs>
  );
}
