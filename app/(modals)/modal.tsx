import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Button title='Back' color='black' onPress={() => router.back()} />

      <Text style={styles.display}>Modal</Text>
      <Text style={styles.paragraph}>Implement Modal Logic here</Text>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
  },
  display: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 48,
  },
  paragraph: {
    color: 'black',
    fontSize: 14,
  },
});
