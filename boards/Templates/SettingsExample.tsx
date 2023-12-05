import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import { Switch, List, TouchableRipple, Icon } from 'react-native-paper';
import { Appbar, Main } from '../../widgets';
import Localization from '../../translations';

// Updated sample settings configuration with category titles
const settingsConfig = [
  {
    id: 'category1',
    category: 'Appearance',
    settings: [
      {
        id: 'darkMode',
        label: 'Dark Mode',
        type: 'switch',
        value: false,
        action: (value) => console.log('Toggle Dark Mode:', value),
        icon: 'brightness-4',
      },
    ],
  },
  {
    id: 'category2',
    category: 'Preferences',
    settings: [
      {
        id: 'language',
        label: 'Language',
        type: 'navigation',
        action: () => console.log('Navigate to Language Settings'),
        icon: 'text',
      },
      {
        id: 'notifications',
        label: 'Notifications',
        type: 'switch',
        value: true,
        action: (value) => console.log('Toggle Notifications:', value),
        icon: 'bell',
      },
    ],
  },
  // Add more categories and settings as needed
];

export default function Settings() {

  const l = useContext(Localization)


  const handleSettingPress = (setting) => {
    if (setting.type === 'switch') {
      setting.action(!setting.value);
    } else if (setting.type === 'navigation') {
      setting.action();
    }
    // Add more cases for different types of settings (e.g., dropdown, etc.)
  };

  const renderSettingItem = (setting) => (
    <List.Item
      key={setting.id}
      title={setting.label}
      left={(props) => <List.Icon {...props} icon={setting.icon} />}
      right={
        setting.type === 'switch'
          ? () => <Switch value={setting.value} onValueChange={() => handleSettingPress(setting)} />
          : () => <Icon source={l.navigation_chevron_arrow} size={24} />
      }
      onPress={() => (setting.type === 'navigation' ? handleSettingPress(setting) : null)}
    />
  );

  return (
    <Main>
      <Appbar showBackAction title='Settings' modal />
      <ScrollView>
        {settingsConfig.map((category) => (
          <List.Section key={category.id}>
            <List.Subheader>{category.category}</List.Subheader>
            {category.settings.map((setting) => renderSettingItem(setting))}
          </List.Section>
        ))}
      </ScrollView>
    </Main>
  );
}
