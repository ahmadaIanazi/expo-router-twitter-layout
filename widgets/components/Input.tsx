import React from 'react';
import { Platform, TextInput } from 'react-native';

import { useTheme } from 'react-native-paper';
import { WIDTH_RATIO, applyStyles } from '../functions';

/**
 * TextInput component
 * Props:
 *   - value: string (optional) - Placeholder
 *   - onChange: string (optional) - Placeholder
 *   - placeholder: string (optional) - Placeholder
 *   - style: string (optional) - Shortcuts for applying styles
 *   - color: string (optional) - Text Color
 */
export function Input({
  s,
  refer,
  value,
  onChange,
  placeholder,
  secure = false,
  color,
  textColor,
  placeholderColor,
  shadowColor,
  borderColor,
  style = true,
  onFocus,
  autoFocus,
  onBlur,
  multiline,
  keyboardType,
  max,
}) {
  const colors = useTheme();
  const styleColor = style
    ? {
        fontSize: 14 * WIDTH_RATIO,
        shadowColor: shadowColor || colors.colors.shadow || null,
        borderColor: borderColor || colors.colors.outline || null,
        backgroundColor: colors.colors.scrim || 'grey',
      }
    : null;
  const labelStyle = applyStyles(styleColor, s);
  const backgroundColor = color || null;
  const placeholderContent = placeholder || '';
  const placeholderColorContent = placeholderColor || colors.colors.tertiary || 'lightgrey';
  const onChangeText = onChange || null;
  const inputValue = value || null;
  const inputTextColor = textColor || colors.colors.onBackground || 'black';
  const autoFocusValue = autoFocus || Platform == 'ios' ? true : null;
  const onFocusValue = onFocus || null;
  const maxInput = max || null;
  const keyboardTypeInput = keyboardType || null;

  return (
    <TextInput
      ref={refer}
      multiline={multiline}
      onBlur={onBlur}
      maxLength={maxInput}
      secureTextEntry={secure}
      keyboardType={keyboardTypeInput}
      value={inputValue}
      onFocus={onFocusValue}
      onChangeText={onChangeText}
      autoFocus={autoFocusValue}
      placeholder={placeholderContent}
      placeholderTextColor={placeholderColorContent}
      style={[labelStyle, { backgroundColor: backgroundColor, color: inputTextColor }]}
    />
  );
}
