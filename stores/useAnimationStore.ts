import { create } from 'zustand'

type AnimationStore = {
  appBarTranslateY: number
  setAppBarTranslateY: (res: number) => void
}

export const useAnimationStore = create<AnimationStore>((set, get) => ({
  appBarTranslateY: 0,
  setAppBarTranslateY: (res) => {
    set({ appBarTranslateY: res })
  },
}))
