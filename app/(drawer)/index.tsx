import { StyleSheet } from 'react-native';

import { Text, View } from 'react-native';
import { BackButton, Background } from '../../widgets';
import { Button } from 'react-native-paper';
import { router } from 'expo-router';

export default function DrawerOne() {
  return (
    <Background>
      <BackButton />
      <Button onPress={()=> router.push('/(drawer)/(tabs)/(toptabs)/A')}>Home</Button>
      <Text style={styles.title}>Drawer (index)</Text>
    </Background>
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
});
