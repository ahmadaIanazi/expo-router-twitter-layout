import React, { useState, useEffect } from 'react';
import { Icon, Banner as PaperBanner } from 'react-native-paper';

interface BannerProps {
  visible?: boolean;
  type?: 'info' | 'success' | 'warning' | 'error';
  message?: string;
  autoDismiss?: boolean;
  dismissDelay?: number;
  buttons?: { label: string; onPress: () => void }[];
}

export default function Banner({
  visible: initialVisible = true,
  type = 'info',
  message = 'Default message',
  autoDismiss = false,
  dismissDelay = 3000,
  buttons = [],
}: BannerProps) {
  const [visible, setVisible] = useState(initialVisible);

  useEffect(() => {
    if (autoDismiss) {
      const timer = setTimeout(() => setVisible(false), dismissDelay);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, dismissDelay]);

  const getIconSource = () => {
    switch (type) {
      case 'success':
        return 'check';
      case 'warning':
        return 'alert';
      case 'error':
        return 'close';
      default:
        return 'information';
    }
  };

  return (
    <PaperBanner
      visible={visible}
      actions={buttons}
      icon={() => <Icon source={getIconSource()} size={20} />}
    >
      {message}
    </PaperBanner>
  );
}
