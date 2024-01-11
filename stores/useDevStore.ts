import { create } from 'zustand';

type DevStore = {
  count: number;
  inc: () => void;
};

export const useDevStore = create<DevStore>((set, get) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))
