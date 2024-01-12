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
      },
      setPermissionState: (permissionType, state) => {
        set((state) => ({
          permissions: {
            ...state.permissions,
            [permissionType]: state[permissionType],
          },
        }))
      },
      seenPermissions: {
        location: false,
        camera: false,
        media: false,
        notification: false,
        contacts: false,
      },
      setSeenPermission: (permissionType, seen) => {
        set((state) => ({
          seenPermissions: {
            ...state.seenPermissions,
            [permissionType]: seen,
          },
        }))
      },
    }),
    {
      name: 'permission',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
