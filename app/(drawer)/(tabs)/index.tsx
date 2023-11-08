import { Button, StyleSheet } from 'react-native';

import { router, useNavigation } from 'expo-router';
import { Text, View } from 'react-native';

export default function TabOneScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab (index)</Text>
      <Button title='Open Modal' color='white' onPress={() => router.push('/modal')} />
      <Button title='Toggle Drawer' color='white' onPress={() => navigation.toggleDrawer()} />
    </View>
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
