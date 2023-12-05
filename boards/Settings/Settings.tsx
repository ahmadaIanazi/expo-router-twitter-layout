import manageAuth from '../../managers/manageAuth';
import { useUserStore } from '../../stores';


import React, { useState } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { List, SegmentedButtons, useTheme } from 'react-native-paper';

import {
  View,
  Div,
  Text,
  Tap,
  Appbar,
  BackButton,
  Background,
  Banner,
  Button as ActionButton,
  Header,
  Paragraph,
  ScrollView,
  SliderIndicator,
  Snackbar,
  TextInput,
  Logo,
  Main,
  OnboardSlider,
  OnboardingButton,
} from '../../widgets';

export default function Settings() {
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);
  const colors = useTheme()

  const [error, setError] = useState('');

  const { handleLogout } = manageAuth();

  const logout = async () => {
    try {
      await handleLogout();
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <View s='f js ac p-20' color={colors.colors.background}>
      <DarkMode />
      <Logo />
      <List.Section style={{ width: '80%' }}>
        <List.Subheader>Some title</List.Subheader>
        <List.Item
          title='First Item'
          description='Item description'
          left={(props) => <List.Icon {...props} icon='folder' />}
        />
        <List.Item title='Second Item' left={() => <List.Icon icon='folder' />} />
      </List.Section>
    </View>
  );
}

function DarkMode() {
  const { dark, setDark } = useUserStore();
  const getDeviceAppearance = useColorScheme(); // 'light' or 'dark'

  const userSettingsDark = dark != null ? (dark ? 'dark' : 'light') : 'light';
  const [value, setValue] = useState(dark != null ? userSettingsDark : getDeviceAppearance);
  const colors = useTheme();

  return (
    <SegmentedButtons
      value={value}
      onValueChange={(v)=> {
        const isDark = v === 'dark' ? true : false
        setDark(isDark)
        setValue(v)
       }}
      buttons={[
        {
          value: 'dark',
          label: '',
          icon: 'moon-waning-crescent',
        },
        { value: 'light', label: '', icon: 'white-balance-sunny' },
      ]}
    />
  );
}
