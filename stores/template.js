import { create } from 'zustand';

export const useTemplateStore = create((set, get) => ({
  cardCategory: '',
  setCardCategory: (res) => {
    set({ cardCategory: res });
  },
  cardTemplate: '',
  setCardTemplate: (res) => {
    set({ cardTemplate: res });
  },
  cardType: '',
  setCardType: (res) => {
    set({ cardType: res });
  },
  
}));
