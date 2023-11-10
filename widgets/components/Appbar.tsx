import { Appbar as PaperAppbar, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
import { router } from 'expo-router';
import Logo from './Logo';
import { View } from 'react-native';

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
}

export default function Appbar({
  logo = false,
  title = 'Title',
  safe = true,
  showBackAction = false,
  onBackActionPress = () => {},
  endActions = [],
  startActions = [],
}: AppbarProps) {
  const insets = useSafeAreaInsets();
  const colors = useTheme();
  const paddingTop = safe ? insets.top : undefined;
  const backAction = () => router.back();
  // const backAction = ()=>  onBackActionPress || router.back()

  return (
    <PaperAppbar.Header style={{ paddingTop }}>
      {showBackAction && <PaperAppbar.BackAction onPress={backAction} />}
      {startActions.map((action, index) => (
        <PaperAppbar.Action key={index} icon={action.icon} onPress={action.onPress} />
      ))}
      {logo ? (
        <View style={{ flex: 1, justifyContent:'center', alignItems: 'center'}}>
          <Logo/>
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
