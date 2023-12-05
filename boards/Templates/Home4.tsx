import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  Animated,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import { Icon } from 'react-native-paper';

const HEADER_OFFSET = 100;
const HEADER_BACKGROUND = {
  default: 'rgba(255,255,255,0)',
  scroll: 'rgba(255,255,255,1)',
};

export default function Home4() {
  const [value, setValue] = React.useState(0);

  const scrollY = React.useRef(new Animated.Value(0)).current;
  const backgroundColor = scrollY.interpolate({
    inputRange: [0, HEADER_OFFSET, HEADER_OFFSET + 10],
    outputRange: [
      HEADER_BACKGROUND.default,
      HEADER_BACKGROUND.default,
      HEADER_BACKGROUND.scroll,
    ],
  });
  const opacity = scrollY.interpolate({
    inputRange: [0, HEADER_OFFSET, HEADER_OFFSET + 10],
    outputRange: [1, 1, 0],
  });
  const opacityReversed = scrollY.interpolate({
    inputRange: [0, HEADER_OFFSET, HEADER_OFFSET + 10],
    outputRange: [0, 0, 1],
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={[styles.actions, { backgroundColor, opacity }]}>
        <SafeAreaView>
          <View style={styles.actionWrapper}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={{ marginRight: 'auto' }}>
              <View style={[styles.action, styles.actionFilled]}>
                <Icon color="#323142" source="chevron-left" size={22} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.action}>
                <Icon color="#fff" source="share" size={22} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.action}>
                <Icon color="#fff" source="search" size={22} />
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Animated.View>
      <Animated.View
        style={[styles.actions, { backgroundColor, opacity: opacityReversed }]}>
        <SafeAreaView>
          <View style={styles.actionWrapper}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={{ marginRight: 'auto' }}>
              <View style={[styles.action, styles.actionFilled]}>
                <Icon color="#323142" source="chevron-left" size={22} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.action}>
                <Icon color="#323142" source="share" size={22} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.action}>
                <Icon color="#323142" source="search" size={22} />
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Animated.View>
      <ScrollView
        style={styles.container}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={1}>
        <StatusBar barStyle="light-content" />
        <View style={styles.hero}>
          <Image
            alt=""
            style={styles.heroImg}
            source={{
              uri: 'https://assets.withfra.me/Detailed.3--pizza.png',
            }}
          />

          <View style={styles.heroStatus}>
            <Text style={styles.heroStatusText}>Opened</Text>
          </View>
        </View>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.title}>Arthur's Pizza Hollywood</Text>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.headerTopAction}>
              <Icon color="#323142" source="heart" size={22} />
            </TouchableOpacity>
          </View>

          <View style={styles.headerLocation}>
            <Icon color="#FF9801" source="map-pin" size={14} />

            <Text style={styles.headerLocationText}>
              Paramount Blvd, CA 90723
            </Text>
          </View>

          <View style={styles.stats}>
            {[
              {
                label: 'Delivery time',
                icon: 'watch',
                color: '#C9C9C9',
                value: '30 min',
              },
              { label: 'Rating', icon: 'star', color: '#FF9801', value: '4.8' },
              {
                label: 'Work time',
                icon: 'clock',
                color: '#C9C9C9',
                value: '7am - 9pm',
              },
            ].map(({ label, value, icon, color }, index) => (
              <View
                key={index}
                style={[
                  styles.statsItem,
                  index === 0 && { borderLeftWidth: 0 },
                ]}>
                <Text style={styles.statsItemText}>{label}</Text>

                <View style={styles.statsItemContent}>
                  <Icon color={color} source={icon} size={16} />

                  <Text style={styles.statsItemValue}>{value}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.contentTabs}>
            {[
              { name: 'Menu' },
              { name: 'Reviews', badge: 22 },
              { name: 'Information' },
            ].map(({ name, badge }, index) => {
              const isActive = index === value;

              return (
                <View
                  key={name}
                  style={[
                    styles.contentTabsItemWrapper,
                    isActive && { borderBottomColor: '#ff9801' },
                  ]}>
                  <TouchableOpacity
                    onPress={() => {
                      setValue(index);
                    }}>
                    <View style={styles.contentTabsItem}>
                      <Text
                        style={[
                          styles.contentTabsItemText,
                          isActive && { color: '#323142' },
                        ]}>
                        {name}
                      </Text>

                      {badge && (
                        <View style={styles.contentTabsItemBadge}>
                          <Text style={styles.contentTabsItemBadgeText}>
                            {badge}
                          </Text>
                        </View>
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>

          <View style={styles.categories}>
            <View style={styles.categoriesHeader}>
              <Text style={styles.categoriesTitle}>Food categories</Text>

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.categoriesAction}>
                <Text style={styles.categoriesActionText}>View All</Text>

                <Icon color="#706F7B" source="chevron-right" size={16} />
              </TouchableOpacity>
            </View>

            <ScrollView
              contentContainerStyle={styles.categoriesContent}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
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

          <View style={styles.placeholder}>
            <View style={styles.placeholderInset}>
              {/* Replace with your content */}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  action: {
    width: 36,
    height: 36,
    borderRadius: 12,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionFilled: {
    backgroundColor: '#e8f0f9',
  },
  actionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: -8,
    paddingHorizontal: 16,
  },
  hero: {
    position: 'relative',
  },
  heroOverflow: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  heroImg: {
    width: '100%',
    height: 200,
  },
  heroStatus: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: '#ff9801',
    borderRadius: 50,
  },
  heroStatusText: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '600',
    letterSpacing: 0.1,
    color: '#ffffff',
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  headerTopAction: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    width: 44,
    height: 44,
    maxWidth: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
    backgroundColor: '#f1f3f4',
    borderRadius: 9999,
  },
  headerLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  headerLocationText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.01,
    color: '#323142',
    opacity: 0.7,
    marginLeft: 4,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 38,
    letterSpacing: -0.015,
    color: '#323142',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginBottom: 6,
  },
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 20,
    marginTop: 8,
  },
  contentTabs: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  stats: {
    flexDirection: 'row',
  },
  statsItem: {
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  statsItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsItemText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#323142',
    opacity: 0.7,
    marginBottom: 4,
  },
  statsItemValue: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#323142',
    marginLeft: 4,
  },
  contentTabsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 4,
  },
  contentTabsItemWrapper: {
    marginRight: 28,
    borderColor: 'transparent',
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
  },
  contentTabsItemText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#706f7b',
  },
  contentTabsItemBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginLeft: 8,
    backgroundColor: '#ff9801',
    borderRadius: 20,
  },
  contentTabsItemBadgeText: {
    fontWeight: '600',
    fontSize: 11,
    lineHeight: 12,
    color: '#fff',
  },
  categoriesContent: {
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  categoriesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  categoriesTitle: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 28,
    color: '#323142',
  },
  categoriesAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  categoriesActionText: {
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
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 0,
    padding: 20,
  },
  placeholderInset: {
    borderWidth: 4,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
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
  container: {
    backgroundColor: '#F4F5F6',
  },
  actions: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9,
    paddingVertical: 12,
  },
  categories: {
    marginTop: 20,
  },
});