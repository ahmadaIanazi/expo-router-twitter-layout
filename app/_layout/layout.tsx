import { router } from 'expo-router'

import { triggerAppReview } from '../../features/storeReview';

export const Drawers = [
  {
    name: '(tabs)',
    title: 'Home',
    icon: 'home-outline',
  },
  {
    name: 'index',
    title: 'Drawer One',
    icon: 'bell-outline',
  },
  {
    name: 'DrawerTwo',
    title: 'Drawer Two',
    icon: 'heart-outline',
  },
]

export const tabs = [
  { name: '(home)', options: { title: 'Home', tabBarIcon: 'home' } },
  { name: 'Action', options: { title: 'Explore', icon: 'account' } },
  { name: 'Activity', options: { title: 'Tabs', icon: 'cart' } },
  { name: 'nested', options: { show: false } },
]

export const topTabs = [
  { name: 'Feed', options: { title: 'For You', icon: 'account' } },
  { name: 'SecondFeed', options: { title: 'Following' } },
]

export const lists = [
    {
      title: 'Settings',
      icon: 'cog',
      items: [
        {
          title: 'Settings',
          icon: 'cog',
          onPress: () => {
            router.push('/(modals)/Settings');
          },
        },
        {
          title: 'Help Center',
          icon: 'lifebuoy',
          onPress: () => {
            router.push('/(modals)/Help');
          },
        },
        {
          title: 'Terms and Conditions',
          icon: 'file-star',
          onPress: () => {
            router.push('/(modals)/Terms');
          },
        },
        {
          title: 'Rate us',
          icon: 'star',
          onPress: () => triggerAppReview(),
        },
        {
          title: 'About us',
          icon: 'information',
          onPress: () => {
            router.push('/(modals)/About');
          },
        },
      ],
    },
  ];