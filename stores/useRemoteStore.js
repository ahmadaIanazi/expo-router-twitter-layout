import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useRemoteStore = create(
  persist(
    (set, get) => ({
      remoteDocs: [],
      shared: {},
      assets: {},
      remoteDebugger: {},
      setRemoteDocs: (res) => {
        set({ remoteDocs: res });
        res.forEach((doc) => {
          if (doc.name === 'assets') {
              set({ assets: doc });
          } else if (doc.name === 'debugger') {
            set({ remoteDebugger: doc });
          } else if (doc.name === 'shared') {
            set({ shared: doc });
          }
        });
      },
    }),
    {
      name: 'remoteStorage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);