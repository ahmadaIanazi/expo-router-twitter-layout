import { StyleSheet, Text, View } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.display}>Welcome</Text>
      <Text style={styles.paragraph}>Implement Welcome Logic here</Text>
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
