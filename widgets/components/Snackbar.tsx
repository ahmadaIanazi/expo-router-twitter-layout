import React, { useEffect, useState } from 'react';
import { Snackbar as Snack } from 'react-native-paper';

/**
 * Usage: <Snackbar visible={visible} snackbarText='Below a lot of things' action={{ label: 'Dismiss', onPress: ()=> setVisible(false)}} />
 */

interface SnackbarProps {
  visible?: boolean;
  snackbarText: string;
  autoDismiss?: boolean;
  dismissDelay?: number;
  action?:
    | {
        label: string;
        onPress: () => void;
      }
    | {
        label: string;
        onPress: () => void;
      }[]
    | undefined;
}

export default function Snackbar({
  visible = false,
  snackbarText,
  autoDismiss = false,
  dismissDelay = 3000,
  action = [],
}: SnackbarProps) {
  const [visibleSnack, setVisibleSnack] = useState(visible);

  const onDismissSnackBar = () => setVisibleSnack(false);

  useEffect(() => {
    // Update the component's internal state when the visible prop changes
    if (visibleSnack !== visible) {
      setVisibleSnack(visible);
    }
  }, [visible]);

  useEffect(() => {
    if (autoDismiss && visibleSnack) {
      const timer = setTimeout(() => setVisibleSnack(false), dismissDelay);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, dismissDelay, visibleSnack]);

  return (
    <Snack visible={visibleSnack} onDismiss={onDismissSnackBar} action={action}>
      {snackbarText}
    </Snack>
  );
}
