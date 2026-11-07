import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <Link to="/" className="logo">
            <span className="dot">🛡</span> ShieldVPN
          </Link>
          <p className="footer-description">Быстрый и безопасный VPN-сервис для вашей приватности в интернете.</p>
        </div>
        <div>
          <h4>Продукт</h4>
          <ul>
            <li><Link to="/features">Возможности</Link></li>
            <li><Link to="/servers">Серверы</Link></li>
            <li><Link to="/pricing">Тарифы</Link></li>
            <li><Link to="/download">Скачать</Link></li>
          </ul>
        </div>
        <div>
          <h4>Компания</h4>
          <ul>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4>Правовое</h4>
          <ul>
            <li><Link to="/privacy">Конфиденциальность</Link></li>
            <li><Link to="/terms">Условия</Link></li>
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

export default Footer;
