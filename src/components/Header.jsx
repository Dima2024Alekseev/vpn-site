import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navigation = [
  ['/', 'Главная'],
  ['/features', 'Возможности'],
  ['/servers', 'Серверы'],
  ['/pricing', 'Тарифы'],
  ['/download', 'Скачать'],
  ['/faq', 'FAQ'],
  ['/contact', 'Контакты']
];

function Header({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isDark = theme === null
    ? !window.matchMedia('(prefers-color-scheme: light)').matches
    : theme === 'dark';

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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
        <NavLink to="/" className="logo">
          <span className="dot">🛡</span> ShieldVPN
        </NavLink>
        <ul id="primary-menu" className={menuOpen ? 'open' : ''}>
          {navigation.map(([to, label]) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} className={({ isActive }) => isActive ? 'active' : undefined}>
                {label}
              </NavLink>
            </li>
          ))}
          <li className="mobile-only">
            <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : undefined}>Вход</NavLink>
          </li>
          <li className="mobile-only">
            <NavLink to="/register" className={({ isActive }) => isActive ? 'active' : undefined}>Начать</NavLink>
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
          <NavLink to="/login" className="btn btn-ghost">Вход</NavLink>
          <NavLink to="/register" className="btn btn-primary">Начать</NavLink>
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

export default Header;
