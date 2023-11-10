import React, { ReactNode, useEffect } from 'react';
import * as Updates from 'expo-updates';
import { Alert } from 'react-native';

interface UpdateProviderProps {
  children: ReactNode;
}

export default function UpdateProvider({ children }: UpdateProviderProps): React.JSX.Element {

  useEffect(() => {
    reactToUpdates();
  }, []);

  const reactToUpdates = async () => {
    Updates.addListener((event) => {
      if (event.type === Updates.UpdateEventType.UPDATE_AVAILABLE) {
        Updates.reloadAsync();
        console.log('Update Provider Triggered For Update Available.');
        Alert.alert('A new update is available. You must restart the app.');
      }
    });
  };

  return <>{children}</>;
}
