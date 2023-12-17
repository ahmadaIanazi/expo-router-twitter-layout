import { initializeApp } from 'firebase/app';
import {
  CACHE_SIZE_UNLIMITED,
  getFirestore,
  initializeFirestore,
  persistentLocalCache,
  persistentSingleTabManager,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';
import { getAnalytics } from 'firebase/analytics';
import { getRemoteConfig } from 'firebase/remote-config';

import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_apiKey,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_authDomain,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_projectId,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_storageBucket,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_messagingSenderId,
  appId: process.env.EXPO_PUBLIC_FIREBASE_appId,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_measurementId,
};

export const fire = initializeApp(firebaseConfig);

export const auth = initializeAuth(fire, {
  persistence: getReactNativePersistence(AsyncStorage),
});
auth.languageCode = 'ar'

export function firebase() {
  fire
    ? fire && console.log('#4 Firebase: Engine Started.')
    : console.log('#4 Firebase: Engine Not Working.');
}

export function isFirebaseConnected() {
  return fire !== undefined && fire.options && fire.options.databaseURL !== undefined;
}

/* Firestore */
// export const db = getFirestore(fire);

/* Firestore with Offline Access */
export const db = initializeFirestore(fire, {
  localCache: persistentLocalCache({
    cacheSizeBytes: CACHE_SIZE_UNLIMITED
  }),
});

/* Initialize Fire Storage */
export const storage = getStorage();

/* Initialize Firebase  || (Doesnt work for Expo Go) */
// export const analytics = getAnalytics(fire);

/* Initialize Remote Config || (Doesnt work for Expo Go) */
// export const remote = getRemoteConfig(fire);

/* Initialize Functions */
export const functions = getFunctions(fire);
