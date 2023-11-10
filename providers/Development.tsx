import React, { ReactNode } from 'react';
import { LogBox } from 'react-native';

interface DevelopmentProps {
  children: ReactNode;
}

export default function Development({ children }: DevelopmentProps): React.JSX.Element {
  // console.disableYellowBox = true;

  LogBox.ignoreLogs([
    'Warning: Each',
    'Warning: Failed',
    'Warning: Encountered',
    'No Native',
    'undefined',
    'null is not an object',
    'Non-serializable',
    'Require cycle:',
    'Sending',
    'Possible',
    'renderInPortal',
    'The action',
    'Require cycle',
    'Constants.platform.ios.model',
    'Firestore',
    'Connection',
    'firebase',
    'firestore',
    '@firebase/firestore',
    'Internal',
    'Task orphaned',
    '[DEPRECATED]',
    '[zustand persist middleware]',
    'vexo-analytics:',
    'expo',
  ]);

  return <>{children}</>;
}
