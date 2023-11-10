import React, { ReactNode, RefObject } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

import { applyStyles } from '../functions';
import { useTheme } from 'react-native-paper';

interface TProps {
  s?: string;
  size?: string | number;
  ref?: RefObject<Text>;
  children?: ReactNode;
  color?: string;
  style?: string; // Allow 'style' as an additional prop
}

export function TextComponent({
  s, // Use 'style' as the default for 's'
  size,
  ref,
  children,
  color,
  style, // Add 'style' as a parameter
}: TProps): React.JSX.Element {
  const colors = useTheme()
  const styleValue = s || style; // Use 'style' if 's' is not provided

  const textSize = size || 14;
  const applyStyle = `${styleValue} ts-${textSize}`;
  
  const styled: StyleProp<TextStyle> = applyStyles({}, applyStyle);
  const textColor = color || colors.colors.onBackground;
  return (
    <Text ref={ref} style={[styled, { color: textColor }]}>
      {children}
    </Text>
  );
}
