import { Drawer } from 'expo-router/drawer';
import React, { useContext } from 'react';
import { Icon, useTheme } from 'react-native-paper';
import DrawerContainer from '../../components/DrawerContainer';
import useResponsive from '../../hooks/useResponsive';
import Localization from '../../translations';
import { Drawers, lists } from '../_layout/layout';

export default function Drawer_Layout() {
  const colors = useTheme();
  const l = useContext(Localization);
  const { drawer } = useResponsive();

  return (
    <Drawer
      drawerContent={(props) => {
        const otherProps = { lists, ...props }
        return <DrawerContainer {...otherProps} />
      }}
      screenOptions={{
        headerShown: false,
        drawerPosition: l.position,
        drawerType: drawer.drawerType,
        overlayColor: colors.colors.backdrop,
        drawerActiveBackgroundColor: colors.colors.background,
        drawerActiveTintColor: colors.colors.background,
        drawerInactiveBackgroundColor: colors.colors.background,
        drawerInactiveTintColor: colors.colors.background,

        drawerStyle: {
          width: drawer.drawerWidth,
          backgroundColor: colors.colors.background,
        },
      }}
    >
      {Drawers.map((screen) => {
        return (
          <Drawer.Screen
            key={screen.name}
            name={screen.name}
            options={{
              drawerLabel: drawer.showLabel ? screen.title : '',
              drawerActiveTintColor: colors.colors.primary,
              drawerLabelStyle: {
                color: colors.colors.onBackground,
                fontSize: 20,
                fontWeight: 'bold',
              },
              drawerAllowFontScaling: true,
              drawerIcon(props) {
                return (
                  <Icon
                    source={screen.icon}
                    size={24}
                    color={colors.colors.onBackground}
                  />
                )
              },
            }}
          />
        )
      })}
    </Drawer>
  )
}
