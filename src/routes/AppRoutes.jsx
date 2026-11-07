import { Navigate, Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/about.jsx';
import ContactPage from '../pages/contact.jsx';
import DashboardPage from '../pages/dashboard.jsx';
import DownloadPage from '../pages/download.jsx';
import FAQPage from '../pages/faq.jsx';
import FeaturesPage from '../pages/features.jsx';
import HomePage from '../pages/index.jsx';
import LoginPage from '../pages/login.jsx';
import PricingPage from '../pages/pricing.jsx';
import PrivacyPage from '../pages/privacy.jsx';
import RegisterPage from '../pages/register.jsx';
import ServersPage from '../pages/servers.jsx';
import TermsPage from '../pages/terms.jsx';

export const routes = [
  { path: '/', title: 'ShieldVPN — Быстрый и безопасный VPN', Component: HomePage },
  { path: '/features', title: 'Возможности — ShieldVPN', Component: FeaturesPage },
  { path: '/servers', title: 'Серверы — ShieldVPN', Component: ServersPage },
  { path: '/pricing', title: 'Тарифы — ShieldVPN', Component: PricingPage },
  { path: '/download', title: 'Скачать — ShieldVPN', Component: DownloadPage },
  { path: '/faq', title: 'FAQ — ShieldVPN', Component: FAQPage },
  { path: '/contact', title: 'Контакты — ShieldVPN', Component: ContactPage },
  { path: '/about', title: 'О нас — ShieldVPN', Component: AboutPage },
  { path: '/privacy', title: 'Политика конфиденциальности — ShieldVPN', Component: PrivacyPage },
  { path: '/terms', title: 'Условия использования — ShieldVPN', Component: TermsPage },
  { path: '/login', title: 'Вход — ShieldVPN', Component: LoginPage },
  { path: '/register', title: 'Регистрация — ShieldVPN', Component: RegisterPage },
  { path: '/dashboard', title: 'Личный кабинет — ShieldVPN', Component: DashboardPage }
];

function AppRoutes() {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
