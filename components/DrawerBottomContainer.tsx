import React from 'react';
import { Safe, View } from '../widgets';
import DrawerBottomLists from './DrawerBottomLists';
import DrawerBottomButtons from './DrawerBottomButtons';
import DrawerDarkmode from './DrawerDarkmode';
import { Divider } from 'react-native-paper';

export default function DrawerBottomContainer(props: any) {

  return (
    <View s='f-1'>
      <View s='f je'>
        <Divider style={{ width: '90%', alignSelf: 'center', marginVertical: 10 }} />
        <DrawerBottomLists {...props} />
      </View>
      <DrawerBottomButtons />
    </View>
  );
}
