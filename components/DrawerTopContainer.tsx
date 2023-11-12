import React from 'react';
import { Safe, View } from '../widgets';
import DrawerDarkmode from './DrawerDarkmode';
import DrawerProfile from './DrawerProfile';

export default function DrawerTopContainer() {
  return (
    <Safe safe='top' align='left'>
      <View s='ps-20'>
        <DrawerProfile />
      </View>
    </Safe>
  );
}
