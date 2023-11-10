import { router, useSegments } from 'expo-router';
import { useEffect } from 'react';
import Layout from './layout_setup';
import { useAuthStore, useNavigationStore } from '../stores';
import { onboard_screen,
landing_screen,
home_screen,
home_group} from '../zetup/routing_setup'

export default function Routing() {

  const { loadingUser, loadingUserData, authCheck } = useAuthStore();
  const { seenOnboard } = useNavigationStore();

  const isSignedIn = authCheck === true;
  const isLoaded = loadingUser === false && loadingUserData === false;

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

