import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './index.module.css';
import { useEffect, useState } from 'react';

type themeAvailable = 'dark' | 'light';

const THEME_STORAGE_KEY = 'pomodoro-app-theme';

export function Menu() {
  const [theme, setTheme] = useState<themeAvailable>(() => {
    const savedTheme = localStorage.getItem(
      THEME_STORAGE_KEY,
    ) as themeAvailable | null;

    return savedTheme || 'dark';
  });

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const isDarkMode = theme === 'dark';
  const iconTheme = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        aria-label='Ir para Home'
        title='Ir para Home'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        aria-label='Ir para Histórico'
        title='Ir para Histórico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        aria-label='Ir para Configurações'
        title='Ir para Configurações'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        aria-label={isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
        title={isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
        onClick={e => {
          e.preventDefault();
          toggleTheme();
        }}
      >
        {iconTheme[theme]}
      </a>
    </nav>
  );
}
