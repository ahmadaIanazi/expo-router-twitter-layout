import { useUserStore } from '../stores/';
import { en, ar } from '../translations';
import { Theme } from '../zetup/setup_theme';
import Localization from '../translations/_context';
import { getLocales } from 'expo-localization';
import React, { ReactNode, useEffect } from 'react';
import { Dimensions, Platform, useColorScheme } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { usePlatformStore } from '../stores';

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps): React.JSX.Element {
  // User Settings
  const userSetToDark = useUserStore((state) => state.dark); // boolean true or false
  const userSetToArabic = useUserStore((state) => state.arabic); // boolean true or false
  const { setIsWeb, setHeight, setWidth, setIsTablet, setOs, setIsDark, setLanguage } = usePlatformStore();
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
    ? { ...MD3DarkTheme, colors: Theme.colors.dark }
    : { ...MD3LightTheme, colors: Theme.colors.light };
  const setLocal = selectedLocalization ? ar : en;

  useEffect(() => {
    setIsWeb(Platform.OS === 'web');
    setHeight(height);
    setWidth(width);
    setOs(Platform.OS);
    setIsDark(getDeviceAppearance === 'dark');
    setLanguage(getDeviceLocale);
  }, [Platform, height, width, getDeviceAppearance, getDeviceLocale]);

  return (
    <PaperProvider theme={setTheme}>
      <Localization.Provider value={setLocal}>
        <>{children}</>
      </Localization.Provider>
    </PaperProvider>
  );
}
