import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const useAlertsStore = create(
  persist(
    (set, get) => ({
      alerts: [],

      setAlerts: (res) => {
        set({ alerts: res })
      },
      addAlerts: (res) => {
        set((state) => ({
          alerts: [...state.alerts, res],
        }))
      },
      removeAlerts: (id) => {
        console.log('RES:', id)
        set((state) => ({
          alerts: state.alerts.filter((alert) => alert.id !== id),
        }))
      },
    }),
    {
      name: 'alerts',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
