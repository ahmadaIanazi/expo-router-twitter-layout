import React, { ReactNode } from 'react';
import { useAuthentication } from '../hooks/useAuthentication';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps): React.JSX.Element => {

  useAuthentication();
  return <>{children}</>;
};

export default AuthProvider;
