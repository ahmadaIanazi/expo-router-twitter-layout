import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useScreensStore = create(
  persist(
    (set, get) => ({
      // Manage permission screens visibility
      location: false,
      camera: false,
      // Add other permission screens here as needed
      setPermissionSeen: (permissionType, res) => {
        set({ [permissionType]: res });
      }, // I want to add permissions screens here and handle views
      seenOnboard: false,
      setSeenOnboard: (res) => {
        set({ seenOnboard: res });
      },
    }),
    {
      name: 'screensStorage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
