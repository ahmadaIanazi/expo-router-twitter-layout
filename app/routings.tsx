import { router, useSegments } from 'expo-router'
import { useEffect } from 'react'
import {
  useAuthStore,
  useDevStore,
  useFlowStore,
} from '../stores'
import { useNotificationStore } from '../stores/notification'
import Layout from './layouts'
import { routes } from './_layout/constants'
import { flowState } from '../stores/flow'

export default function Routing() {
  const { loadingUser, loadingUserData, authCheck } = useAuthStore()
  const { isNotificationRoute, notificationRoute } = useNotificationStore()
  const { flows, hydrated } = useFlowStore()

  const isSignedIn = authCheck === true
  const isLoaded = loadingUser === false && loadingUserData === false
  const isLoadingApp = loadingUser === true
  const isLoadingUser = loadingUserData === true

  // Get the current route segment
  const segment = useSegments()
  const { count, inc } = useDevStore()

  useEffect(() => {
    console.log('============== ROUTING ===========', count)

    if (!isLoaded) return;

    const isRoutesGroups = segment[0] === routes.homeGroup

    let navigateTo
    switch (true) {
      case isLoadingApp:
        console.log('= Loading App')
        navigateTo = routes.loadingApp
        break
      case isLoadingUser:
        console.log('= Loading User')
        navigateTo = routes.loadingUser
        break
      case hydrated && flows.onboarding === flowState.NOT_STARTED:
        console.log('= !seenOnboard TO ONBOARD SCREEN')
        navigateTo = routes.onboarding
        break
      case !isSignedIn:
        console.log('= !isSignedIn TO LANDING SCREEN')
        navigateTo = routes.home
        break
      case isSignedIn && !isRoutesGroups:
        console.log('= isSignedIn && !isRoutesGroups TO HOME')
        navigateTo = routes.home
        break
      case isSignedIn && isRoutesGroups:
        console.log('= isSignedIn && isRoutesGroups TO HOME')
        navigateTo = routes.home
        break
      default:
        console.log('= TO DEFAULT')
        navigateTo = routes.home
        break
    }

    !isNotificationRoute
      ? router.replace(navigateTo)
      : router.push(notificationRoute)

    console.log('= segment[0]', segment[0])
    console.log('= isSignedIn :', isSignedIn)
    console.log('= isLoaded :', isLoaded)
    console.log('= flows.onboarding :', flows.onboarding)
    console.log('= isLoadingApp :', isLoadingApp)
    console.log('= isLoadingUser :', isLoadingUser)
    console.log('__________________________________')
    console.log('__________________________________')
    inc()
  }, [isSignedIn, flows, isLoadingUser])

  return <Layout />
}
