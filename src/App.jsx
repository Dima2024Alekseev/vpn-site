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
        <AppRoutes />
      </main>
      <Footer />
      {loading && <Preloader onFinished={finishLoading} />}
    </>
  );
}

export default App;
