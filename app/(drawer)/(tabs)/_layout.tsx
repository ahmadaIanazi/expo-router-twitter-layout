import { Tabs } from 'expo-router';
import { useTheme } from 'react-native-paper';
import BottomTabBar from '../../../components/BottomTabBar';

const tabs = [
  { name: '(home)', options: { title: 'Home', tabBarIcon: 'home' } },
  { name: 'Action', options: { title: 'Explore', icon: 'account' } },
  { name: 'Activity', options: { title: 'Tabs', icon: 'cart' } },
  { name: 'nested', options: { show: false } },
];


export default function TabLayout() {
  const colors = useTheme()

  return (
    <Tabs
      tabBar={(props) => (<BottomTabBar {...props} />)}
      screenOptions={{
        tabBarLabelStyle: {
          color: colors.colors.onBackground,
        },
        headerShown: false,
      }}
    >
      {tabs.map((tab, index) => (
        <Tabs.Screen key={index} name={tab.name} options={tab.options} />
      ))}
    </Tabs>
  );
}
