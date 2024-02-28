import { create } from 'zustand';

type MenuState = {
  isOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
};

export const useMenuStore = create<MenuState>()((set) => ({
  isOpen: false,
  openMobileMenu: () =>
    set((state: { isOpen: boolean }) => ({ isOpen: !state.isOpen })),
  closeMobileMenu: () => set({ isOpen: false }),
}));
