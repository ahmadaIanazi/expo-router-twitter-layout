import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name='index' />
      <Tabs.Screen name='two' />
      {/* === Excluded Screebs from bottom tabs === href: null */}
      <Tabs.Screen
        name='post'
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
