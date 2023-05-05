import { useEffect } from 'react';
import { useThemeStore } from '../store/theme';
import { MdSunny } from 'react-icons/md';
import { IoMdMoon } from 'react-icons/io';
import { motion } from 'framer-motion';

export function ThemeSwitch() {

  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="text-gray-200 hover:text-gray-800 hover:dark:text-gray-800 rounded transition-all duration-300"
    >
      {theme === 'dark' && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ from: 0, duration: 1 }}
        >
          <MdSunny size={32} />
        </motion.div>
      )}
      {theme === 'light' && (
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ from: 0, duration: 1 }}
        >
          <IoMdMoon size={32} />
        </motion.div>
      )}
    </button>
  );
}
