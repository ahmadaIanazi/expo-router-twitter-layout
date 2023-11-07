import React from 'react';
import { Drawer } from 'expo-router/drawer';

export default function Drawer_Layout() {

  return (
    <Drawer>
      <Drawer.Screen
        name='(tabs)' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Back', // This just make sense ! we cannot remove it so we might just use it.
          title: 'Tabs',
          drawerLabelStyle: {
            color: 'pink', // style it to make it standout from the rest items.
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

/** ========= TABS NAVIGATION ========= */
// import { Stack, Tabs } from 'expo-router';
// import React from 'react';
// import { BlurView } from 'expo-blur';
// import { StyleSheet } from 'react-native';
// import { Icon, useTheme } from 'react-native-paper';

// export default function Tabs_Layout() {
//   const colors = useTheme()

//   const mode = colors.mode
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,

//         tabBarActiveTintColor: colors.colors.primary,
//         tabBarInactiveTintColor: colors.colors.secondary,
//         tabBarShowLabel: true,
//         tabBarStyle: [
//           {
//             position: 'absolute',
//             elevation: 0,
//             borderRadius: 20,
//             height: 60,
//           },
//         ],
//         // tabBarBackground: () => (
//         //   <BlurView tint={mode} intensity={100} style={StyleSheet.absoluteFill} />
//         // ),
//       }}
//     >
//       <Tabs.Screen
//         name='Home'
//         options={{
//           tabBarIcon: ({ color, focused }) => <Icon source='heart' size={focused ? 32 : 24} color={color} />,
//         }}
//       />
//       <Tabs.Screen name='List' />
//       <Tabs.Screen name='Tiktok' />
//       <Tabs.Screen name='post' options={{ href: null }} />
//     </Tabs>
//   );
// }

/** ========= TOPBAR NAVIGATION ========= */
/**
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<MaterialTopTabNavigationOptions, typeof Navigator>(
  Navigator
);

export default function Home_Layout() {
  return (
    <MaterialTopTabs title='what'>
      <MaterialTopTabs.Screen name='Home' />
    </MaterialTopTabs>
  )
}
 ========= END */

/** ========= DRAWER NAVIGATION ========= */
/**
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Drawer } from 'expo-router/drawer';

export default function Home_Layout() {
  return (
    <Drawer
    screenOptions={{
      drawerAllowFontScaling: true,
      drawerActiveBackgroundColor: '#000',
      drawerContentContainerStyle:{
        backdropFilter:'#555'
      }
    }}
    >
      <Drawer.Screen
        name='Home' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Home',
          title: 'overview',
        }}
      />
      <Drawer.Screen
        name='List' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'User',
          title: 'overview',
        }}
      />
    </Drawer>
  );
}
 ========= END */
