import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
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
      {/* === Excluded Screebs from bottom tabs === href: null */}
      <Tabs.Screen
        name='nested'
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
