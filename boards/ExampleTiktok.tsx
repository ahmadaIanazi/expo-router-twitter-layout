import { StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { Text, useTheme } from 'react-native-paper';

export default function ExampleTiktok() {
  const colors = useTheme()

  return (
    <View style={{ flex: 1, backgroundColor: colors.colors.background }}>
      <PagerView orientation='vertical' style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key='1'>
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key='2'>
          <Text>Second page</Text>
        </View>
        <View style={styles.page} key='3'>
          <Text>Third page</Text>
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
