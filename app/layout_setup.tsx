import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* ==== DEFINE SCREENS ==== */}
      {/* ---- # Essentials  */}
      <Stack.Screen name='index' options={{ headerShown: false, animation: 'default' }} />
      <Stack.Screen name='(drawer)' options={{ headerShown: false, animation: 'default' }} />
      {/* ---- # Loading  */}
      <Stack.Screen
        name='(loading)/LoadingUser'
        options={{ headerShown: false, animation: 'default' }}
      />
      <Stack.Screen
        name='(loading)/LoadingApp'
        options={{ headerShown: false, animation: 'default' }}
      />
      {/* ---- # Onboard  */}
      <Stack.Screen
        name='(onboard)/Introduction'
        options={{ headerShown: false, animation: 'fade' }}
      />
      <Stack.Screen
        name='(onboard)/Welcome'
        options={{ headerShown: false, animation: 'fade_from_bottom' }}
      />
      {/* ---- # Authentication  */}
      <Stack.Screen name='(auth)/Login' options={{ headerShown: false, animation: 'default' }} />
      <Stack.Screen
        name='(auth)/LoginByPhone'
        options={{ headerShown: false, animation: 'fade' }}
      />
      <Stack.Screen name='(auth)/Register' options={{ headerShown: false, animation: 'default' }} />
      <Stack.Screen name='(auth)/Reset' options={{ headerShown: false, animation: 'default' }} />
      {/* ---- # Permissions  */}
      <Stack.Screen
        name='(modals)/[access]'
        options={{ presentation: 'fullScreenModal', animation: 'default' }}
      />
      {/* ---- # Modals  */}
      <Stack.Screen name='(modals)/modal' options={{ presentation: 'modal' }} />
      <Stack.Screen name='(modals)/Settings' options={{ presentation: 'modal' }} />
      <Stack.Screen name='(modals)/Terms' options={{ presentation: 'modal' }} />
      <Stack.Screen name='(modals)/Help' options={{ presentation: 'modal' }} />
      <Stack.Screen name='(modals)/About' options={{ presentation: 'modal' }} />
    </Stack>
  );
}
