import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
 
export const useUserStore = create(
  persist(
    (set, get) => ({
      // ======= FIREBASE AUTH ======= //
      apiKey: '',
      appName: '',
      createdAt: '',
      displayName: '',
      email: '',
      emailVerified: '',
      lastLoginAt: '',
      phoneNumber: '',
      photoURL: '',
      uid: '',
      // SETTERS
      setUid: (res) => {
        set({ uid: res });
      },
      // ======= STORAGE DATA ======= //
      userId: '',
      setUserId: (res) => {
        set({ userId: res });
      },
      user: [],
      setUserDoc: (res) => {
        set({ user: res });
      },
      role: 'merchant',
      isMerchant: true,
      setRole: (res) => {
        if (res !== undefined && res !== null) {
          const validate = res == 'merchant';
          set({ isMerchant: validate });
          set({ role: res });
        } else {
          const validate = true;
          set({ isMerchant: validate });
          set({ role: 'merchant' });
        }
      },
      merchantId: '',
      setMerchantId: (res) => {
        set({ merchantId: res });
      },
      // ======= CHANGING DATA ======= //

      // customers: [],
      // setCustomers: (res) => {
      //   set((state) => ({ ...state.customers, customers: res }));
      // },
      // transactions: [],
      // setTransactions: (res) => {
      //   set((state) => ({ ...state.transactions, transactions: res }));
      // },
      // cards: [],
      // setCards: (res) => {
      //   set((state) => ({ ...state.cards, cards: res }));
      // },
      deletedChats: [],
      setDeletedChats: (res) => {
        // set({ deletedChats: res });
        set((state) => ({ ...state.deletedChats, deletedChats: res }));
      },
      deletedMessages: [],
      setDeletedMessages: (res) => {
        // set({ deletedMessages: res });
        set((state) => ({ ...state.deletedMessages, deletedMessages: res }));
      },
      location: [26.375835699930835, 50.14057920308092],
      address: [],
      fullLocation: [],
      status: '',
      locationUpdated: false,
      getUserLocation: (res) => {
        set({ location: res });
      },
      getUserFullLocation: (res) => {
        set({ fullLocation: res });
      },
      getUserAddress: (res) => {
        set({ address: res });
      },
      getUserStatus: (res) => {
        set({ status: res });
      },
      getUserLocationUpdated: (res) => {
        set({ locationUpdated: res });
      },
      displayName: null,
      setDisplayName: (res) => {
        set({ displayName: res });
      },
      setUserColor: (res) => {
        const userData = get().user;
        const updatedUser = { ...userData, color: res };
        set({ user: updatedUser });
      },
      setUserDisplayName: (res) => {
        const userData = get().user;
        const updatedUser = { ...userData, displayName: res };
        set({ user: updatedUser });
      },
      colorSchemeStore: null,
      getColorSchemeStore: (res) => {
        set({ colorSchemeStore: res });
      },
      // ========= USER SETTINGS ====== //
      dark: null,
      setDark: (res) => {
        set({ dark: res });
      },
      arabic: null,
      setArabic: (res) => {
        set({ arabic: res });
      },
      // =========== IRRELEVANT ======== //
      blocked: [],
      setBlocked: (res) => {
        set((state) => ({ ...state.blocked, blocked: res }));
        // set((state) => ({ blocked: [...state.blocked, res] }));
        // set((state) => ({ blocked: null }));
      },
      setUnblock: (personId) => {
        set((state) => ({ blocked: state.blocked.filter((id) => id !== personId) }));
      },
    }),
    {
      name: 'userLocalStorage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export const clearLocalStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Error clearing persisted data:', error);
  }
};