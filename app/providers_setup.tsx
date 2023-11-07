import { ReactNode } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

interface RootProviderProps {
  children: ReactNode;
}

export default function Providers({ children: routerEntry }: RootProviderProps): React.JSX.Element {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {routerEntry}
    </ThemeProvider>
  );
}
