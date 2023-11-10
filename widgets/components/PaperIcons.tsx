import React from 'react';
import { Icon as PaperIcon } from 'react-native-paper';

/** Icons: https://pictogrammers.com/library/mdi/ */
interface PaperIconsProps {
  size: number;
  source: any;
  color?: string;
  testID?: string;
  theme?: any; // Replace with your ThemeProp type
}

export function PaperIcons({ size, source, color, testID, theme }: PaperIconsProps) {
  return <PaperIcon size={size} source={source} color={color} testID={testID} theme={theme} />;
}