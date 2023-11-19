import { create } from 'zustand';

type NotificationStore = {
  isNotificationRoute: boolean;
  setIsNotificationRoute: (res: boolean) => void;
  notificationData: null | any;
  setNotificationData: (res: null | any) => void;
  notificationRoute: null | any;
  setNotificationRoute: (res: null | any) => void;
};

export const useNotificationStore = create<NotificationStore>((set, get) => ({
  isNotificationRoute: false,
  setIsNotificationRoute: (res) => {
    set({ isNotificationRoute: res });
    /** This can be improved with connecting it with authCheck */
    setTimeout(()=>{
      set({ isNotificationRoute: false });
    },5000)
  },
  notificationRoute: null,
  setNotificationRoute: (res) => {
    set({ notificationRoute: res });
  },
  notificationData: null,
  setNotificationData: (res) => {
    set({ notificationData: res });
  },
}));
