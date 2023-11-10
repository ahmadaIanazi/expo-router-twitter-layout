import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useTheme } from 'react-native-paper';
import { applyStyles } from '../functions';

/**
 * Overlay component
 * Props:
 *   - style: string (optional) - Shortcuts for applying styles
 *   - color: string (optional) - Text Color
 */
export function Overlay({ s, ref, style = true, color, opacity = 0.6, shadowColor, borderColor }) {
  const colors = useTheme();
  const styleColor = style && {
    shadowColor: shadowColor || colors.colors.shadow || null,
    borderColor: borderColor || colors.colors.outline || null,
    flex: 1,
    position: 'absolute',
    opacity,
    ...StyleSheet.absoluteFill,
  };
  const labelStyle = applyStyles(styleColor, s);
  const backgroundColor = color || colors.colors.tertiary || 'white';

  return (
    <View
      ref={ref}
      style={[
        labelStyle,
        {
          opacity,
          backgroundColor: backgroundColor,
        },
      ]}
    />
  );
}
