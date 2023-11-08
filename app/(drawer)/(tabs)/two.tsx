import { Button, StyleSheet, TextInput } from 'react-native';

import { Text, View } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

export default function TabTwoScreen() {
  const [param, setParam] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Another Tab</Text>
      <Text style={styles.paragraph}>Type anything below to set as a local param</Text>
      <TextInput
        style={styles.input}
        placeholder='Type here ..'
        placeholderTextColor='yellow'
        onChangeText={setParam}
      />
      <Button title='Next' color='white' onPress={() => router.push(`/nested/${param}`)} />
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input:{
    width:'80%',
    height: 60,
    color:'yellow',
    borderColor:'yellow',
    borderWidth: 2,
    margin:20,
    padding: 10,
    textAlign:'center',
    borderRadius: 20,
  }
});
