import React, { ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps): React.JSX.Element => {

  useAuth();
  return <>{children}</>;
};

export default AuthProvider;
