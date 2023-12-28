import React, { ReactNode, ComponentType, ReactElement } from 'react'
import AuthProvider from '../providers/AuthProvider'
import Development from '../providers/Development'
import FirebaseProvider from '../providers/FirebaseProvider'
import Hooks from '../providers/Hooks'
import ThemeProvider from '../providers/ThemeProvider'
import QueryProvider from '../providers/QueryProvider'
import ImportsProvider from '../providers/ImportsProvider'
import AnalyticsProvider from '../providers/AnalyticsProvider'
import UpdateProvider from '../providers/UpdateProvider'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import PushNotificationsProvider from '../providers/PushNotificationsProvider'
import { BottomsProvider } from 'bottoms'
import bottoms_layout from './(bottoms)/bottoms_layout'

interface RootProviderProps {
  children: ReactNode
}

type ProviderItem = [ComponentType<any>, any?]

const buildProvidersTree = (
  providers: ProviderItem[],
  children: ReactNode
): ReactElement => {
  return providers.reduceRight<ReactNode>((acc, [Provider, props]) => {
    const element = <Provider {...(props ?? {})}>{acc}</Provider>
    return element
  }, children) as ReactElement
}

export default function RootProvider({
  children,
}: RootProviderProps): ReactElement {
  const providerComponents: ProviderItem[] = [
    [Development],
    [UpdateProvider],
    [ImportsProvider],
    [FirebaseProvider],
    [AuthProvider],
    [Hooks],
    [QueryProvider],
    [PushNotificationsProvider],
    [AnalyticsProvider],
    [ThemeProvider],
    [SafeAreaProvider],
    [BottomsProvider, { config: bottoms_layout }],
  ]

  const ProvidersTree = buildProvidersTree(providerComponents, children)

  return <>{ProvidersTree}</>
}
