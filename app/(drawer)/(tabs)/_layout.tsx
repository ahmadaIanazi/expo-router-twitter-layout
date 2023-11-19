import { Tabs } from 'expo-router';
import { useTheme } from 'react-native-paper';

export default function TabLayout() {
  const colors = useTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.colors.background,
        },
        tabBarLabelStyle: {
          color: colors.colors.onBackground,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='(toptabs)'
        options={{
          title: 'Top Tabs',
        }}
      />
      <Tabs.Screen
        name='index'
        options={{
          title: 'Bottom',
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: 'Tabs',
        }}
      />
      {/* === Excluded Screens from bottom tabs === href: null */}
      <Tabs.Screen
        name='nested'
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
