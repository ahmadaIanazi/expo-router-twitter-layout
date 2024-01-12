import { Stack } from 'expo-router';

const screens = [
  { name: 'index', options: { headerShown: false, animation: 'fade' } },
  { name: '(drawer)', options: { headerShown: false, animation: 'fade' } },
  { name: '(loading)/LoadingUser', options: { headerShown: false, animation: 'fade' } },
  { name: '(loading)/LoadingApp', options: { headerShown: false, animation: 'fade' } },
  { name: '(onboard)/Introduction', options: { headerShown: false, animation: 'fade' } },
  { name: '(onboard)/Welcome', options: { headerShown: false, animation: 'fade_from_bottom' } },
  { name: '(auth)/Login', options: { headerShown: false, animation: 'default' } },
  { name: '(auth)/LoginByPhone', options: { headerShown: false, animation: 'fade' } },
  { name: '(auth)/Register', options: { headerShown: false, animation: 'default' } },
  { name: '(auth)/Reset', options: { headerShown: false, animation: 'default' } },
  { name: '(modals)/[access]', options: { presentation: 'fullScreenModal', animation: 'default' } },
  { name: '(modals)/modal', options: { presentation: 'modal' } },
  { name: '(modals)/Settings', options: { presentation: 'modal' } },
  { name: '(modals)/Terms', options: { presentation: 'modal' } },
  { name: '(modals)/Help', options: { presentation: 'modal' } },
  { name: '(modals)/About', options: { presentation: 'modal' } },
  { name: '(modals)/Authentication', options: { presentation: 'modal' } },
  { name: '(modals)/Alerts', options: { presentation: 'containedTransparentModal', animation: 'fade' } },
  { name: '(modals)/Popup', options: { presentation: 'containedTransparentModal', animation: 'fade' } },
];

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {screens.map((screen, index) => (
        <Stack.Screen key={index} name={screen.name} options={screen.options} />
      ))}
    </Stack>
  );
}
