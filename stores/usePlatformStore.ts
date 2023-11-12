import { create } from 'zustand';

export type PlatformStore = {
  isWeb: boolean;
  setIsWeb: (res: boolean) => void;
  isTablet: boolean;
  setIsTablet: (res: boolean) => void;
  isDark: boolean;
  setIsDark: (res: boolean) => void;
  os: null | string;
  setOs: (res: null | string) => void;
  language: null | string;
  setLanguage: (res: null | string) => void;
  network: null | string;
  setNetwork: (res: null | string) => void;
  width: null | number;
  setWidth: (res: number) => void;
  height: null | number;
  setHeight: (res: number) => void;
  orientation: null | string;
  setOrientation: (res: string) => void;
};

export const usePlatformStore = create<PlatformStore>((set) => ({
  isWeb: false,
  setIsWeb: (res) => {
    set({ isWeb: res });
  },
  isTablet: false,
  setIsTablet: (res) => {
    set({ isTablet: res });
  },
  isDark: false,
  setIsDark: (res) => {
    set({ isDark: res });
  },
  os: null,
  setOs: (res) => {
    set({ os: res });
  },
  language: null,
  setLanguage: (res) => {
    set({ language: res });
  },
  network: null,
  setNetwork: (res) => {
    set({ network: res });
  },
  width: null,
  setWidth: (res) => {
    console.log('STORE WIDTH:', res)
    set({ width: res });
  },
  height: null,
  setHeight: (res) => {
    set({ height: res });
  },
  orientation: null,
  setOrientation: (res) => {
    set({ orientation: res });
  },
}));
