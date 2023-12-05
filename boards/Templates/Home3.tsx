import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Icon } from 'react-native-paper';

const items = [
  {
    img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    name: 'Rosie',
  },
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
    name: 'Lorraine',
  },
  {
    img: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Knapp',
  },
  {
    img: 'https://images.unsplash.com/photo-1553240799-36bbf332a5c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Bell',
  },
  {
    img: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Shelby',
  },
  {
    img: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    name: 'Bernard',
  },
  {
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    name: 'Elma',
  },
];

export default function Home3() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View>
              <Text style={styles.headerBadge}>
                {new Date('2022-08-21').toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'short',
                  weekday: 'long',
                })}
              </Text>

              <Text style={styles.headerTitle}>Hi, Dwight!</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.avatar}>
                <Image
                  alt=""
                  source={{
                    uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                  }}
                  style={styles.avatarImg}
                />

                <View style={styles.avatarNotification} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.balance}>
            <Text style={styles.balanceTitle}>Balance</Text>

            <Text style={styles.balanceValue}>
              <Text style={{ fontSize: 17, fontWeight: '400' }}>$</Text>
              128,300
            </Text>
          </View>

          <View style={styles.send}>
            <Text style={styles.sendTitle}>Send to</Text>

            <ScrollView
              contentContainerStyle={styles.sendScroll}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {items.map(({ img, name }, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      // handle onPress
                    }}>
                    <View style={styles.sendUser}>
                      <Image
                        alt=""
                        source={{ uri: img }}
                        style={styles.sendUserAvatar}
                      />

                      <Text style={styles.sendUserName}>{name}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          <View style={styles.placeholder}>
            <View style={styles.placeholderInset}>

              <View style={styles.list}>
                <View style={styles.listHeader}>
                  <Text style={styles.listTitle}>Food categories</Text>

                  <TouchableOpacity
                    onPress={() => {
                      // handle onPress
                    }}
                    style={styles.listAction}>
                    <Text style={styles.listActionText}>View All</Text>

                    <Icon color="#706F7B" source="chevron-right" size={16} />
                  </TouchableOpacity>
                </View>

                <ScrollView contentContainerStyle={styles.listContent} horizontal={true} showsHorizontalScrollIndicator={false}>
                  {[
                    {
                      img: 'https://assets.withfra.me/Detailed.3--menu-1.png',
                      label: 'Pizza',
                      color: '#F7EDD0',
                    },
                    {
                      img: 'https://assets.withfra.me/Detailed.3--menu-2.png',
                      label: 'Burger',
                      color: '#F1DFC5',
                    },
                    {
                      img: 'https://assets.withfra.me/Detailed.3--menu-3.png',
                      label: 'Sushi',
                      color: '#B2DCC4',
                    },
                    {
                      img: 'https://assets.withfra.me/Detailed.3--menu-4.png',
                      label: 'Dessert',
                      color: '#F7C5BA',
                    },
                    {
                      img: 'https://assets.withfra.me/Detailed.3--menu-1.png',
                      label: 'Pizza',
                      color: '#F7EDD0',
                    },
                    {
                      img: 'https://assets.withfra.me/Detailed.3--menu-2.png',
                      label: 'Burger',
                      color: '#F1DFC5',
                    },
                    {
                      img: 'https://assets.withfra.me/Detailed.3--menu-3.png',
                      label: 'Sushi',
                      color: '#B2DCC4',
                    },
                    {
                      img: 'https://assets.withfra.me/Detailed.3--menu-4.png',
                      label: 'Dessert',
                      color: '#F7C5BA',
                    },
                  ].map(({ img, label, color }, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        // handle onPress
                      }}>
                      <View style={[styles.card, { backgroundColor: color }]}>
                        <Image source={{ uri: img }} style={styles.cardImg} />

                        <Text style={styles.cardLabel}>{label}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  balance: {
    backgroundColor: '#f99027',
    borderRadius: 24,
    marginTop: 32,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  balanceValue: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    marginTop: 8,
  },
  send: {
    marginVertical: 32,
  },
  sendTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  sendScroll: {
    marginHorizontal: -8,
  },
  sendUser: {
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendUserAvatar: {
    width: 54,
    height: 54,
    borderRadius: 9999,
    marginBottom: 6,
  },
  sendUserName: {
    fontSize: 15,
    color: '#1e1e1e',
    fontWeight: '500',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerBadge: {
    fontSize: 15,
    fontWeight: '400',
    color: '#a3a3a3',
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: '#121212',
  },
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 0,
    padding: 0,
  },
  placeholderInset: {
    // borderWidth: 4,
    // borderColor: '#e5e7eb',
    // borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  avatar: {
    position: 'relative',
  },
  avatarImg: {
    width: 48,
    height: 48,
    borderRadius: 9999,
  },
  avatarNotification: {
    position: 'absolute',
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: '#fff',
    top: 0,
    right: -2,
    width: 14,
    height: 14,
    backgroundColor: '#d1d5db',
  },
  listContent: {
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  listTitle: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 28,
    color: '#323142',
  },
  listAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  listActionText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#706f7b',
    marginRight: 2,
  },
  card: {
    width: 80,
    paddingVertical: 16,
    paddingHorizontal: 6,
    borderRadius: 12,
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  cardImg: {
    width: 40,
    height: 40,
    marginBottom: 12,
  },
  cardLabel: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    color: '#252117',
  },
  list: {
    marginBottom: 24,
  },
});