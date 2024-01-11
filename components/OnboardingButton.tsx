import Localization from '../translations/_context';
import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, TouchableHighlight, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { useKeyboard } from '../hooks/useKeyboard';
import manageLocales from '../managers/manageLocales';
const { height, width } = Dimensions.get('window');

export default function OnboardingButton({ loading, handleOnPress, lastSlide }) {
  const { keyboardHeight } = useKeyboard();

  const colors = useTheme();
const { l } = manageLocales()
  const [buttonText, setButtonText] = useState('Next');

  useEffect(() => {
    if (lastSlide) {
      setButtonText(l.get_started);
    } else {
      setButtonText(l.next);
    }
  }, [lastSlide, loading]);

  return loading ? (
    <View
      style={[
        styles.button,
        {
          bottom: keyboardHeight ? keyboardHeight : 0,
          backgroundColor: colors.colors.onTertiaryContainer,
        },
      ]}
    >
      <ActivityIndicator size='large' color='white' />
    </View>
  ) : (
    <TouchableHighlight
      underlayColor={'black'}
      onPress={handleOnPress}
      style={[
        styles.button,
        {
          bottom: keyboardHeight ? keyboardHeight : 0,
          backgroundColor: colors.colors.primary,
        },
      ]}
    >
      <Text
        variant='headlineLarge'
        style={{ fontWeight: 'bold', color: colors.colors.onTertiaryContainer }}
      >
        {buttonText}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: width,
    height: height * 0.1244,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
