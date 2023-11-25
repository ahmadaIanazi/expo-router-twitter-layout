import React, { ReactNode } from 'react';
import { useAuthentication } from '../hooks/useAuthentication';
import { providers_config } from '../zetup/providers_setup';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps): React.JSX.Element => {

  if (providers_config.auth_provider) {
    return <AuthProviderOn>{children}</AuthProviderOn>
  } else {

    return <>{children}</>;
  }

};

const AuthProviderOn = ({ children }: AuthProviderProps): React.JSX.Element => {

  useAuthentication();
  return <>{children}</>;
};

export default AuthProvider;
