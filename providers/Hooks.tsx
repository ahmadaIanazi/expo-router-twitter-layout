import React, { ReactNode } from 'react';

interface HooksProps {
  children: ReactNode;
}

export default function Hooks({ children }: HooksProps): React.JSX.Element {

  return <>{children}</>;
}

interface EmptyProvider {
  children: ReactNode;
}

const Provider = ({ children }: EmptyProvider): React.JSX.Element => {
  return <>{children}</>;
};
