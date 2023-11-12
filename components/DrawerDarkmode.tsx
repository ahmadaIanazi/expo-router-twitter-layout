
import React from 'react'
import { Background, Safe, View } from '../widgets'
import { Avatar, Switch, Text } from 'react-native-paper'
import { useUserStore } from '../stores'

export default function DrawerDarkmode() {
  const { displayName } = useUserStore();
  return (
    <View s='mt-0'>
      <Switch />
    </View>
  );
}