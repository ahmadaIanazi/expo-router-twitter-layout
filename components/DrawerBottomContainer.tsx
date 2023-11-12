import React from 'react';
import { Safe, View } from '../widgets';
import DrawerBottomLists from './DrawerBottomLists';
import DrawerLogout from './DrawerLogout';
import DrawerDarkmode from './DrawerDarkmode';
import { Divider } from 'react-native-paper';
import { lists } from '../app/(drawer)/_layout';

export default function DrawerBottomContainer() {

  /*
    <List.Accordion title='Settings'>
      <List.Item
        title='Title'
        onPress={() => {}}
        left={() => (
          <View s='c ms-20'>
            <Icon source='heart' size={14} />
          </View>
        )}
      />
    </List.Accordion>
   */
  return (
    <View s='f-1'>
      <View s='f je'>
        <Divider style={{ width: '90%', alignSelf: 'center', marginVertical: 10 }} />
        <DrawerBottomLists lists={lists} />
      </View>
      <DrawerLogout />
    </View>
  );
}
