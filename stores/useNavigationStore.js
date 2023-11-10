import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useNavigationStore = create(
  persist(
    (set, get) => ({
      isWeb: false,
      setIsWeb: (res) => {
        set({ isWeb: res });
      },
      onboardPermissions: false,
      locationPermission: false,
      locationPermissionState: null,
      cameraPermission: false,
      cameraPermissionState: null,
      mediaPermission: false,
      mediaPermissionState: null,
      notificationPermission: false,
      notificationPermissionState: null,
      contactsPermission: false,
      contactsPermissionState: null,
      seenOnboard: false,
      seenLocationPermission: false,
      seenNotificationPermission: false,
      setSeenOnboard: (res) => {
        set({ seenOnboard: res });
      },
      setOnboardPermissions: (res) => {
        set({ onboardPermissions: res });
        set({ locationPermission: res });
        set({ notificationPermission: res });
        set({ mediaPermission: res });
        set({ cameraPermission: res });
      },
      setSeenLocationPermission: (res) => {
        set({ seenLocationPermission: res });
      },
      setSeenNotificationPermission: (res) => {
        set({ seenNotificationPermission: res });
      },
    }),
    {
      name: 'navigationStorage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
