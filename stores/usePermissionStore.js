import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const usePermissionStore = create(
  persist(
    (set, get) => ({
      permissions: {
        location: false,
        locationState: null,
        camera: false,
        cameraState: null,
        media: false,
        mediaState: null,
        notification: false,
        notificationState: null,
        contacts: false,
        contactsState: null,
        // Add more permissions and states as needed
      },
      seenPermissions: {
        location: false,
        notification: false,
        // Add more seen permission screens as needed
      },
      setPermissionState: (permissionType, state) => {
        set((state) => ({
          permissions: {
            ...state.permissions,
            [permissionType]: state[permissionType],
          },
        }));
      },
      setSeenPermission: (permissionType, seen) => {
        set((state) => ({
          seenPermissions: {
            ...state.seenPermissions,
            [permissionType]: seen,
          },
        }));
      },
    }),
    {
      name: 'permissionStorage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
