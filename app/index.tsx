import { StyleSheet, Text, View } from 'react-native';

export default function Splash() {
  return (
    <View style={styles.container}>
        <Text style={styles.display}>EXPO ROUTER</Text>
        <Text style={styles.paragraph}>Twitter Layout - With authentication logic</Text>
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
    color:'white',
    fontWeight: 'bold',
    fontSize: 48,
  },
  paragraph: {
    color:'white',
    fontSize: 14,
  },
});