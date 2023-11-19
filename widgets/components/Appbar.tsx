import { Button, Icon, IconButton, Appbar as PaperAppbar, TouchableRipple, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useContext } from 'react';
import { router } from 'expo-router';
import Logo from './Logo';
import { View } from 'react-native';
import Localization from '../../translations';

interface Action {
  icon: string;
  onPress: () => void;
}

interface AppbarProps {
  logo?: boolean;
  title?: string;
  showBackAction?: boolean;
  onBackActionPress?: () => void;
  endActions?: Action[];
  startActions?: Action[];
  safe?: boolean;
  margin?: boolean;
  modal?: boolean;
  color? : string | boolean;
}

export default function Appbar({
  logo = false,
  modal = false,
  color = false,
  title = 'Title',
  safe = true,
  margin = true,
  showBackAction = false,
  onBackActionPress = () => {},
  endActions = [],
  startActions = [],
}: AppbarProps) {
  const insets = useSafeAreaInsets();
  const colors = useTheme();
  const l = useContext(Localization);
  const paddingTop = safe ? insets.top : undefined;
  const marginBottom = margin ? insets.top / 2 || 0 : undefined;
  const backAction = () => router.back();
  // Determine the backgroundColor based on the color prop
  let backgroundColor: string | undefined;
  if (typeof color === 'string') {
    backgroundColor = color; // Use the provided color string
  } else if (color === true) {
    backgroundColor = colors.colors.surface; // Use colors.surface if color is true
  } else {
    backgroundColor = undefined; // Set backgroundColor as undefined if color is false or invalid
  }

  const headerStyle = modal ? {} : { paddingTop, marginBottom };

  return (
    <PaperAppbar.Header style={headerStyle} theme={{ colors: { surface: backgroundColor } }}>
      {showBackAction && (
        <IconButton icon={l.navigation_chevron_arrow_back} size={36} onPress={backAction} />
      )}
      {/* {showBackAction && <PaperAppbar.BackAction onPress={backAction} />} */}
      {startActions.map((action, index) => (
        <PaperAppbar.Action key={index} icon={action.icon} onPress={action.onPress} />
      ))}
      {logo ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Logo />
        </View>
      ) : (
        <PaperAppbar.Content title={title} />
      )}
      {endActions.map((action, index) => (
        <PaperAppbar.Action key={index} icon={action.icon} onPress={action.onPress} />
      ))}
    </PaperAppbar.Header>
  );
}
