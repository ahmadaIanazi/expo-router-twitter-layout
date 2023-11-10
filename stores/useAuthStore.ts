import { create } from 'zustand';

type AuthStore = {
  refresh: boolean;
  setRefresh: (res: boolean) => void;
  isAnonymous: null | boolean;
  setIsAnonymous: (res: null | boolean) => void;
  authCheck: null | any; // Replace 'any' with the appropriate type
  setAuthCheck: (res: null | any) => void; // Replace 'any' with the appropriate type
  loadingUser: boolean;
  setLoadingUser: (res: boolean) => void;
  loadingUserData: boolean;
  setLoadingUserData: (res: boolean) => void;
  emailVerified: boolean;
  setEmailVerified: (res: boolean) => void;
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  refresh: false,
  setRefresh: () => {
    const refreshState = get().refresh;
    set({ refresh: !refreshState });
  },
  isAnonymous: null,
  setIsAnonymous: (res) => {
    set({ isAnonymous: res });
  },
  authCheck: null,
  setAuthCheck: (res) => {
    set({ authCheck: res });
  },
  emailVerified: false,
  setEmailVerified: (res) => {
    set({ emailVerified: res });
  },
  loadingUser: true,
  setLoadingUser: (res) => {
    set({ loadingUser: res });
  },
  loadingUserData: true,
  setLoadingUserData: (res) => {
    set({ loadingUserData: res });
  },
}));
