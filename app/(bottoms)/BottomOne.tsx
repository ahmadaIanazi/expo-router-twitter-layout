import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { bottom } from 'bottoms'

export default function BottomOne() {
  return (
    <View>
      <Text>BottomOne</Text>
      <Button mode='contained' onPress={()=> bottom.close() }>Close</Button>
    </View>
  )
}

const styles = StyleSheet.create({})