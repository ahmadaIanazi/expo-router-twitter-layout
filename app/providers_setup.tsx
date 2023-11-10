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
// import { BottomsProvider } from 'bottoms';
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
                  {/* <QueryProvider> */}
                  <AnalyticsProvider>
                    <ThemeProvider>
                      <SafeAreaProvider>
                        {/* <BottomsProvider config={Layout}> */}
                        <>{children}</>
                        {/* </BottomsProvider> */}
                      </SafeAreaProvider>
                    </ThemeProvider>
                  </AnalyticsProvider>
                  {/* </QueryProvider> */}
                </Hooks>
              </AuthProvider>
            </FirebaseProvider>
          </ImportsProvider>
        </UpdateProvider>
      </Development>
    </>
  );
}
