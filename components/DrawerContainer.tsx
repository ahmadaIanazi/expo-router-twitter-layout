import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React, { useContext, useState } from 'react';
import { Avatar, Button, Divider, Icon, List, Text } from 'react-native-paper';
import Localization from '../translations';
import { Safe, Tap, View } from '../widgets';
import { useUserStore } from '../stores';
import useResponsive from '../hooks/useResponsive';
import manageAuth from '../managers/authentication';
import { router } from 'expo-router';
import manageLocales from '../managers/locales';

export default function DrawerContainer(props: any) {
const { l } = manageLocales()

  return (
    <View s='f'>
      <DrawerTopContainer />
      <Divider style={{ width: '90%', alignSelf: 'center', marginVertical: 10 }} />
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          zIndex: 10,
          flex: 2,
        }}
      >
        <View s='f-2'>
          <DrawerItemList {...props} />
        </View>
        <DrawerBottomContainer {...props} />
      </DrawerContentScrollView>
    </View>
  );
}


function DrawerTopContainer() {
  return (
    <Safe safe='top' align='left'>
      <View s='ps-20'>
        <DrawerProfile />
      </View>
    </Safe>
  );
}


function DrawerProfile() {
  const { displayName } = useUserStore()
  const { drawer } = useResponsive();

  return (
    <View>
      <Safe align='left' safe='top'>
        <Avatar.Icon icon={{ source: 'heart' }} size={40} style={{ marginBottom: 10 }} />
        {drawer.showLabel && <Text variant='bodyLarge'>{displayName || 'Display Name'}</Text>}
      </Safe>
    </View>
  );
}

function DrawerBottomContainer(props: any) {

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

function DrawerBottomLists({ lists }) {
  const { drawer } = useResponsive();

  return (
    <List.Section style={{ width: '100%' }}>
      {lists.map((section) => {
        return (
          <List.Accordion
            left={() => !drawer.showLabel && <Icon source={section.icon} size={24} />}
            key={section.title}
            title={drawer.showLabel && section.title}
          >
            {section.items.map((item) => {
              return (
                <List.Item
                  key={item.title}
                  title={drawer.showLabel && item.title}
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

function DrawerBottomButtons() {
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
  const isAnonymous = manageAuth().status.isAnonymous

const { l } = manageLocales()
  const { drawer } = useResponsive();
  const [loading, setLoading] = useState(false)

  const { handleLogout } = manageAuth()

  const onPressLogout = async () => {
    setLoading(true)
    try {
      await handleLogout()
    } catch (error) {
      setLoading(false)
    }
  }

  const onPressRegister = () => router.push('/(modals)/Authentication')

  const LogoutButtonView = (
    <Button loading={loading} onPress={onPressLogout} icon='logout'>
      {drawer.showLabel && l.logout}
    </Button>
  )

  const registerButtonView = (
    <Button onPress={onPressRegister} icon='login'>
      {drawer.showLabel && l.login}
    </Button>
  )

  return isAnonymous ? registerButtonView : LogoutButtonView
}