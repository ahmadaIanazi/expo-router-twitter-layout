import { useEffect } from 'react';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth'; // Ensure you're using the correct import path
import { auth } from '../zetup/firebase';
import { getCurrentUserData } from '../data/get/getUserData';
import { useUserStore } from '../stores/useUserStore';
import { useAuthStore } from '../stores/useAuthStore';

interface User {
  apiKey?: string;
  appName?: string;
  createdAt?: string;
  displayName?: string;
  email?: string;
  emailVerified?: boolean;
  isAnonymous?: boolean;
  lastLoginAt?: string;
  phoneNumber?: string;
  photoURL?: string;
  providerData?: any[];
  uid: string;
}

export const useAuth = () => {
  const { setUid, setUserId, setUserDoc, setDisplayName, setRole, setMerchantId } = useUserStore();
  const { setLoadingUser,setLoadingUserData,  refresh, setAuthCheck, setIsAnonymous } = useAuthStore();

  useEffect(() => {
    setLoadingUser(true)
    setLoadingUserData(true);
    const unsubscribe = onAuthStateChanged(auth, (user: FirebaseUser | null) => {
      if (user) {
        const customUser: User = {
          // apiKey: user?.apiKey || undefined,
          // appName: user?.appName || undefined,
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
        setUserId(customUser.uid);
        setUid(customUser.uid);
        setUserDoc(customUser);
        setDisplayName(customUser.displayName);

        getCurrentUserData(customUser.uid)
          .then((userData) => {
            const userRole = userData?.role || 'cashier';
            const merchantId = userData?.merchantId || ''
            setRole(userRole);
            setMerchantId(merchantId);
            setLoadingUserData(false);
          })
          .catch((err) => {
            console.log('Get Current User Data Failed', err);
            setRole('cashier');
          });
      } else {
        console.log('===== AUTH LISTENER =====: No User');
        setIsAnonymous(false);
        setDisplayName(null);
        setAuthCheck(false);
        setUserId(null);
        setLoadingUser(false);
        setLoadingUserData(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [refresh]);
};
