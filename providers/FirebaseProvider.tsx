import React, { ReactNode } from 'react';
import { firebase } from '../zetup/firebase';

interface FirebaseProviderProps {
  children: ReactNode;
}

export default function FirebaseProvider({ children }: FirebaseProviderProps): React.JSX.Element {

  firebase();
  return <>{children}</>;
}
