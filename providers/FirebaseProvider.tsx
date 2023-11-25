import React, { ReactNode, useEffect } from 'react';
import { firebase, isFirebaseConnected } from '../zetup/firebase';
import { useAuthStore } from '../stores';

interface FirebaseProviderProps {
  children: ReactNode;
}

export default function FirebaseProvider({ children }: FirebaseProviderProps): React.JSX.Element {

  firebase();
  const firebaseConnected = isFirebaseConnected();
  const { setIsOffline } = useAuthStore()

  useEffect(()=>{
    if (!firebaseConnected) {
      console.log('#4.1 Firebase: User is OFFLINE');
      setIsOffline(true);
      // Handle the case where Firebase engine is not connected, maybe show an error message or take appropriate action
    } else {
      console.log('#4.1 Firebase: User is ONLINE');
      setIsOffline(false);
      // Firebase engine is connected, you can proceed with authentication or other operations
    }
  },[])
  return <>{children}</>;
}

interface EmptyProvider {
  children: ReactNode;
}

const Provider = ({ children }: EmptyProvider): React.JSX.Element => {
  return <>{children}</>;
};
