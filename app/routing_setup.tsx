import { router, useSegments } from 'expo-router'
import { useEffect } from 'react'
import { useAuthStore, useDevStore, useScreensStore } from '../stores'
import { useNotificationStore } from '../stores/useNotificationStore'
import Layout from './layout_setup'
import { RouteNames } from '../app/_layout/constants'

export default function Routing() {
  const { loadingUser, loadingUserData, authCheck } = useAuthStore()
  const { isNotificationRoute, notificationRoute } = useNotificationStore()
  const { seenOnboard } = useScreensStore()
  const isSignedIn = authCheck === true
  const isLoaded = loadingUser === false && loadingUserData === false
  const isLoadingApp = loadingUser === true
  const isLoadingUser = loadingUserData === true

  // Get the current route segment
  const segment = useSegments()
  const { count, inc } = useDevStore()

  useEffect(() => {
    console.log('============== ROUTING ===========', count)

    // if (!isLoaded) return;

    const isRoutesGroups = segment[0] === RouteNames.homeRouteGroup

    let navigateTo: any
    switch (true) {
      case isLoadingApp:
        console.log('= Loading App')
        navigateTo = RouteNames.loading_app
        break
      case isLoadingUser:
        console.log('= Loading User')
        navigateTo = RouteNames.loading_user
        break
      case !seenOnboard:
        console.log('= !seenOnboard TO ONBOARD SCREEN')
        navigateTo = RouteNames.onboard_screen
        break
      case !isSignedIn:
        console.log('= !isSignedIn TO LANDING SCREEN')
        navigateTo = RouteNames.homeRoute
        break
      case isSignedIn && !isRoutesGroups:
        console.log('= isSignedIn && !isRoutesGroups TO HOME')
        navigateTo = RouteNames.homeRoute
        break
      case isSignedIn && isRoutesGroups:
        console.log('= isSignedIn && isRoutesGroups TO HOME')
        navigateTo = RouteNames.homeRoute
        break
      default:
        console.log('= TO DEFAULT')
        navigateTo = RouteNames.homeRoute
        break
    }

    !isNotificationRoute
      ? router.replace(navigateTo)
      : router.push(notificationRoute)

    console.log('= segment[0]', segment[0])
    console.log('= isSignedIn :', isSignedIn)
    console.log('= isLoaded :', isLoaded)
    console.log('= seenOnboard :', seenOnboard)
    console.log('= isLoadingApp :', isLoadingApp)
    console.log('= isLoadingUser :', isLoadingUser)
    console.log('__________________________________')
    console.log('__________________________________')
    inc()

  }, [isSignedIn, seenOnboard, isLoadingUser])

  return <Layout />
}
