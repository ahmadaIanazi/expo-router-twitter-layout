import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';

const { Navigator } = createMaterialTopTabNavigator();

export const Toptabs = withLayoutContext<MaterialTopTabNavigationOptions, typeof Navigator>(
  Navigator
);

export default function Home_Layout() {
  return (
    <Toptabs >
      <Toptabs.Screen name='A' />
      <Toptabs.Screen name='B' />
    </Toptabs>
  )
}

