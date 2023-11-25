import { BlurView } from 'expo-blur';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, Text, useTheme } from 'react-native-paper';


export default function BottomTabBar({ state, descriptors, navigation }) {
  const colors = useTheme()



  return (
    <View style={styles.container}>
      <BlurView tint={colors.dark ? 'dark' : 'light'} style={styles.blurView}>
        {state.routes.map((route, index) => {

          const { options } = descriptors[route.key];

          const show =
            options.show !== undefined
              ? options.show
              : true

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;
          const icon =
            options.icon !== undefined
              ? options.icon
              : options.tabBarIcon !== undefined
                ? options.tabBarIcon
                : null;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          if (!show) {
            return
          }

          const activeColor = options.tabBarAccessibilityLabel || colors.colors.primary 
          const inActiveColor = '' || colors.colors.onBackground 
          const tabBarIconSize = options.tabBarIconStyle?.size ? options.tabBarIconStyle?.size : 24

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[options.tabBarStyle ? options.tabBarStyle : styles.tabWrap]}
            >
              {icon && <Icon 
              style={options.tabBarIconStyle || {}}
                source={icon} size={tabBarIconSize} color={ isFocused ? activeColor : inActiveColor} />}
              <Text variant='labelSmall' style={[
                options.tabBarLabelStyle,
                { color: isFocused ? activeColor : inActiveColor }]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { position: 'absolute', bottom: 0, width: '100%', height: 60 },
  blurView: { flex: 1, flexDirection: 'row' },
  tabWrap: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})