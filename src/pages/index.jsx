import { Link } from 'react-router-dom';
import '../styles/pages/home.css';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-main">
          <div className="hero-copy">
            <span className="badge"><span className="badge-pulse" /> 3 000+ серверов в 90 странах</span>
            <h1>Твоя свобода<br />в интернете.</h1>
            <p className="lead">Оставайся на связи с миром. Защити свои данные и пользуйся интернетом без границ — на любом устройстве.</p>
            <div className="hero-actions">
              <Link to="/pricing" className="btn btn-primary btn-lg">Попробовать бесплатно <span aria-hidden="true">→</span></Link>
              <Link to="/servers" className="btn btn-ghost btn-lg">Изучить серверы</Link>
            </div>
            <div className="hero-trust"><span aria-hidden="true">✓</span> 30 дней гарантии возврата <span className="trust-divider">·</span> Без скрытых платежей</div>
          </div>
          <div className="hero-visual" aria-label="Иллюстрация подключенного VPN" role="img">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="connection-card">
              <div className="connection-top">
                <span className="connection-label"><span className="connection-dot" /> ЗАЩИЩЁННОЕ СОЕДИНЕНИЕ</span>
                <span className="connection-menu">•••</span>
              </div>
              <div className="connection-globe"><span>⌖</span></div>
              <div className="connection-status">Ты под защитой</div>
              <div className="connection-location"><span className="location-flag">🇳🇱</span><span><strong>Нидерланды</strong><small>Амстердам · 18 мс</small></span><span className="location-arrow">↗</span></div>
              <div className="connection-footer"><span>ТВОЙ IP-АДРЕС</span><strong>•••.•••.••.••</strong><span className="secure-label">● ЗАШИФРОВАНО</span></div>
            </div>
            <div className="floating-chip chip-fast"><span>↗</span> 128 Мбит/с</div>
            <div className="floating-chip chip-private"><span>✦</span> Твои данные под защитой</div>
            <div className="visual-star star-one">✳</div>
            <div className="visual-star star-two">✦</div>
          </div>
        </div>
        <div className="hero-stats">
          <div><strong>90+</strong><span>стран</span></div>
          <div><strong>3 000+</strong><span>серверов</span></div>
          <div><strong>10 Гбит/с</strong><span>максимальная скорость</span></div>
          <div><strong>0</strong><span>логов активности</span></div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <span className="eyebrow">ПРОСТО. БЫСТРО. БЕЗОПАСНО.</span>
          <h2>Интернет, который работает на тебя</h2>
          <p className="lead mb-20">Всё необходимое для свободного и защищённого доступа — без лишних сложностей.</p>
        </div>
        <div className="grid grid-3">
          <div className="card"><div className="icon">🔒</div><h3>AES-256 шифрование</h3><p>Военный стандарт шифрования, который защищает ваши данные от любого перехвата.</p></div>
          <div className="card"><div className="icon">🚀</div><h3>Максимальная скорость</h3><p>Протокол WireGuard и собственные серверы обеспечивают скорость до 10 Гбит/с.</p></div>
          <div className="card"><div className="icon">🌍</div><h3>90 стран</h3><p>Подключайтесь к серверам по всему миру для доступа к любимым сервисам.</p></div>
          <div className="card"><div className="icon">🕵️</div><h3>Политика нулевых логов</h3><p>Мы не храним историю посещений, IP-адреса и другие данные пользователей.</p></div>
          <div className="card"><div className="icon">📱</div><h3>5 устройств</h3><p>Одна подписка — все ваши устройства: Windows, macOS, iOS, Android, Linux.</p></div>
          <div className="card"><div className="icon">💬</div><h3>Поддержка 24/7</h3><p>Круглосуточная поддержка в чате и по email на русском языке.</p></div>
        </div>
      </section>

      <section className="final-cta text-center">
        <span className="eyebrow">ТВОЙ ИНТЕРНЕТ. ТВОИ ПРАВИЛА.</span>
        <h2>Готов подключиться?</h2>
        <p className="lead" style={{ margin: '0 auto 30px' }}>Начни пользоваться интернетом свободно. Первые 7 дней — за наш счёт.</p>
        <Link to="/register" className="btn btn-primary btn-lg">Создать аккаунт <span aria-hidden="true">→</span></Link>
      </section>
    </>
  );
}
