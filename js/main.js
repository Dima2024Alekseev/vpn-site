const storedTheme = localStorage.getItem('shieldvpn-theme');
if (storedTheme === 'light' || storedTheme === 'dark') {
  document.documentElement.dataset.theme = storedTheme;
}

const preloaderStartedAt = performance.now();
const preloader = document.createElement('div');
preloader.className = 'preloader';
preloader.setAttribute('role', 'status');
preloader.setAttribute('aria-live', 'polite');
preloader.setAttribute('aria-label', 'Загрузка ShieldVPN');
preloader.innerHTML = '<div class="preloader-content"><span class="preloader-logo" aria-hidden="true">🛡</span><span class="preloader-spinner" aria-hidden="true"></span><span class="preloader-label">Загружаем ShieldVPN…</span></div>';
document.body.appendChild(preloader);
document.body.setAttribute('aria-busy', 'true');

const hidePreloader = () => {
  const minimumDuration = 450;
  const remainingTime = Math.max(0, minimumDuration - (performance.now() - preloaderStartedAt));

  window.setTimeout(() => {
    preloader.classList.add('preloader-hidden');
    document.body.setAttribute('aria-busy', 'false');
    window.setTimeout(() => preloader.remove(), 350);
  }, remainingTime);
};

if (document.readyState === 'complete') {
  hidePreloader();
} else {
  window.addEventListener('load', hidePreloader, { once: true });
}

// Мобильное меню
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const actions = nav ? nav.querySelector('.actions') : null;
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.nav ul');

  if (menu) {
    [
      ['login.html', 'Вход'],
      ['register.html', 'Начать']
    ].forEach(([href, label]) => {
      if (menu.querySelector(`a[href="${href}"]`)) {
        return;
      }

      const item = document.createElement('li');
      const link = document.createElement('a');
      item.className = 'mobile-only';
      link.href = href;
      link.textContent = label;
      item.appendChild(link);
      menu.appendChild(item);
    });
  }

  const themeToggle = document.createElement('button');
  const systemTheme = window.matchMedia('(prefers-color-scheme: light)');
  let savedTheme = localStorage.getItem('shieldvpn-theme');
  if (savedTheme !== 'light' && savedTheme !== 'dark') {
    savedTheme = null;
    localStorage.removeItem('shieldvpn-theme');
  }
  themeToggle.type = 'button';
  themeToggle.className = 'theme-toggle';

  const applyTheme = theme => {
    if (theme) {
      document.documentElement.dataset.theme = theme;
    } else {
      delete document.documentElement.dataset.theme;
    }

    const isDark = (theme || (systemTheme.matches ? 'light' : 'dark')) === 'dark';
    themeToggle.textContent = isDark ? '☼' : '☾';
    themeToggle.setAttribute('aria-label', isDark ? 'Переключить на светлую тему' : 'Переключить на тёмную тему');
    themeToggle.title = isDark ? 'Светлая тема' : 'Тёмная тема';
  };

  applyTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : null);

  if (nav) {
    nav.insertBefore(themeToggle, actions || burger || null);
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.dataset.theme || (systemTheme.matches ? 'light' : 'dark');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('shieldvpn-theme', nextTheme);
    applyTheme(nextTheme);
  });

  systemTheme.addEventListener('change', () => {
    const storedTheme = localStorage.getItem('shieldvpn-theme');
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      applyTheme(null);
    }
  });

  window.addEventListener('storage', event => {
    if (event.key === 'shieldvpn-theme' || event.key === null) {
      applyTheme(event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : null);
    }
  });

  if (burger && menu) {
    burger.addEventListener('click', () => {
      menu.classList.toggle('open');
      const isOpen = menu.classList.contains('open');
      document.body.classList.toggle('menu-open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
      burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
    });
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        document.body.classList.remove('menu-open');
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Открыть меню');
      });
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        document.body.classList.remove('menu-open');
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Открыть меню');
        burger.focus();
      }
    });
  }

  // Подсветка активного пункта меню
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav ul a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Демо-логин
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      window.location.href = 'dashboard.html';
    });
  }

  const regForm = document.getElementById('registerForm');
  if (regForm) {
    regForm.addEventListener('submit', e => {
      e.preventDefault();
      window.location.href = 'dashboard.html';
    });
  }
});