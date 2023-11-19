import { useEffect, useState } from 'react';
import { usePlatformStore, PlatformStore } from '../stores';

import { Dimensions } from 'react-native';

interface ResponsiveConfig {
  drawerWidth: string;
  drawerType: 'permanent' | 'slide';
  showLabel: boolean
}

export default function useResponsive(): ResponsiveConfig {
  const { height, width } = Dimensions.get('window');
  const { deviceType } = usePlatformStore();

  const getResponsiveConfig = (): ResponsiveConfig => {
    switch (deviceType) {
      case 'Desktop':
        return { drawerWidth: '30%', drawerType: 'permanent', showLabel: true };
      case 'Tablet':
        return { drawerWidth: '10%', drawerType: 'permanent', showLabel: false };
      case 'Mobile':
        return { drawerWidth: '75%', drawerType: 'slide', showLabel: true };
      default:
        return { drawerWidth: '60%', drawerType: 'slide', showLabel: true };
    }
  };

  const [responsiveConfig, setResponsiveConfig] = useState<ResponsiveConfig>(getResponsiveConfig);

  useEffect(() => {
    setResponsiveConfig(getResponsiveConfig());
  }, []); // Update the configuration when width or height changes

  return responsiveConfig;
}
