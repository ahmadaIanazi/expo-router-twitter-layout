import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Introduction() {
  return (
    <View style={styles.container}>
      <Text style={styles.display}>Introduction</Text>
      <Text style={styles.paragraph}>Implement Introduction Logic here</Text>
      <Button title='Get Started' color='purple' onPress={()=> router.replace('/(auth)/Register')} />
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
