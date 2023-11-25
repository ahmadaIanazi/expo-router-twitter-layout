import { Tabs } from 'expo-router';
import { useTheme } from 'react-native-paper';
import BottomTabBar from '../../../components/BottomTabBar';
import { BlurView } from 'expo-blur';

export default function TabLayout() {
  const colors = useTheme()

  return (
    <Tabs
      tabBar={(props) => (<BottomTabBar {...props} />)}
      // safeAreaInsets={{ bottom: 100, }}
      screenOptions={{
        // tabBarStyle: {
        //   backgroundColor: colors.colors.background,
        // },
        tabBarLabelStyle: {
          color: colors.colors.onBackground,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='(toptabs)'
        options={{
          title: 'Home',
          tabBarIcon:'home'
        }}
      />
      <Tabs.Screen
        name='index'
        options={{
          title: 'Explore',
          icon: 'account'
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: 'Tabs',
          icon: 'cog'
        }}
      />
      {/* === Excluded Screens from bottom tabs === href: null */}
      <Tabs.Screen
        name='nested'
        options={{
          href: null,
          icon: 'heart',
          show: false
        }}
      />
    </Tabs>
  );
}
