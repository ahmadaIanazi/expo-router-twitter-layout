import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Divider, Icon, Text } from 'react-native-paper';
import { Safe, Spacer } from '../../widgets';
import SearchInput from '../../components/SearchInput';

export default function Home1() {
  return (
    <Safe safe='all'>
      <View style={styles.top}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <Image
              alt=""
              source={{
                uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
              }}
              style={styles.avatar}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <Icon source="bell" size={24} />
          </TouchableOpacity>
        </View>
          <Text variant='displaySmall'>Hello, Ryan!</Text>
          <Text variant='bodyLarge'>You have 3 lectures today</Text>
        <Spacer />
        <Divider />
        <Spacer />
        <SearchInput />
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.contentTitle}>Courses</Text>
          <TouchableOpacity>
            <Text style={styles.contentLink}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentPlaceholder}>
          {/* Replace with your content */}
        </View>
      </View>
    </Safe>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  top: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  greetingTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1a2525',
  },
  greetingText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a2525',
    marginTop: 8,
  },
  content: {
    paddingVertical: 8,
    paddingHorizontal: 22,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  contentTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1a2525',
  },
  contentLink: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a2525',
  },
  contentPlaceholder: {
    borderStyle: 'dashed',
    borderWidth: 4,
    borderColor: '#e5e7eb',
    flex: 1,
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerImg: {
    width: 40,
    height: 40,
    borderRadius: 9999,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 9999,
  },
});