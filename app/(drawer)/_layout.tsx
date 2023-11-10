import React, { useContext } from 'react';
import { Drawer } from 'expo-router/drawer';
import { useTheme } from 'react-native-paper';
import Localization from '../../translations';
import { usePlatformStore } from '../../stores';

export default function Drawer_Layout() {
  const colors = useTheme()
  const l = useContext(Localization)
  const { isWeb } = usePlatformStore();

  return (
    <Drawer screenOptions={{
      headerShown: false,
      drawerPosition: l.position,
      drawerType: isWeb ? 'permanent' : 'slide',
      drawerStyle:{
        width: '10%',
        backgroundColor: colors.colors.background,
      }
    }}>
      <Drawer.Screen
        name='(tabs)' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Back', // This just make sense ! we cannot remove it so we might just use it.
          title: 'Tabs',
          drawerLabelStyle: {
            color: colors.colors.tertiary, // style it to make it standout from the rest items.
          },
        }}
      />

      <Drawer.Screen
        name='index' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Drawer One',
          title: 'Drawer One',
        }}
      />
      <Drawer.Screen
        name='DrawerTwo' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Drawer Two',
          title: 'Drawer Two',
        }}
      />
    </Drawer>
  );
}
