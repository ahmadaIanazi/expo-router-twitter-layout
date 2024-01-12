import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createJSONStorage } from 'zustand/middleware'

export enum flowState {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
}

export enum flowName {
  onboarding = 'onboarding',
  authentication = 'authentication',
  permissions = 'permissions',
  popup = 'popup',
}

interface FlowStoreState {
  flows: {
    [key in flowName]: flowState
  }
  updateFlows: (flow: flowName, update: flowState) => void
  hydrated: boolean
  setHydrated: (res : boolean) => void
}

export const useFlowStore = create<FlowStoreState>()(
  persist(
    (set) => ({
      flows: {
        onboarding: flowState.NOT_STARTED,
        authentication: flowState.NOT_STARTED,
        permissions: flowState.NOT_STARTED,
        popup: flowState.NOT_STARTED,
      },
      updateFlows: (flow, update) => {
        set((state) => ({
          flows: {
            ...state.flows,
            [flow]: update,
          },
        }))
      },
      hydrated: false,
      setHydrated: (res) => {
        set({ hydrated: res })
      },
    }),
    {
      name: 'flow-dev1',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state, error) => {
        if (error) {
          console.error('An error happened during hydration', error)
        } else {
          state?.setHydrated(true)
        }
      }
    }
  )
)
