import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function PostDetails() {
  const id = useLocalSearchParams()

  console.log('ID:', id)
  return (
    <View>
      <Text>PostDetails:</Text>
    </View>
  )
}