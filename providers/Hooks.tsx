import React, { ReactNode } from 'react';

interface HooksProps {
  children: ReactNode;
}

export default function Hooks({ children }: HooksProps): React.JSX.Element {

  return <>{children}</>;
}
