import React, { ReactNode, useEffect } from 'react';
import { usePushNotifications } from '../hooks/usePushNotifications';
import { useAuthStore, useUserStore } from '../stores';
import { useNotificationStore } from '../stores/useNotificationStore';
import * as Notifications from 'expo-notifications';

interface PushNotificationsProps {
  children: ReactNode;
}

export default function PushNotificationsProvider({
  children,
}: PushNotificationsProps): React.JSX.Element {
  const expoPushToken = usePushNotifications()?.expoPushToken;
  const { setIsNotificationRoute, setNotificationRoute } = useNotificationStore();
  const { setUserPushToken } = useUserStore();
  useEffect(()=>{
    // Add this effect to handle notification response
    const responseListener = Notifications.addNotificationResponseReceivedListener((response) => {
      const notificationData = response.notification.request.content.data;
      if (notificationData !== null && notificationData.route !== null) {
        setNotificationRoute(notificationData.route);
        setIsNotificationRoute(true)
      }
    });

    // Now expoPushToken can be safely used
    console.log(expoPushToken);
    setUserPushToken(expoPushToken)

    return () => {
      Notifications.removeNotificationSubscription(responseListener);
    };
  },[])

  return <>{children}</>;
}