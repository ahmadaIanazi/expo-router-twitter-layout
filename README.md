# Expo Starter Kit with Firebase

Expo Router v2 with Twitter Layout, Drawer, Tabs, Onboarding, and Authentication, Phone Authnetication works on Development only (Does NOT work with Expo Go). Firebase Analytics, Firebase React Native.

## Gettings started

## Prerequsites

- Apple Provisioning profile must have " Apple Sign-in" checked from the developer account. 
- Google Firebase, and Google Console access.
- package, bundleIdentifier, schema, slug, GoogleService-info.plist its better to have a one unified audience.

```yarn install```

Then

```yarn run start```

## Structure

I tried to keep it as simple as possible. it contains drawer that is the main navigation, and the drawer contains tabs.

### 1

- [routing_setup.tsx]
This file contains the logic for authentication where you should connect your logic it.
Currently, you can manually toggele "true" to "false" and see the routing logic your self.

### 2

- [layout_setup.tsx]
Here you can declare screens, and groups that dont have _layouts.tsx file for them.

### 3

- [providers_setup.tsx]
Here where you can add providers and wrap your whole app with those providers. This is triggered before the router entry starts.

### Note

In order to see the logic and screens of the app you must go to (app/routing_setup.tsx) to toggle the isSignedIn, isLoaded ..etc

# Doctor

`npx expo install --fix`
`watchman watch-del-all`
`npx expo-doctor`
`depcheck`
`yarn autoclean --init`
`yarn autoclean --force`

# Expo Starter Kit

- [Initial Routing]
``yarn run start``
or
``yarn run clear``

- [Simulator]
`eas build --profile simulator --platform ios`

- [Device]
`eas build --profile device --platform ios`


# For Production

- [Update]

`eas update --branch production --message "Bold Update Quick Fix."`

# Submit to App Store

Use [`EAS`](to_configure_onAirUpdate) to be able to push updates to the `app/` directory.

[1] [Configure]
`eas update:configure`

[2] [Build]
`eas build --platform ios`

[3] [Submit]
`eas submit -p ios --latest`

## Firebase React Native

To Download GoogleService-Info.plist 
This is correct. If you are using EAS build and Managed Workflow and found out that "OAuth 2.0 Client IDs" list is empty. What you need to do are

### iOS

1. Firebase Console: Go to your Firebase Console and navigate to the Authentication section.
2. Sign-In Method: Click on the "Sign-in method" tab, then click on "Google."
3. Ignore Safelist client IDs from external projects and Web SDK configuration (If you're only working with a React Native application and not a web app, you don't need to focus on this.), unless you know what you are doing.
4. download new google-services.json and GoogleService-Info.plist and put them into your project root
5. "eas build --profile simulator --platform ios"

### Android

1. Firebase Console: Go to your Firebase Console and navigate to the Authentication section.
2. Sign-In Method: Click on the "Sign-in method" tab, then click on "Google."
3. Ignore Safelist client IDs from external projects and Web SDK configuration (If you're only working with a React Native application and not a web app, you don't need to focus on this.), unless you know what you are doing.
4. After saving, you will see in your Android app "Provide SHA-1 fingerprint, and then download and replace the configuration file in your app. Go to Project Settings > Your apps section."
5. go to the root of your project, in terminal enter "eas credentials"
6. Select platform › Android => Which build profile do you want to configure? › development => Using build profile: development => then you will see SHA1 Fingerprint on your screen.
7. Get the SHA1 Fingerprint from the screen
8. Go to the Firebase Console.
9. Click on your project.
10. Navigate to Project Settings (usually the gear icon near the top-left).
11. Under the "Your apps" section, select your Android app.
12. Scroll to the "SHA certificate fingerprints" section.
13. Click on "Add fingerprint" and paste in your SHA1 fingerprint.
14. download new google-services.json and GoogleService-Info.plist and put them into your project root
15. "eas build --profile simulator --platform ios"

# Push Notification

## For Deep Nesting and navigating directly from a notificaiton

Add this to your Push Notification Data object.
`{
  date:{
  "route": '/navigate/to/route/param'
  }
}`

## EAS JSON

``{
  "cli": {
    "version": ">= 3.9.2"
  },
  "build": {
    "device": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": {
        "resourceClass": "m-medium"
      },
      "channel": "device"
    },
    "simulator": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": {
        "simulator": true
      },
      "channel": "simulator"
    },
    "production": {
      "env": {
        "FIREBASE_apiKey": "AIzaSyDe2_TjsRa5VfrsT",
        "FIREBASE_authDomain": "bettafirebaseapp.com",
        "FIREBASE_projectId": "bett",
        "FIREBASE_storageBucket": "bettagot.com",
        "FIREBASE_messagingSenderId": "1728616",
        "FIREBASE_appId": "1:172758818d3781a91091d",
        "FIREBASE_measurementId": "GP0KQ"
      },
      "ios": {
        "resourceClass": "m-medium"
      },
      "channel": "production"
    }
  },
  "submit": {
    "production": {
      "ios": {
        "appleId": "wecodesaudi@gmail.com",
        "ascAppId": "6448721405",
        "appleTeamId": "PV3M586KN2"
      }
    }
  }
}``

## APP JSON

``{
  "expo": {
    "name": "simple",
    "slug": "simple",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./resources/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./resources/images/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "googleServicesFile": "./GoogleService-Info.plist",
      "infoPlist": {
        "NSUserTrackingUsageDescription": "Allow this app to collect app-related data that can be used for tracking you or your device."
      },
      "bundleIdentifier": "com.ahmadalanazi.simple"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./resources/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "bundler": "metro",
      "favicon": "./resources/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      "expo-tracking-transparency",
      "expo-localization",
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
      [
        "expo-build-properties",
        {
          "ios": {
            "useFrameworks": "static"
          }
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "router": {
        "origin": false
      },
      "eas": {
        "projectId": "7f18454b-3ee7-4048-9119-5078fdb574a6"
      }
    }
  }
}``

## BABEL CONFIG

``module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      'react-native-paper/babel',
      'react-native-reanimated/plugin',
    ],
  };
};``

## TS CONFIG

``{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    ".expo/types/**/*.ts",
    "expo-env.d.ts"
, "jest/app_Layout.test.js"  ]
}``
