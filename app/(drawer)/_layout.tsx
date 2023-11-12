/* ===== EXPO DRAWE ===== */

import { Drawer } from 'expo-router/drawer';
import React, { useContext } from 'react';
import { Icon, useTheme } from 'react-native-paper';
import DrawerContainer from '../../components/DrawerContainer';
import useResponsive from '../../hooks/useResponsive';
import Localization from '../../translations';
import { router } from 'expo-router';

const Screens = [
  // {
  //   name: '(tabs)',
  //   title: 'Home',
  //   icon: 'home-outline',
  // },
  {
    name: 'index',
    title: 'Drawer One',
    icon: 'bell-outline',
  },
  {
    name: 'DrawerTwo',
    title: 'Drawer Two',
    icon: 'heart-outline',
  },
];

export const lists = [
  {
    title: 'Settings',
    items: [
      {
      title: 'Settings',
      icon: 'cog',
      onPress: () => {router.push('/(modals)/Settings')},
    },
      {
      title: 'Help Center',
      icon: 'lifebuoy',
      onPress: () => {router.push('/(drawer)/(tabs)/(toptabs)/B')},
    },
      {
      title: 'About us',
      icon: 'information',
      onPress: () => {router.push('/(drawer)/(tabs)/(toptabs)/B')},
    },
  ]
  },
];

export default function Drawer_Layout() {
  const colors = useTheme();
  const l = useContext(Localization);
  const { drawerType, drawerWidth } = useResponsive();

  return (
    <Drawer
      drawerContent={(props) => <DrawerContainer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: l.position,
        drawerType: drawerType,
        overlayColor: colors.colors.backdrop,
        drawerActiveBackgroundColor: colors.colors.background,
        drawerActiveTintColor: colors.colors.background,
        drawerInactiveBackgroundColor: colors.colors.background,
        drawerInactiveTintColor: colors.colors.background,

        drawerStyle: {
          width: drawerWidth,
          backgroundColor: colors.colors.background,
        },
      }}
    >
      {Screens.map((screen) => {
        return (
          <Drawer.Screen
            key={screen.name}
            name={screen.name}
            options={{
              drawerLabel: screen.title,
              drawerActiveTintColor: colors.colors.primary,
              drawerLabelStyle: {
                color: colors.colors.onBackground,
                fontSize: 20,
                fontWeight: 'bold',
              },
              drawerAllowFontScaling: true,
              drawerIcon(props) {
                return <Icon source={screen.icon} size={24} color={colors.colors.onBackground} />;
              },
            }}
          />
        );
      })}
    </Drawer>
  );
}
