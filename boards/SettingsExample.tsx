

import React, { useState, useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, List, Text, Switch as PaperSwitch, useTheme, Button } from 'react-native-paper';

import {

  Div,

  Tap,
  Appbar,
  BackButton,
  Background,
  Banner,
  Button as ActionButton,
  Header,
  Paragraph,

  SliderIndicator,
  Snackbar,
  TextInput,
  Logo,
  Main,
  OnboardSlider,
  OnboardingButton,
} from '../widgets';
import executeAuth from '../execute/executeAuth';

const SECTIONS = [
  {
    header: 'Preferences',
    icon: 'heart',
    items: [
      { label: 'Language', value: 'English', type: 'input' },
      { label: 'Dark Mode', value: false, type: 'boolean' },
      { label: 'Use Wi-Fi', value: true, type: 'boolean' },
      { label: 'Location', value: 'Los Angeles, CA', type: 'input' },
      { label: 'Show collaborators', value: true, type: 'boolean' },
      { label: 'Accessibility mode', value: false, type: 'boolean' },
    ],
  },
  {
    header: 'Help',
    icon: 'help-circle',
    items: [
      { label: 'Item 1', type: 'link' },
      { label: 'Item 2', type: 'input', value: 'Value' },
      { label: 'Item 3', type: 'boolean', value: true },
      { label: 'Item 4', type: 'boolean', value: false },
      { label: 'Item 5', type: 'link' },
    ],
  },
  {
    header: 'Content',
    icon: 'heart',
    items: [
      { label: 'Item 1', type: 'link' },
      { label: 'Item 2', type: 'input', value: 'Value' },
      { label: 'Item 3', type: 'boolean', value: true },
      { label: 'Item 4', type: 'boolean', value: false },
      { label: 'Item 5', type: 'link' },
    ],
  },
];

export default function SettingsExample() {
  const colors = useTheme();
  const { executeLogout } = executeAuth()
  const [value, setValue] = useState(0);
  const { tabs, items } = useMemo(() => {
    return {
      tabs: SECTIONS.map(({ header, icon }) => ({
        name: header,
        icon,
      })),
      items: SECTIONS[value].items,
    };
  }, [value]);

  const handleLogout = async () => {
    try {
      await executeLogout()

    } catch (error){

    }
  }

  return (
    <Main safe='bottom'>
      <Appbar safe={false} title='Settings' showBackAction />
      <ScrollView>
        <View
          style={[
            styles.profile,
            {
              backgroundColor: colors.colors.background,
              borderColor: colors.colors.outline,
            },
          ]}
        >
          <Avatar.Image
            size={60}
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
            }}
          />
          <Text variant='bodyLarge'>John Doe</Text>
          <Text variant='bodyMedium'>@john.doe</Text>
          <List.Item
            title='Edit Profile'
            left={(props) => (
              <List.Icon {...props} icon='pencil' color={colors.colors.onBackground} />
            )}
          />
        </View>
        <View style={styles.tabs}>
          {tabs.map(({ name, icon }, index) => {
            const isActive = index === value;
            return (
              <List.Item
                key={name}
                title={name}
                left={(props) => (
                  <List.Icon
                    {...props}
                    icon={icon}
                    color={isActive ? colors.colors.secondary : colors.colors.primary}
                  />
                )}
                onPress={() => {
                  setValue(index);
                }}
              />
            );
          })}
        </View>
        {items.map(({ label, type, value }, index) => {
          return (
            <List.Item
              key={label}
              title={label}
              description={
                type === 'input' ? value : type === 'boolean' ? (value ? 'On' : 'Off') : null
              }
              left={(props) => (
                <List.Icon {...props} icon={type === 'boolean' ? 'check' : 'chevron-right'} />
              )}
              right={(props) =>
                type === 'boolean' && (
                  <PaperSwitch
                    value={value}
                    onValueChange={() => {
                      // Handle switch state change here
                    }}
                  />
                )
              }
            />
          );
        })}
      </ScrollView>
      <Button mode='contained' onPress={handleLogout}>Logout</Button>
    </Main>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    padding: 16,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  profileName: {
    fontSize: 17,
    fontWeight: '600',
  },
  profileHandle: {
    fontSize: 15,
  },
  tabs: {
    flexDirection: 'row',
    paddingVertical: 16,
  },
});
