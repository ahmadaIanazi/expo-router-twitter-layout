
import { create } from 'zustand';
import {
  mobile_min_width,
  mobile_max_width,
  tablet_min_width,
  tablet_max_width,
  desktop_min_width,
  desktop_max_width,
} from '../keys/platform';

export type PlatformStore = {
  isMobile: boolean;
  setIsMobile: (res: boolean) => void;
  isDesktop: boolean;
  setisDesktop: (res: boolean) => void;
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
  deviceType: 'Mobile' | 'Tablet' | 'Desktop';
  setTypeByWidth: (res: number) => void;
};

export const usePlatformStore = create<PlatformStore>((set, get) => ({
  deviceType: 'Mobile',
  isMobile: false,
  setIsMobile: (res) => {
    set({ isMobile: res });
  },
  isDesktop: false,
  setisDesktop: (res) => {
    set({ isDesktop: res });
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
  setTypeByWidth: (width) => {
    if (width >= mobile_min_width && width <= mobile_max_width) {
      set({ isMobile: false });
      set({ isTablet: false });
      set({ isDesktop: false });
      set({ deviceType: 'Mobile' });
      return;
    } else if (width >= tablet_min_width && width <= tablet_max_width) {
      set({ isMobile: false });
      set({ isTablet: true });
      set({ isDesktop: false });
      set({ deviceType: 'Tablet' });
      return;
    } else if (width >= desktop_min_width && width <= desktop_max_width) {
      set({ isMobile: false });
      set({ isTablet: false });
      set({ isDesktop: true });
      set({ deviceType: 'Desktop' });
      return;
    } else {
      set({ isMobile: true });
      set({ isTablet: false });
      set({ isDesktop: false });
      set({ deviceType: 'Mobile' });
      return;
    }
  },
}));
