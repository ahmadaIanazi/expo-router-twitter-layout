
import React from 'react'
import { Background, Safe, View } from '../widgets'
import { Avatar, Text } from 'react-native-paper'
import { useUserStore } from '../stores'
import useResponsive from '../hooks/useResponsive'

export default function DrawerProfile() {
  const { displayName } = useUserStore()
  const { showLabel } = useResponsive();

  return (
    <View>
    <Safe align='left' safe='top'>
      <Avatar.Icon size={40} style={{ marginBottom: 10 }} />
      {showLabel && <Text variant='bodyLarge'>{displayName || 'Display Name'}</Text>}
    </Safe>
    </View>
  );
}