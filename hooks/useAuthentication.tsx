import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth'; // Ensure you're using the correct import path
import { auth, db } from '../zetup/firebase';
import authNative from '@react-native-firebase/auth';
import { getCurrentUserData } from '../data/get/getUserData';
import { useUserStore } from '../stores/useUserStore';
import { useAuthStore } from '../stores/useAuthStore';
import * as AppleAuthentication from 'expo-apple-authentication';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';


interface User {
  apiKey?: string;
  appName?: string;
  createdAt?: string | undefined;
  displayName?: string | null; // Adjusted to accommodate null
  email?: string | null; // Adjusted to accommodate null
  emailVerified?: boolean;
  isAnonymous?: boolean;
  lastLoginAt?: string | undefined;
  phoneNumber?: string | null; // Adjusted to accommodate null
  photoURL?: string | null; // Adjusted to accommodate null
  providerData?: any[];
  uid: string;
  metadata?: {
    creationTime?: string;
    lastSignInTime?: string;
  } | null; // Adjusted to accommodate null
}

export const useAuthentication = () => {
  const { setUid, setUserId, setUserDoc, setDisplayName, setRole, setMerchantId, byFirebaseNativeAuth } =
    useUserStore();

  const { setLoadingUser, setLoadingUserData, refresh, setAuthCheck, setIsAnonymous } =
    useAuthStore();

  useEffect(() => {
    const handleAuthStateChanged = (user: User | null) => {
      if (user) {
        
        const customUser = {
          createdAt: user?.metadata?.creationTime || undefined,
          displayName: user?.displayName || undefined,
          email: user?.email || undefined,
          emailVerified: user?.emailVerified || false,
          isAnonymous: user?.isAnonymous || false,
          lastLoginAt: user?.metadata?.lastSignInTime || undefined,
          phoneNumber: user?.phoneNumber || undefined,
          photoURL: user?.photoURL || undefined,
          providerData: user?.providerData || [],
          uid: user?.uid || '',
        };
        
        setAuthCheck(true);
        setLoadingUser(false);
        setLoadingUserData(true);
        setUserId(customUser.uid);
        setUid(customUser.uid);
        setUserDoc(customUser);
        setDisplayName(customUser.displayName);

        getCurrentUserData(customUser.uid)
          .then((userData) => {
            
            const userRole = userData?.role || 'cashier';
            const merchantId = userData?.merchantId || '';
            setRole(userRole);
            setMerchantId(merchantId);

            if(userData === undefined){
              console.log('userData === undefined');
              const displayName = user.displayName || '';
              const photoURL = user.photoURL || '';
              const emailVerified = user.emailVerified || false;
              const email = user.email || false;
              const uid = user.uid || '';
              const isAnonymous = user.isAnonymous || false;
              const phoneNumber = user.phoneNumber || '';

              setDoc(doc(db, 'users', uid), {
                displayName,
                email,
                uid,
                joinedData: serverTimestamp(),
                photoURL,
                emailVerified,
                isAnonymous,
                phoneNumber,
                role: 'merchant',
              })
                .then(() => {
                  // authResolve(); // Resolve the inner promise
                  setLoadingUserData(false);

                  console.log('New User Document Created.')
                })
                .catch((err) => {
                  setLoadingUserData(false);

                  console.log('New User Document NOT Created.', err);
                });
            } else {
              setLoadingUserData(false);
              console.log('GOT USER DATA FROM STORE:')


            }

          })
          .catch((err) => {
            console.log('Get Current User Data Failed', err);
            setRole('cashier');
            setLoadingUserData(false);
          });
      } else {
        setIsAnonymous(false);
        setDisplayName(null);
        setAuthCheck(false);
        setUserId(null);
        setLoadingUser(false);
        setLoadingUserData(false);
      }
    };

    setLoadingUser(true);

    if (byFirebaseNativeAuth) {
      const subscriber = authNative().onAuthStateChanged(handleAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    } else {
      const unsubscribe = onAuthStateChanged(auth, handleAuthStateChanged);
      return () => {
        unsubscribe();
      };
    }
  }, [byFirebaseNativeAuth, refresh]);
};
