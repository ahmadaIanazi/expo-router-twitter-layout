import React, { ReactNode, ReactPropTypes, RefObject, useContext } from 'react';
import { View } from 'react-native';

import Localization from '../../translations/_context';

import { applyStyles } from '../functions';
import { useTheme } from 'react-native-paper';
import manageLocales from '../../managers/manageLocales';

/**
 * Spacer component
 * Props:
 *   - style: string (optional) - Shortcuts for applying styles
 *   - color: string (optional) - Text Color
 */
export function Spacer({
  s,
  ref,
  color,
  shadowColor,
  borderColor,
  space = 10,
}: {
  s?: string;
  space?: number;
  ref?: RefObject<View>;
  children?: ReactNode;
  color?: string;
  shadowColor?: string;
  borderColor?: string;
}): React.JSX.Element {
  const colors = useTheme();
const { l } = manageLocales()
  const styleColor = {
    padding: space,
    shadowColor: shadowColor || colors.colors.shadow || null,
    borderColor: borderColor || colors.colors.outline || null,
  };
  const labelStyle = applyStyles(styleColor, s);
  const backgroundColor = color || null;

  return (
    <View
      ref={ref}
      style={[labelStyle, { backgroundColor: backgroundColor, direction: l.direction }]}
    />
  );
}