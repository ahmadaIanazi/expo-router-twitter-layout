import { Button, StyleSheet } from 'react-native';

import { router, useNavigation } from 'expo-router';
import { Text, View } from 'react-native';


export default function ToptabTwo() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>B</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
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
});
