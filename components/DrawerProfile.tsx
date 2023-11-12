
import React from 'react'
import { Background, Safe, View } from '../widgets'
import { Avatar, Text } from 'react-native-paper'
import { useUserStore } from '../stores'

export default function DrawerProfile() {
    const { displayName } = useUserStore()
  return (
    <View>
    <Safe align='left' safe='top'>
      <Avatar.Icon size={40} style={{ marginBottom: 10 }} />
      <Text variant='bodyLarge'>{displayName || 'Display Name'}</Text>
    </Safe>
    </View>
  );
}