
import React, { useContext } from 'react';
import {
    View
} from 'react-native';

import Localization from '../../translations';

import { useTheme } from 'react-native-paper';
import {
    applyStyles
} from '../functions';
import manageLocales from '../../managers/manageLocales';

/**
 * View component
 * Props:
 *   - style: string (optional) - Shortcuts for applying styles
 *   - color: string (optional) - Text Color
 */
export function X({ s, ref, children, color, shadowColor, borderColor }) {

  const colors = useTheme()
const { l } = manageLocales()
  const styleColor = {
    flexDirection: 'row',
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
