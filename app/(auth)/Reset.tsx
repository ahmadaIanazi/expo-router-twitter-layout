import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Reset() {
  return (
    <View style={styles.container}>
      <Button title='Back' color='white' onPress={() => router.back()} />
      <Text style={styles.display}>Reset</Text>
      <Text style={styles.paragraph}>Implement Reset Logic here</Text>
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
