import React, { ReactNode } from 'react';
import { Button as PaperButton, useTheme } from 'react-native-paper';
import { ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  mode?: 'text' | 'outlined' | 'contained';
  style?: ViewStyle;
  labelStyle?: TextStyle;
  children: ReactNode; // Add children prop
  loading?: boolean;
  disabled?: boolean;
  icon?: string;
  theme?: object;
  onPress?: () => void; // Add onPress prop
}

export default function ActionButton({
  mode,
  loading = false, 
  disabled = false,
  icon,
  style,
  labelStyle,
  children,
  theme,
  onPress,
  ...props
}: ButtonProps) {
  const colors = useTheme();

  return (
    <PaperButton
      disabled={disabled}
      icon={icon}
      style={[
        {
          width: '100%',
          // opacity: disabled || loading ? 0.5 : 1,
          marginVertical: 10,
          paddingVertical: 2,
          ...style,
        },
      ]}
      labelStyle={{
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 26,
        ...labelStyle,
      }}
      mode={mode}
      // theme={theme}
      theme={theme}
      loading={loading}
      onPress={onPress}
      {...props}
    >
      {children}
    </PaperButton>
  );
}
