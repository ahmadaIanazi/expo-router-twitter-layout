import React, { ReactNode } from 'react';
import AuthProvider from '../providers/AuthProvider';
import Development from '../providers/Development';
import FirebaseProvider from '../providers/FirebaseProvider';
import Hooks from '../providers/Hooks';
import ThemeProvider from '../providers/ThemeProvider';
import QueryProvider from '../providers/QueryProvider';
import ImportsProvider from '../providers/ImportsProvider';
import AnalyticsProvider from '../providers/AnalyticsProvider';
import UpdateProvider from '../providers/UpdateProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PushNotificationsProvider from '../providers/PushNotificationsProvider';
import { BottomsProvider } from 'bottoms';
import bottoms_layout from './(bottoms)/bottoms_layout';
// import Layout from '@/app/(bottoms)';

interface RootProviderProps {
  children: ReactNode;
}

export default function RootProvider({ children }: RootProviderProps): React.JSX.Element {
  return (
    <>
      <Development>
        <UpdateProvider>
          <ImportsProvider>
            <FirebaseProvider>
              <AuthProvider>
                <Hooks>
                  <QueryProvider>
                    <PushNotificationsProvider>
                      <AnalyticsProvider>
                        <ThemeProvider>
                          <SafeAreaProvider>
                            <BottomsProvider config={bottoms_layout}>
                              <>{children}</>
                            </BottomsProvider>
                          </SafeAreaProvider>
                        </ThemeProvider>
                      </AnalyticsProvider>
                    </PushNotificationsProvider>
                  </QueryProvider>
                </Hooks>
              </AuthProvider>
            </FirebaseProvider>
          </ImportsProvider>
        </UpdateProvider>
      </Development>
    </>
  );
}
