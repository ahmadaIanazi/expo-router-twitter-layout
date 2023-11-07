import { Button, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

export default function Login() {
  return (
    <View style={styles.container}>
      <Button title='Back' color='white' onPress={() => router.back()} />
      <Text style={styles.display}>LOGIN</Text>
      <Text style={styles.paragraph}>Implement Login Logic here</Text>
      <Button title='Reset' color='white' onPress={() => router.push('/(auth)/Reset')} />
      <Button title='Register' color='white' onPress={() => router.push('/(auth)/Register')} />
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
