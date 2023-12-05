import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';

import { useTheme } from 'react-native-paper';
import HomeWrapper from '../../../../components/HomeWrapper';
import TopTabBar from '../../../../components/TopTabBar';

const { Navigator } = createMaterialTopTabNavigator();

export const Toptabs = withLayoutContext<MaterialTopTabNavigationOptions, typeof Navigator>(
  Navigator
);

export default function Toptab_Layout() {

  return (
    <HomeWrapper>
      <ToptabLayout />
    </HomeWrapper>
  ) 
}

const topTabs = [
  { name: 'Feed', options: { title: 'For You', icon: 'account' } },
  { name: 'SecondFeed', options: { title: 'Following' } },
];

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
        tabBarStyle: {
          // blur: true,
          blurIntensity: 80,
          // backgroundColor: 'blue',
        }
      }}
    >
      {topTabs.map((tab, index) => (
        <Toptabs.Screen key={index} name={tab.name} options={tab.options} />
      ))}
    </Toptabs>
  );
}
