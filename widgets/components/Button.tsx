import React, { ReactNode } from 'react';
import { Button as PaperButton, useTheme } from 'react-native-paper';
import { ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  mode: 'text' | 'outlined' | 'contained';
  style?: ViewStyle;
  labelStyle?: TextStyle;
  children: ReactNode; // Add children prop
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void; // Add onPress prop
}

export default function ActionButton({
  mode,
  loading = false, 
  disabled = false,
  style,
  labelStyle,
  children,
  onPress,
  ...props
}: ButtonProps) {
  const theme = useTheme();

  return (
    <PaperButton
      disabled={disabled}
      style={[
        {
          width: '100%',
          opacity: disabled || loading ? 0.5 : 1,
          marginVertical: 10,
          paddingVertical: 2,
          ...style,
        },
      ]}
      labelStyle={{
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
        ...labelStyle,
      }}
      mode={mode}
      theme={theme}
      loading={loading}
      onPress={onPress}
      {...props}
    >
      {children}
    </PaperButton>
  );
}
