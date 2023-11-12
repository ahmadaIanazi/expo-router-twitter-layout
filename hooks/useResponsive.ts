import { useEffect, useState } from 'react';
import { usePlatformStore, PlatformStore } from '../stores';
import {
  mobile_min_width,
  mobile_max_width,
  tablet_min_width,
  tablet_max_width,
  desktop_min_width,
  desktop_max_width,
} from '../xonstant/platform';
import { Dimensions } from 'react-native';

interface ResponsiveConfig {
  drawerWidth: string;
  drawerType: 'permanent' | 'slide';
}

export default function useResponsive(): ResponsiveConfig {
  const { height, width } = Dimensions.get('window')

    const detectDeviceOrientation = (): 'Desktop' | 'Tablet' | 'Mobile' | 'Unknown' => {
    if (width >= mobile_min_width && width <= mobile_max_width) {
        console.log('MOBILE')
        return 'Mobile';
    } else if (width >= tablet_min_width && width <= tablet_max_width) {
        console.log('Tablet')
        return 'Tablet';
    } else if (width >= desktop_min_width && width <= desktop_max_width) {
        console.log('Desktop')
        return 'Desktop';
    } else {
        console.log('Unknown Width')
        return 'Unknown';
    }
    };

  const getResponsiveConfig = (): ResponsiveConfig => {
    const deviceType = detectDeviceOrientation();

    switch (deviceType) {
      case 'Desktop':
        return { drawerWidth: '30%', drawerType: 'permanent' };
      case 'Tablet':
        return { drawerWidth: '10%', drawerType: 'permanent' };
      case 'Mobile':
        return { drawerWidth: '75%', drawerType: 'slide' };
      default:
        return { drawerWidth: '60%', drawerType: 'slide' };
    }
  };

  const [responsiveConfig, setResponsiveConfig] = useState<ResponsiveConfig>(getResponsiveConfig);

  useEffect(() => {
    console.log('Is it active ?')
    setResponsiveConfig(getResponsiveConfig());
  }, [width, height]); // Update the configuration when width or height changes

  return responsiveConfig;
}
