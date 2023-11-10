import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import Providers from './providers_setup';
import Routing from './routing_setup';
import { SpaceMono } from '../zetup/require';
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: SpaceMono,
    ...FontAwesome.font,
  });

  useEffect(() => {
    console.log('#2 ROOT ERROR', error);
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      console.log('#6 ROOT LOADING EFFECT');
      SplashScreen.hideAsync();
    } else {
      console.log('#3 ROOT NOT LOADED');
    }
  }, [loaded]);

  if (!loaded) {
    console.log('#1 ROOT RETURN NULL');
    return <></>;
  }


  return <RootLayoutNav />;
}

function RootLayoutNav() {

  return (
    <Providers>
      <Routing />
    </Providers>
  );
}
