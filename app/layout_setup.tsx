import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* ==== DEFINE SCREENS ==== */}
      {/* ---- # Essentials  */}
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='(drawer)' options={{ headerShown: false }} />
      {/* ---- # Onboard  */}
      <Stack.Screen name='(onboard)/Introduction' options={{ headerShown: false }} />
      <Stack.Screen name='(onboard)/Welcome' options={{ headerShown: false }} />
      {/* ---- # Authentication  */}
      <Stack.Screen name='(auth)/Login' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)/Register' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)/Reset' options={{ headerShown: false }} />
      {/* ---- # Modals  */}
      <Stack.Screen name='(modals)/modal' options={{ presentation: 'modal' }} />
    </Stack>
  );
}
