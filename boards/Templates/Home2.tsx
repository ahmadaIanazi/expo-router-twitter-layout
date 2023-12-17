import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
} from 'react-native';
import { Icon } from 'react-native-paper';
import { Main, Safe } from '../../widgets';

const categories = [
  [
    {
      icon: '🏨',
      name: 'Hotels',
    },
    {
      icon: '✈️',
      name: 'Airplanes',
    },
    {
      icon: '🚙',
      name: 'Cars',
    },
    {
      icon: '🏠',
      name: 'Homes',
    },
  ],
  [
    {
      icon: '💵',
      name: 'Invite',
    },
    {
      icon: '🏦',
      name: 'Finance',
    },
    {
      icon: '💳',
      name: 'Wallet',
    },
    {
      icon: '🌳',
      name: 'Trees',
    },
  ],
];

export default function Home2() {
  return (
    <Main>
      <Safe safe='header'>
        <ScrollView>
          <View style={styles.topContent}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <View style={styles.banner}>
                <Text>🤑</Text>
                <Text style={styles.bannerText}>
                  Invite friends, earn $5,000
                </Text>
                <Icon source='arrow-right' size={20} color='#fff' />
              </View>
            </TouchableOpacity>
            <View style={styles.categories}>
              {categories.map((row, index) => (
                <View style={styles.categoriesRow} key={index}>
                  {row.map((item) => (
                    <TouchableOpacity
                      style={styles.category}
                      key={item.name}
                      onPress={() => {
                        // handle onPress
                      }}
                    >
                      <View style={styles.categoryIcon}>
                        <Text style={{ fontSize: 36 }}>{item.icon}</Text>
                      </View>
                      <Text style={styles.categoryText}>{item.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.contentHeader}>
              <Text style={styles.contentTitle}>Deals</Text>
              <TouchableOpacity>
                <Text style={styles.contentLink}>View all</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contentPlaceholder}>
              {/* Replace with your content */}
            </View>
          </View>
        </ScrollView>
      </Safe>
    </Main>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f1f7',
    flex: 1,
  },
  top: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 9999,
  },
  banner: {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: '#07a9e3',
    padding: 16,
    borderRadius: 16,
  },
  bannerText: {
    fontSize: 16,
    fontWeight: '600',
    // color: '#fff',
    marginLeft: 8,
    marginRight: 'auto',
  },
  categories: {
    marginTop: 12,
  },
  categoriesRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginHorizontal: -4,
  },
  category: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  categoryIcon: {
    width: '100%',
    borderRadius: 16,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 36,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#505050',
    marginTop: 8,
    textAlign: 'center',
  },
  topContent: {
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingBottom: 24,
    marginTop: 8,
    height: 420,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#505050',
  },
  contentLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#505050',
  },
  contentPlaceholder: {
    borderStyle: 'dashed',
    borderWidth: 4,
    borderColor: '#e5e7eb',
    flex: 1,
    borderRadius: 8,
  },
});