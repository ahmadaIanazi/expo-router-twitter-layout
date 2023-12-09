import { router, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { useAuthStore, useScreensStore } from '../stores';
import { useNotificationStore } from '../stores/useNotificationStore';
import Layout from './layout_setup';
import { RouteNames } from '../app/_layout/constants';

export default function Routing() {
  const { loadingUser, loadingUserData, authCheck } = useAuthStore();
  const { isNotificationRoute, notificationRoute } = useNotificationStore();
  const { seenOnboard } = useScreensStore();
  const isSignedIn = authCheck === true;
  const isLoaded = loadingUser === false && loadingUserData === false;
  const isLoadingApp = loadingUser === true
  const isLoadingUser = loadingUserData === true;

  // Get the current route segment
  const segment = useSegments();

  useEffect(() => {
    // if (!isLoaded) return;

    const isRoutesGroups = segment[0] === RouteNames.homeRouteGroup;

    console.log('segment[0]', segment[0])
    let navigateTo: any;
    switch (true) {
      case isLoadingApp:
        console.log('Loading App');
        navigateTo = RouteNames.loading_app;
        break;
      case isLoadingUser:
        console.log('Loading User');
        navigateTo = RouteNames.loading_user;
        break;
      case !seenOnboard:
        console.log('TO ONBOARD SCREEN')
        navigateTo = RouteNames.onboard_screen;
        break;
        case !isSignedIn:
        console.log('TO LANDING SCREEN')
        navigateTo = RouteNames.landingRoute;
        break;
        case isSignedIn && !isRoutesGroups:
        console.log('TO HOME')
        navigateTo = RouteNames.homeRoute;
        break;
        case isSignedIn && isRoutesGroups:
        console.log('TO HOME')
        navigateTo = RouteNames.homeRoute;
        break;
      default:
        break;
    }

    !isNotificationRoute ? router.replace(navigateTo) : router.push(notificationRoute);
  }, [isSignedIn, isLoaded, seenOnboard, isLoadingApp, isLoadingUser]);

  return <Layout />;
}
