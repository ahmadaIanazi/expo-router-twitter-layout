import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons';

import React, { RefObject, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  Easing,
  Image,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import themeContext from '@context/theme';
import Localization from '../translations/_context';

import {
  applyStyles,
  width,
  height,
  isTablet,
  WIDTH_RATIO,
  HEIGHT_RATIO,
} from '../functions';

/**
 * Icon component - FontAwesome
 * Props:
 *   - s: string (optional) - Shortcuts for applying styles
 *   - name: string (optional) - Icon Name
 *   - family: string (optional) - Icon Family name default: FontAwesome (AntDesign
        Entypo
        EvilIcons
        Feather
        FontAwesome
        FontAwesome5
        Fontisto
        Foundation
        Ionicons
        MaterialCommunityIcons
        MaterialIcons
        Octicons
        SimpleLineIcons
        Zocial)
 *   - color: string (optional) - Text Color
 *   - size: integer (optional) - Icon Size
 */
export function Icon({
  s,
  ref: refer,
  name = 'heart',
  color,
  size,
  family,
}: {
  s?: string;
  ref?: RefObject<View>;
  name?: string;
  color?: string;
  size?: number;
  family?: string;
}) {
  const themeColor = useContext(themeContext);
  const iconName = name || 'heart';
  const labelStyle = applyStyles({}, s);
  const iconColor = color || themeColor.text || 'grey';
  let iconSize = 24; // Default icon size if size prop is not provided or invalid

  // Validate the size prop to ensure it's a valid integer
  if (typeof size === 'number' && !isNaN(size) && size > 0) {
    iconSize = isTablet ? size * WIDTH_RATIO : size;
  }

  const getIconComponent = (familyName: string) => {
    switch (familyName) {
      case 'AntDesign':
        return (
          <AntDesign
            ref={refer}
            name={iconName}
            size={iconSize}
            style={labelStyle}
            color={iconColor}
          />
        );
      case 'Entypo':
        return (
          <Entypo
            ref={refer}
            name={iconName}
            size={iconSize}
            style={labelStyle}
            color={iconColor}
          />
        );
      case 'EvilIcons':
        return (
          <EvilIcons
            ref={refer}
            name={iconName}
            size={iconSize}
            style={labelStyle}
            color={iconColor}
          />
        );
      case 'Feather':
        return (
          <Feather
            ref={refer}
            name={iconName}
            size={iconSize}
            style={labelStyle}
            color={iconColor}
          />
        );
      case 'FontAwesome':
        return (
          <FontAwesome
            ref={refer}
            name={iconName}
            size={iconSize}
            style={labelStyle}
            color={iconColor}
          />
        );
      case 'FontAwesome5':
        return (
          <FontAwesome5
            ref={refer}
            name={iconName}
            size={iconSize}
            style={labelStyle}
            color={iconColor}
          />
        );
      case 'Fontisto':
        return (
          <Fontisto
            ref={refer}
            name={iconName}
            size={iconSize}
            style={labelStyle}
            color={iconColor}
          />
        );
      case 'Foundation':
        return (
          <Foundation
            ref={refer}
            name={iconName}
            size={iconSize}
            style={labelStyle}
            color={iconColor}
          />
        );
      case 'Ionicons':
        return (
          <Ionicons
            ref={refer}
            name={iconName}
            size={iconSize}
            style={labelStyle}
            color={iconColor}
          />
        );
      case 'MaterialCommunityIcons':
        return (
          <MaterialCommunityIcons
            ref={refer}
            name={iconName}
            size={iconSize}
            style={labelStyle}
            color={iconColor}
          />
        );
      case 'MaterialIcons':
        return (
          <MaterialIcons
            ref={refer}
            name={iconName}
            size={iconSize}
            style={labelStyle}
            color={iconColor}
          />
        );
      case 'Octicons':
        return (
          <Octicons
            ref={refer}
            name={iconName}
            size={iconSize}
            style={labelStyle}
            color={iconColor}
          />
        );
      case 'SimpleLineIcons':
        return (
          <SimpleLineIcons
            ref={refer}
            name={iconName}
            size={iconSize}
            style={labelStyle}
            color={iconColor}
          />
        );
      case 'Zocial':
        return (
          <Zocial ref={refer} name={iconName} size={iconSize} style={labelStyle} color={iconColor} />
        );
      default:
        return (
          <FontAwesome
            ref={refer}
            name={iconName}
            size={iconSize}
            style={labelStyle}
            color={iconColor}
          />
        );
    }
  };

  return getIconComponent(family || 'FontAwesome');
}
