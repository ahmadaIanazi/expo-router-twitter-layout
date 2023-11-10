import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput as Input, Text, useTheme } from 'react-native-paper';

interface TextInputProps {
  icon?: string;
  errorText?: string;
  description?: string;
  right?: string | undefined;
  label?: string;
  returnKeyType?: string;
  value?: string;
  autoCapitalize?: string;
  autoCompleteType?: string;
  textContentType?: string;
  keyboardType?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  error?: boolean;
}

export default function TextInput({
  icon = '',
  errorText,
  description,
  autoCapitalize = 'none',
  right,
  secureTextEntry = false,
  ...props
}: TextInputProps) {
  const colors = useTheme();
  const [secureText, setSecureText] = useState(secureTextEntry);

  const toggleSecureText = () => {
    setSecureText(!secureText);
  };

  return (
    <View
      style={{
        width: '100%',
        marginVertical: 12,
      }}
    >
      <Input
        // style={{ backgroundColor: colors.colors.surface }}
        selectionColor={colors.colors.primary}
        underlineColor='transparent'
        mode='outlined'
        right={
          right ? (
            <Input.Icon icon={right} onPress={toggleSecureText} />
          ) : undefined
        }
        secureTextEntry={secureText}
        {...props}
      />
      {description && !errorText ? (
        <Text
          style={{
            fontSize: 13,
            color: colors.colors.primary,
            paddingTop: 8,
          }}
        >
          {description}
        </Text>
      ) : null}
      {errorText ? (
        <Text
          style={{
            fontSize: 13,
            color: colors.colors.error,
            paddingTop: 8,
          }}
        >
          {errorText}
        </Text>
      ) : null}
    </View>
  );
}
