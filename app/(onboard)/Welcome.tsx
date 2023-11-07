import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.display}>Welcome</Text>
      <Text style={styles.paragraph}>Implement Welcome Logic to navigate to Login or Register</Text>
      <View style={{flexDirection: 'row'}}>
      <Button title='Register' color='purple' onPress={() => router.replace('/(auth)/Register')} />
      <Button title='Login' color='purple' onPress={() => router.replace('/(auth)/Login')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  display: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 48,
  },
  paragraph: {
    color: 'purple',
    fontSize: 14,
  },
});
