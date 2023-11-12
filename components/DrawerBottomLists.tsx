import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, List } from 'react-native-paper';
import { View } from '../widgets';

export default function DrawerBottomLists({ lists }) {
  return (
    <List.Section style={{ width: '100%' }}>
      {lists?.map((section) => {
        return (
          <List.Accordion key={section.title} title={section.title}>
            {section.items?.map((item)=>{
                return (
                  <List.Item
                    key={item.title}
                    title={item.title}
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
