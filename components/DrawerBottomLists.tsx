import React from 'react';
import { Icon, List } from 'react-native-paper';
import useResponsive from '../hooks/useResponsive';
import { View } from '../widgets';

export default function DrawerBottomLists({ lists }) {
  const { showLabel } = useResponsive();

  return (
    <List.Section style={{ width: '100%' }}>
      {lists.map((section) => {
        return (
          <List.Accordion
            left={() => !showLabel && <Icon source={section.icon} size={24} />}
            key={section.title}
            title={showLabel && section.title}
          >
            {section.items.map((item) => {
              return (
                <List.Item
                  key={item.title}
                  title={showLabel && item.title}
                  onPress={item.onPress}
                  left={() => (
                    <View s='c ms-20'>
                      <Icon source={item.icon} size={14} />
                    </View>
                  )}
                />
              );
            })}
          </List.Accordion>
        );
      })}
    </List.Section>
  );
}
