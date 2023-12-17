import { useUserStore } from '../stores/';
import { en, ar } from '../translations';
import { Theme as ThemeConfig } from '../keys/setup_theme';
import Localization from '../translations/_context';
import { getLocales } from 'expo-localization';
import React, { ReactNode, useEffect } from 'react';
import { Dimensions, Platform, useColorScheme } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { usePlatformStore } from '../stores';
import { TamaguiProvider, Theme } from 'tamagui'

import config from '../lib/tamagui.config'

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps): React.JSX.Element {
  // User Settings
  const userSetToDark = useUserStore((state) => state.dark); // boolean true or false
  const userSetToArabic = useUserStore((state) => state.arabic); // boolean true or false
  const { setHeight, setWidth, setOs, setIsDark, setLanguage, setTypeByWidth } = usePlatformStore();
  const { width, height } = Dimensions.get('screen');
  // Device Settings
  const getDeviceAppearance = useColorScheme(); // 'light' or 'dark'
  const getDeviceLocale = getLocales()[0].languageCode; // 'en' or 'ar' .. etc

  // Logic to set Device Setting or User Settings.
  const selectedTheme =
    userSetToDark !== null ? userSetToDark : getDeviceAppearance === 'dark' ? true : false;
  const selectedLocalization =
    userSetToArabic !== null ? userSetToArabic : getDeviceLocale === 'ar' ? true : false;

  // Set the values
  const setTheme = selectedTheme
    ? { ...MD3DarkTheme, colors: ThemeConfig.colors.dark, ...ThemeConfig.props }
    : { ...MD3LightTheme, colors: ThemeConfig.colors.light, ...ThemeConfig.props };
  const setLocal = selectedLocalization ? ar : en;

  const setTamaguiTheme = selectedTheme ? 'dark' : 'light'

  useEffect(() => {
    setHeight(height);
    setWidth(width);
    setTypeByWidth(width);
    setOs(Platform.OS);
    setIsDark(getDeviceAppearance === 'dark');
    setLanguage(getDeviceLocale);
  }, [Platform, height, width, getDeviceAppearance, getDeviceLocale]);

  return (
    <TamaguiProvider config={config}>
      <Theme name={setTamaguiTheme}>
        <PaperProvider theme={setTheme}>
          <Localization.Provider value={setLocal}>
            <>{children}</>
          </Localization.Provider>
        </PaperProvider>
      </Theme>
    </TamaguiProvider>
  );
}
