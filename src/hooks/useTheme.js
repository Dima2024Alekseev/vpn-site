import { useEffect, useState } from 'react';

function getStoredTheme() {
  try {
    const theme = window.localStorage.getItem('shieldvpn-theme');
    return theme === 'light' || theme === 'dark' ? theme : null;
  } catch (error) {
    console.warn('Не удалось прочитать сохранённую тему.', error);
    return null;
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(getStoredTheme);

  useEffect(() => {
    if (theme) {
      document.documentElement.dataset.theme = theme;
    } else {
      delete document.documentElement.dataset.theme;
    }

    try {
      if (theme) {
        window.localStorage.setItem('shieldvpn-theme', theme);
      } else {
        window.localStorage.removeItem('shieldvpn-theme');
      }
    } catch (error) {
      console.warn('Не удалось сохранить выбранную тему.', error);
    }
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: light)');
    const followSystemTheme = () => {
      try {
        if (!window.localStorage.getItem('shieldvpn-theme')) {
          setTheme(null);
        }
      } catch (error) {
        console.warn('Не удалось проверить сохранённую тему.', error);
      }
    };
    const syncThemeAcrossTabs = (event) => {
      if (event.key === 'shieldvpn-theme' || event.key === null) {
        setTheme(event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : null);
      }
    };

    media.addEventListener('change', followSystemTheme);
    window.addEventListener('storage', syncThemeAcrossTabs);
    return () => {
      media.removeEventListener('change', followSystemTheme);
      window.removeEventListener('storage', syncThemeAcrossTabs);
    };
  }, []);

  return { theme, setTheme };
}
