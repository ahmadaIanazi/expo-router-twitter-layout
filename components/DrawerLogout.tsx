import React, { useContext } from 'react';
import { Button, Icon } from 'react-native-paper';
import Localization from '../translations';
import { Safe, Tap, View } from '../widgets';
import DrawerDarkmode from './DrawerDarkmode';
import { useUserStore } from '../stores';

export default function DrawerLogout() {

  return (
    <View s=' w-100% b-10 ps-10 mt-10'>
      <Safe safe='bottom'>
        <View s='row ac w-100%'>
          <LogoutButton/>
          <DarkModeButton />
        </View>
      </Safe>
    </View>
  );
}

function DarkModeButton() {
  const { setDark, dark } = useUserStore();
  return (
    <Tap onPress={() => setDark(!dark)} s='r-20 absolute'>
      <Icon source={dark ? 'weather-night' : 'white-balance-sunny'} size={20} />
    </Tap>
  );
}

function LogoutButton() {
  const l = useContext(Localization);

  return (
    <Button onPress={() => {}} icon={() => <Icon source='logout' size={20} />}>
      {l.logout}
    </Button>
  );
}