import { BlurView } from 'expo-blur';
import { router } from 'expo-router';
import React, { useContext } from 'react';
import { Animated, View } from 'react-native';
import { IconButton, Appbar as PaperAppbar, useTheme } from 'react-native-paper';
import useResponsive from '../../hooks/useResponsive';
import Localization from '../../translations';
import Logo from './Logo';
import { useAnimationStore } from '../../stores/useAnimationStore';
import manageLocales from '../../managers/manageLocales';

interface Action {
  icon: string;
  onPress: () => void;
}

interface AppbarProps {
  logo?: boolean;
  title?: string;
  showBackAction?: boolean;
  onBackActionPress?: () => void;
  animHeaderValue?: () => void;
  endActions?: Action[];
  startActions?: Action[];
  modal?: boolean;
  color?: string | boolean;
  translateY?: number | string
  blur?: number
}

const Appbar = ({
  logo = false,
  modal = false,
  color = false,
  title = 'Title',
  blur = 0,
  showBackAction = false,
  onBackActionPress = () => { },
  endActions = [],
  startActions = [],
  translateY = 0
}: AppbarProps) => {

  const { appBarTranslateY } = useAnimationStore()
  const { header } = useResponsive()

  const colors = useTheme();
const { l } = manageLocales()

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

  const headerStyle = {position:'absolute', width:'100%', zIndex: 1, height: header.headerHeight }

  return (
    <Animated.View style={[headerStyle, { backgroundColor, transform: [{ translateY: translateY ? translateY : appBarTranslateY }] }]}>
      <BlurView intensity={blur} tint={colors.dark ? 'dark' : 'light'} >
        <PaperAppbar.Header theme={{ colors: { surface: backgroundColor } }}>
          {showBackAction && (
            <IconButton icon={l.navigation_chevron_arrow_back} size={36} onPress={backAction} />
          )}
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

      </BlurView>

    </Animated.View>
  );
}

export default Appbar;
