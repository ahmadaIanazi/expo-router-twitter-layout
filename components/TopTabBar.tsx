import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Animated } from 'react-native';
import { Icon, Text, useTheme } from 'react-native-paper';
import useResponsive from '../hooks/useResponsive';
import { useAnimationStore } from '../stores/useAnimationStore';
import { BlurView } from 'expo-blur';

export default function TopTabBar({ state, descriptors, navigation }) {
  const { width, header } = useResponsive();
  const { appBarTranslateY } = useAnimationStore()

  const colors = useTheme();
  const indicatorPosition = useRef(new Animated.Value(0)).current;

  const tabWidth = width / state?.routes?.length;
  /** The inside indicator */
  const [indicatorWidth, setIndicatorWidth] = useState(100)
  const [tabBarIndicatorStyle, setTabBarIndicatorStyle] = useState({})
  const [tabBarStyle, setTabBarStyle] = useState({})

  useEffect(() => {
    animateIndicator(state.index); // Initially set the indicator position based on the active tab
  }, [state.index]);

  const animateIndicator = (index) => {

    const { options } = descriptors[state.routes[index].key];
    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
          ? options.title
          : state.routes[index].name;


    setTabBarIndicatorStyle(options.tabBarIndicatorStyle || {})
    setTabBarStyle(options.tabBarStyle || {})

    setIndicatorWidth(label.length * 8)


    Animated.spring(indicatorPosition, {
      toValue: index * tabWidth,
      bounciness: 0,
      useNativeDriver: true,
    }).start();
  };

  const renderIndicator = () => {

    return (
      <Animated.View
        style={[
          styles.indicator,
          {
            transform: [{ translateX: indicatorPosition }],
            width: tabWidth,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        <View
          style={[
            styles.indicator,
            tabBarIndicatorStyle,
            {
              width: tabBarIndicatorStyle.width ? tabBarIndicatorStyle.width : indicatorWidth,
            },
          ]}
        />
      </Animated.View>
    );
  };

  const handleTabPress = (index) => {
    setIndicatorWidth(state.routes[index].name.length * 10)
    navigation.navigate(state.routes[index].name, state.routes[index].params);
    animateIndicator(index);
  };

  const blurIntesity = tabBarStyle.blurIntesity !== undefined ? tabBarStyle.blurIntesity : 80
  const isBlur = tabBarStyle.blur !== undefined ? tabBarStyle.blur : true

  return (
    <Animated.View style={[styles.container, tabBarStyle, {top: header.disappearTo - 4 ,transform: [{ translateY: appBarTranslateY }]}]}>
      <BlurView intensity={isBlur ? blurIntesity : 0} tint={colors.dark ? 'dark' : 'light'} style={styles.tabsContainer}>
        {state.routes.map((route, index) => {

          const { options } = descriptors[route.key];

          const show =
            options.show !== undefined
              ? options.show
              : true

          const icon =
            options.icon !== undefined
              ? options.icon
              : options.tabBarIcon !== undefined
                ? options.tabBarIcon
                : null;

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;


          const isFocused = state.index === index;

          if (!show) {
            return
          }


          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole='button'
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={() => handleTabPress(index)}
              style={styles.tabWrap}
            >
              {icon && (
                <Icon
                  source={icon}
                  size={18}
                  color={
                    isFocused
                      ? colors.colors.primary
                      : colors.colors.onBackground
                  }
                />
              )}
              <Text
                variant='labelLarge'
                style={{
                  color: isFocused
                    ? colors.colors.primary
                    : colors.colors.onBackground,
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          )
        })}
      </BlurView>
      {renderIndicator()}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 101,
    // position:'absolute',
    // height: 100,
    width: '100%'
  },
  tabsContainer: {
    flexDirection: 'row'
  },
  tabWrap: { flex: 1, flexDirection:'row', justifyContent: 'center', alignItems: 'center', marginBottom: 4 },
  indicator: {
    position: 'absolute',
    bottom: 0,
  },
});