import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function Posts_layout() {
  return (
    <Stack>
        <Stack.Screen name='[param]' options={{
            headerShown: false
        }} />
    </Stack>
  )
}

const styles = StyleSheet.create({})