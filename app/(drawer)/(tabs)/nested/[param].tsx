import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'

export default function PostDetails() {
  const { param } = useLocalSearchParams()

  return (
    <View style={styles.container}>
      <Button title='back' onPress={()=> router.back()}/>
      <Text style={styles.title}>{param}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color:'yellow',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
