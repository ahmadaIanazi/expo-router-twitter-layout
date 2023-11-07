import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function Posts_layout() {
  return (
    <Stack>
        <Stack.Screen name='index' options={{
            title:'Posts'
        }} />
        <Stack.Screen name='[id]' options={{
            title:'Post Details'
        }} />
    </Stack>
  )
}

const styles = StyleSheet.create({})