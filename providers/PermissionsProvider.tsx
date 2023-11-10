import React, { ReactNode, useEffect, useRef } from 'react';
import { Platform, View, Dimensions, Text } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

interface PermissionsProviderProps {
  children: ReactNode;
}

export default function PermissionsProvider({ children }: PermissionsProviderProps): React.JSX.Element {
  //   const notificationListener = useRef();
  //   const responseListener = useRef();
  //   // Running Notifications in foreground.
  //   Notifications.setNotificationHandler({
  //     handleNotification: async () => {
  //       return {
  //         shouldShowAlert: true,
  //         shouldPlaySound: false,
  //         shouldSetBadge: false,
  //       };
  //     },
  //   });
  //   // Running Permissions for Notifications in Background
  //   useEffect(() => {
  //     Permissions.getAsync(Permissions.NOTIFICATIONS)
  //       .then((statusObj) => {
  //         if (statusObj.status !== 'granted') {
  //           return Permissions.askAsync(Permissions.NOTIFICATIONS);
  //         }
  //         return statusObj;
  //       })
  //       .then((statusObj) => {
  //         if (statusObj.status !== 'granted') {
  //           return;
  //         }
  //       });
  //   }, []);

  //   useEffect(() => {
  //     registerForPushNotificationsAsync().then((token) => setExpoPushToken(token));
  //     notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
  //       // setNotification(notification);
  //     });
  //     responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
  //       // console.log(response);
  //     });
  //     return () => {
  //       Notifications.removeNotificationSubscription(notificationListener.current);
  //       Notifications.removeNotificationSubscription(responseListener.current);
  //     };
  //   }, []);
  //   async function schedulePushNotification() {
  //     await Notifications.scheduleNotificationAsync({
  //       content: {
  //         title: "You've got mail! 📬",
  //         body: 'Here is the notification body',
  //         data: { data: 'goes here' },
  //       },
  //       trigger: { seconds: 2 },
  //     });
  //   }

  //   async function registerForPushNotificationsAsync() {
  //     let token;

  //     if (Platform.OS === 'android') {
  //       await Notifications.setNotificationChannelAsync('default', {
  //         name: 'default',
  //         importance: Notifications.AndroidImportance.MAX,
  //         vibrationPattern: [0, 250, 250, 250],
  //         lightColor: '#FF231F7C',
  //       });
  //     }

  //     if (Device.isDevice) {
  //       const { status: existingStatus } = await Notifications.getPermissionsAsync();
  //       let finalStatus = existingStatus;
  //       if (existingStatus !== 'granted') {
  //         const { status } = await Notifications.requestPermissionsAsync();
  //         finalStatus = status;
  //       }
  //       if (finalStatus !== 'granted') {
  //         alert('Failed to get push token for push notification!');
  //         return;
  //       }
  //       token = (await Notifications.getExpoPushTokenAsync()).data;
  //       console.log(token);
  //     } else {
  //       alert('Must use physical device for Push Notifications');
  //     }

  //     return token;
  //   }

  return <>{children}</>;
}