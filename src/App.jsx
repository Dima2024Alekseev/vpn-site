import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Preloader from './components/Preloader.jsx';
import { useTheme } from './hooks/useTheme.js';
import AppRoutes, { routes } from './routes/AppRoutes.jsx';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [loading, setLoading] = useState(true);
  const finishLoading = useCallback(() => setLoading(false), []);

  useEffect(() => {
    const pathname = location.pathname.replace(/\/+$/, '') || '/';
    const currentRoute = routes.find((route) => route.path === pathname);
    document.title = currentRoute?.title ?? 'ShieldVPN — Быстрый и безопасный VPN';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });

    const revealTargets = document.querySelectorAll(
      'main .route-transition > section, main .card, main .server-row, main .faq-item, main .hero-stats > div'
    );
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealTargets.forEach((element) => element.setAttribute('data-reveal', 'visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-reveal', 'visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });

    revealTargets.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${(index % 5) * 55}ms`);
      element.setAttribute('data-reveal', 'hidden');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

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

    if (location.pathname === '/contact' && form.classList.contains('form')) {
      event.preventDefault();
      window.alert('Сообщение отправлено! Мы свяжемся с вами в течение часа.');
      form.reset();
    }
  };

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <main onSubmitCapture={handleSubmit}>
        <div key={location.pathname} className="route-transition">
          <AppRoutes />
        </div>
      </main>
      <Footer />
      {loading && <Preloader onFinished={finishLoading} />}
    </>
  );
}

export default App;
