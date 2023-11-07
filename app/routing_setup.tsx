import { router, useSegments } from 'expo-router';
import { useEffect } from 'react';
import Layout from './layout_setup';

export default function Routing() {
  // Define your screen routes here
  const onboard_screen = '/(onboard)/Introduction';
  const landing_screen = '/(onboard)/Welcome';
  const home_screen = '/(drawer)/(tabs)/';
  const home_group = '(drawer)';

  // ======= !IMPORTANT: Replace these with your actual authentication and loading logic
  const isLoaded = true;    // Toggle it to see screens.
  const isSignedIn = false;  // Toggle it to see screens.
  const seenOnboard = false;    // Toggle it to see screens.
  /**
   * EXAMPLE
   *   const isSignedIn = authCheck === true;
   *   const isLoaded = loadingUser === false && loadingUserData === false;
   */
  // ====== !End Region

  // Get the current route segment
  const segment = useSegments();

  useEffect(() => {
    if (!isLoaded) return;

    const isRoutesGroups = segment[0] === home_group;
    console.log('CURRENT ROUTE SEGMENT:', segment[0])

    if (isSignedIn && !isRoutesGroups) {
      const navigateTo = seenOnboard ? home_screen : onboard_screen;
      router.replace(navigateTo);
    } else if (!isSignedIn) {
      const navigateTo = seenOnboard ? landing_screen : onboard_screen;
      router.replace(navigateTo);
    }
  }, [isSignedIn, isLoaded, seenOnboard]);

  return <Layout />
}

