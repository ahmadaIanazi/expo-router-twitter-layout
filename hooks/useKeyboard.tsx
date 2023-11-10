import { useEffect, useState } from 'react';
import { Keyboard, KeyboardEvent, Platform } from 'react-native';

interface KeyboardHookResult {
  keyboardHeight: number;
  keyboardOpen: boolean;
}

export const useKeyboard = (): KeyboardHookResult => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  function onKeyboardDidShow(e: KeyboardEvent) {
    setKeyboardHeight(e.endCoordinates.height);
    setKeyboardOpen(true);
  }

  function onKeyboardDidHide() {
    setKeyboardHeight(0);
    setKeyboardOpen(false);
  }

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
    const hideSubscription = Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return {
    keyboardHeight: Platform.OS === 'ios' ? keyboardHeight : 0,
    keyboardOpen,
  };
};
