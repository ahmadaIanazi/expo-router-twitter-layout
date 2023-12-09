import { router } from 'expo-router'
import Home from '../../boards/Home/Home'
import Home1 from '../../boards/Templates/Home1'
import Home2 from '../../boards/Templates/Home2'
import Home3 from '../../boards/Templates/Home3'
import Home4 from '../../boards/Templates/Home4'
import { triggerAppReview } from '../../features/storeReview';

export default function layout() {

  const structure = {
    landingStack: {
      onboarding: '',
      welcome: '',
    },
    loadingStack: {
      splash: '',
      missing: '',
      loadingApp: '',
      loadingData: '',
    },
    authStack: {
      login: '',
      loginByPhone: '',
      register: '',
      reset: '',
    },
    Drawer: {
      Tabs: {
        Home: {
          Feed: <Home2 />,
          SecondFeed: <Home2 />,
        },
        Action: '',
        Activity: '',
      },
      Global: '',
      User: '',
      UserActivities: '',
      SystemActivities: '',
      Settings: '',
    },
    Settings: {

    },
  }

  const settingsLists = [
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

  const drawer = {

  }

  return {
    drawer,
    settingsLists
  }
}

/**
 * The App Technical Structure
 * App
 * |- Stack (Landing)
 * |  |- Onboarding
 * |  |- Welcome
 * |- Stack (Loading)
 * |  |- Splash
 * |  |- Missing
 * |  |- Loading
 * |- Stack (Authentication)
 * |  |- Login
 * |  |- LoginByPhone
 * |  |- Register
 * |  |- Reset
 * |- Drawer (Main)
 * |  |- Bottom Tabs (Home)
 * |  |   |- Top Tabs (Feed)
 * |  |   |   |- Feed (Could be: For you, Explore, Dashboard)
 * |  |   |   |- Second Feed (Could be: Following, Friends, subscriptions, nearby  ..etc )
 * |  |   |- Action (Scan, Record, Post, Active orders.. etc )
 * |  |   |- Activity (Could be: My profile, My Cart, Messages, Inbox.)
 * |  |- Global (Search ..etc)
 * |  |- User (Profile, Dashboard, Page, Inbox ..etc)
 * |  |- UserActivities (Favorite, Likes, Bookmarks, Saved, History, Wishlist..etc)
 * |  |- SystemActivities (Notification, Payments, Invoices .. etc)
 * |  |- Settings
*/