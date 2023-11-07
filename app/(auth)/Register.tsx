import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.display}>Register</Text>
      <Text style={styles.paragraph}>Implement Register Logic here</Text>
      <Button title='Login' color='white' onPress={() => router.push('/(auth)/Login')} />
      <Button title='To Home Screen' color='yellow' onPress={() => router.replace('/(drawer)/(tabs)')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  display: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 48,
  },
  paragraph: {
    color: 'white',
    fontSize: 14,
  },
});
