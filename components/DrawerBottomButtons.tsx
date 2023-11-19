import React, { useContext, useState } from 'react';
import { Button, Icon } from 'react-native-paper';
import Localization from '../translations';
import { Safe, Tap, View } from '../widgets';
import DrawerDarkmode from './DrawerDarkmode';
import { useUserStore } from '../stores';
import useResponsive from '../hooks/useResponsive';
import manageAuth from '../managers/manageAuth';

export default function DrawerBottomButtons() {
  return (
    <View s=' w-100% b-10 ps-10 mt-10'>
      <Safe safe='bottom'>
        <View s='row ac w-100%'>
          <LogoutButton />
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
  const { showLabel } = useResponsive();
  const [loading, setLoading] = useState(false)

  const { handleLogout } = manageAuth()

  const onPressLogout = async () => {
    setLoading(true)
    try {
      await handleLogout()
    } catch(error) {
      setLoading(false)
    }
  }

  return (
    <Button loading={loading} onPress={onPressLogout} icon='logout'>
      {showLabel && l.logout}
    </Button>
  );
}