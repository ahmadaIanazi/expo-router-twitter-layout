import React, { ReactNode, RefObject, useContext } from 'react';
import {
  View
} from 'react-native';

import Localization from '../translations/_context';
import themeContext from '@context/theme';

import { applyStyles } from '../functions';
import { useTheme } from 'react-native-paper';


/**
 * View component
 * Props:
 *   - style: string (optional) - Shortcuts for applying styles
 *   - color: string (optional) - Text Color
 */
export function Div({
  s,
  ref,
  children,
  color,
  shadowColor,
  borderColor,
}: {
  s?: string;
  ref?: RefObject<View>;
  children?: ReactNode;
  color?: string;
  shadowColor?: string;
  borderColor?: string;
}) {
  const colors = useTheme()
  const styleColor = {
    shadowColor: shadowColor || colors.colors.shadow || null,
    borderColor: borderColor || colors.colors.outline || null,
  };
  const labelStyle = applyStyles(styleColor, s);
  const backgroundColor = color || null;

  return (
    <View ref={ref} style={[labelStyle, { backgroundColor: backgroundColor }]}>
      {children}
    </View>
  );
}