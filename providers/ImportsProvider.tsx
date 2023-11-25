import 'react-native-gesture-handler'; // KEEP AT TOP ! 🛑
import React, { ReactNode } from 'react';

interface ImportsProviderProps {
  children: ReactNode;
}

export default function ImportsProvider({ children }: ImportsProviderProps): React.JSX.Element {


  return <>{children}</>;
}

interface EmptyProvider {
  children: ReactNode;
}

const Provider = ({ children }: EmptyProvider): React.JSX.Element => {
  return <>{children}</>;
};
