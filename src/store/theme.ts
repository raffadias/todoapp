import { create } from 'zustand';
import { persist } from "zustand/middleware";

const useStore = create<ThemeStateProps>()(persist((set) => ({
  theme: 'light',
  toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' }))
}),
{
  name: "theme", // unique name
  getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
}
));

export const useThemeStore = useStore;
