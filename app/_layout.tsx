import analytics from '@react-native-firebase/analytics'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useFonts } from 'expo-font'
import { SplashScreen, usePathname } from 'expo-router'
import { useEffect } from 'react'
import Providers from './providers'
import Routing from './routings'
import { SpaceMono } from '../global/require'
import NullScreen from '../boards/Global/NullScreen'
import { RouteNames } from './_layout/constants'
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: RouteNames.landingRoute,
}

// vexo('4514361e-dfe9-4962-a4ab-c4d593823222')

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const pathname = usePathname()

  const [loaded, error] = useFonts({
    SpaceMono: SpaceMono,
    ...FontAwesome.font,
  })

  useEffect(() => {
    console.log('#2 ROOT ERROR', error)
    if (error) throw error
  }, [error])

  useEffect(() => {
    const logScreenView = async () => {
      try {
        console.log('#2.1 ROOT ANALYTICS')
        await analytics().logScreenView({
          screen_name: pathname,
          screen_class: pathname,
        })
      } catch (err: any) {
        console.error(err)
      }
    }
    logScreenView()
  }, [pathname])

  useEffect(() => {
    if (loaded) {
      console.log('#6 ROOT HIDE NULL SCREEN')
      SplashScreen.hideAsync()
    } else {
      console.log('#3 ROOT DONT HIDE NULL SCREEN')
    }
  }, [loaded])

  if (!loaded) {
    console.log('#1 ROOT RETURN NULL')
    return <NullScreen />
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  return (
    <Providers>
      <Routing />
    </Providers>
  )
}
