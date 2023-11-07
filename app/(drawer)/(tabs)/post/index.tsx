import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Post() {
  return (
    <View>
      <Text>Post</Text>
      <Link  href='/post/2'>Open Post</Link>
    </View>
  )
}

const styles = StyleSheet.create({})