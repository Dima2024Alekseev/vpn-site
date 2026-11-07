import React, { useCallback, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import '../css/style.css';
import pages from './pageRegistry.jsx';

const navigation = [
  ['/', 'Главная', 'index'],
  ['/features', 'Возможности', 'features'],
  ['/servers', 'Серверы', 'servers'],
  ['/pricing', 'Тарифы', 'pricing'],
  ['/download', 'Скачать', 'download'],
  ['/faq', 'FAQ', 'faq'],
  ['/contact', 'Контакты', 'contact']
];

const pageTitles = {
  index: 'ShieldVPN — Быстрый и безопасный VPN',
  features: 'Возможности — ShieldVPN',
  servers: 'Серверы — ShieldVPN',
  pricing: 'Тарифы — ShieldVPN',
  download: 'Скачать — ShieldVPN',
  faq: 'FAQ — ShieldVPN',
  contact: 'Контакты — ShieldVPN',
  about: 'О нас — ShieldVPN',
  privacy: 'Политика конфиденциальности — ShieldVPN',
  terms: 'Условия использования — ShieldVPN',
  login: 'Вход — ShieldVPN',
  register: 'Регистрация — ShieldVPN',
  dashboard: 'Личный кабинет — ShieldVPN'
};

function getThemePreference() {
  try {
    const theme = window.localStorage.getItem('shieldvpn-theme');
    return theme === 'light' || theme === 'dark' ? theme : null;
  } catch (error) {
    console.warn('Не удалось прочитать сохранённую тему.', error);
    return null;
  }
}

function getPageFromPath(pathname) {
  const page = pathname.split('/').filter(Boolean).pop()?.replace(/\.html$/, '') || 'index';
  return Object.hasOwn(pages, page) ? page : 'index';
}

function Header({ page, theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === null
    ? !window.matchMedia('(prefers-color-scheme: light)').matches
    : theme === 'dark';

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [page]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <header>
      <nav className="nav">
        <a href="/" className="logo">
          <span className="dot">🛡</span> ShieldVPN
        </a>
        <ul id="primary-menu" className={menuOpen ? 'open' : ''}>
          {navigation.map(([href, label, pageName]) => (
            <li key={href}>
              <a href={href} className={page === pageName ? 'active' : undefined}>
                {label}
              </a>
            </li>
          ))}
          <li className="mobile-only">
            <a href="/login" className={page === 'login' ? 'active' : undefined}>Вход</a>
          </li>
          <li className="mobile-only">
            <a href="/register" className={page === 'register' ? 'active' : undefined}>Начать</a>
          </li>
        </ul>
        <button
          type="button"
          className="theme-toggle"
          aria-label={isDark ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
          title={isDark ? 'Светлая тема' : 'Тёмная тема'}
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
        >
          {isDark ? '☼' : '☾'}
        </button>
        <div className="actions">
          <a href="/login" className="btn btn-ghost">Вход</a>
          <a href="/register" className="btn btn-primary">Начать</a>
        </div>
        <button
          type="button"
          className="burger"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <a href="/" className="logo">
            <span className="dot">🛡</span> ShieldVPN
          </a>
          <p className="footer-description">Быстрый и безопасный VPN-сервис для вашей приватности в интернете.</p>
        </div>
        <div>
          <h4>Продукт</h4>
          <ul>
            <li><a href="/features">Возможности</a></li>
            <li><a href="/servers">Серверы</a></li>
            <li><a href="/pricing">Тарифы</a></li>
            <li><a href="/download">Скачать</a></li>
          </ul>
        </div>
        <div>
          <h4>Компания</h4>
          <ul>
            <li><a href="/about">О нас</a></li>
            <li><a href="/contact">Контакты</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4>Правовое</h4>
          <ul>
            <li><a href="/privacy">Конфиденциальность</a></li>
            <li><a href="/terms">Условия</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 ShieldVPN. Все права защищены.</span>
        <span>Сделано с ❤️ для приватности</span>
      </div>
    </footer>
  );
}

function Preloader({ onFinished }) {
  useEffect(() => {
    document.body.setAttribute('aria-busy', 'true');
    return () => document.body.setAttribute('aria-busy', 'false');
  }, []);

  useEffect(() => {
    const startedAt = performance.now();
    const finish = () => {
      const delay = Math.max(0, 450 - (performance.now() - startedAt));
      window.setTimeout(onFinished, delay);
    };

    if (document.readyState === 'complete') {
      finish();
      return undefined;
    }

    window.addEventListener('load', finish, { once: true });
    return () => window.removeEventListener('load', finish);
  }, [onFinished]);

  return (
    <div className="preloader" role="status" aria-live="polite" aria-label="Загрузка ShieldVPN">
      <div className="preloader-content">
        <span className="preloader-logo" aria-hidden="true">🛡</span>
        <span className="preloader-spinner" aria-hidden="true" />
        <span className="preloader-label">Загружаем ShieldVPN…</span>
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState(() => getPageFromPath(window.location.pathname));
  const Page = pages[page] || pages.index;
  const [theme, setTheme] = useState(getThemePreference);
  const [loading, setLoading] = useState(true);

  const navigate = useCallback((pathname) => {
    const nextPage = getPageFromPath(pathname);
    const nextPath = nextPage === 'index' ? '/' : `/${nextPage}`;
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
    setPage(nextPage);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handlePopState = () => setPage(getPageFromPath(window.location.pathname));
    const handleClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const link = event.target.closest('a[href]');
      if (!link || link.target || link.hasAttribute('download')) {
        return;
      }

      const url = new URL(link.href, window.location.href);
      const route = url.pathname.split('/').filter(Boolean).pop()?.replace(/\.html$/, '') || 'index';
      if (url.origin !== window.location.origin || !Object.hasOwn(pages, route)) {
        return;
      }

      event.preventDefault();
      navigate(url.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleClick);
    };
  }, [navigate]);

  useEffect(() => {
    document.title = pageTitles[page] || pageTitles.index;
  }, [page]);

  useEffect(() => {
    if (theme) {
      document.documentElement.dataset.theme = theme;
    } else {
      delete document.documentElement.dataset.theme;
    }
  }, [theme]);

  useEffect(() => {
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

  const handleSubmit = (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) {
      return;
    }

    if (form.id === 'loginForm' || form.id === 'registerForm') {
      event.preventDefault();
      navigate('/dashboard');
      return;
    }

    if (page === 'contact' && form.classList.contains('form')) {
      event.preventDefault();
      window.alert('Сообщение отправлено! Мы свяжемся с вами в течение часа.');
      form.reset();
    }
  };

  const finishLoading = React.useCallback(() => setLoading(false), []);

  return (
    <>
      <Header page={page} theme={theme} setTheme={setTheme} />
      <main onSubmitCapture={handleSubmit}><Page /></main>
      <Footer />
      {loading && <Preloader onFinished={finishLoading} />}
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
