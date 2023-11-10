import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function Header(props) {
  return <Text variant='headlineLarge' {...props} />;
}