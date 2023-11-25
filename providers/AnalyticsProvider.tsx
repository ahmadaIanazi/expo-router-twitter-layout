// import { enableTracking, disableTracking, identifyDevice } from 'vexo-analytics';
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';
import React, { ReactNode, useEffect } from 'react';
import { useUserStore } from '../stores';
import { useAuthStore } from '../stores';
import * as Device from 'expo-device';
import { providers_config } from '../zetup/providers_setup';

interface AnalyticsProviderProps {
  children: ReactNode;
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps): React.JSX.Element {

  // const { user } = useUserStore();
  // const { authCheck } = useAuthStore();

  // const isDevice = Device?.isDevice

  // useEffect(() => {
  //   async function setupTracking() {
  //     if (isDevice){
  //       setTimeout(async () => {
  //         const { granted } = await requestTrackingPermissionsAsync();

  //         if (granted) {
  //           if (
  //             authCheck !== null &&
  //             authCheck !== undefined &&
  //             authCheck === true &&
  //             user?.uid !== null &&
  //             user?.uid !== undefined
  //           ) {
  //             const email = user?.email || 'anonymousEmail'
  //             const uid = user?.uid
  //             const id = uid + email
  //             await identifyDevice(id);
  //           }
  //           await enableTracking();
  //         } else {
  //           await disableTracking();
  //           // await disableTracking();
  //         }
  //       }, 1000);
  //     } else {
  //       return
  //     }
  //   }

  //   setupTracking(); // Call the async function immediately
  // }, []);

  return <>{children}</>;
}

interface EmptyProvider {
  children: ReactNode;
}

const Provider = ({ children }: EmptyProvider): React.JSX.Element => {
  return <>{children}</>;
};
