# Expo Starter Kit

Expo Router v2 with Twitter Layout, Drawer, Tabs, Onboarding, and Authentication

## Gettings started

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

npx expo install --fix
watchman watch-del-all
npx expo-doctor
depcheck
yarn autoclean --init
yarn autoclean --force

# Expo Starter Kit

- [Initial Routing]
npx expo start --clear

- [Simulator]
eas build --profile development-simulator --platform ios

- [Device]
eas build --profile development --platform ios


# For Production

- [Update]

eas update --branch production --message "Bold Update Quick Fix."

# Submit to App Store

Use [`EAS`](to_configure_onAirUpdate) to be able to push updates to the `app/` directory.

[1] [Configure]
eas update:configure

[2] [Build]
eas build --platform ios

[3] [Submit]
eas submit -p ios --latest

## EAS JSON

  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": {
        "resourceClass": "m-medium"
      }
    },
    "development-simulator": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": {
        "simulator": true
      }
    },
    "preview": {
      "ios": {
        "simulator": true
      }
    },
    "internal": {
      "ios": {
        "distribution": "internal"
      }
    },
    "production": {
      "ios": {
        "resourceClass": "m-medium"
      }
    }
  },
  "submit": {
    "production": {
      "ios": {
        "appleId": "<wecodesaudi@gmail.com>",
        "ascAppId": "6448721405",
        "appleTeamId": "PV3M586KN2"
      }
    }
  }
