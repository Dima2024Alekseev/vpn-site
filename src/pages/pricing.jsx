import { Link } from 'react-router-dom';

export default function PricingPage() {
  return (
    <>
      <section className="text-center">
        <h1>Простые и честные тарифы</h1>
        <p className="lead" style={{ margin: '0 auto' }}>Выберите план и получите 30 дней гарантии возврата. Отмена в любой момент.</p>
      </section>
      <section className="grid grid-3">
        <div className="card price-card">
          <h3>Базовый</h3>
          <div className="price">199 ₽<small>/мес</small></div>
          <p style={{ color: 'var(--muted)', fontSize: 14 }}>Для одного устройства</p>
          <ul><li>1 устройство</li><li>20 стран</li><li>Скорость до 100 Мбит/с</li><li>Email-поддержка</li></ul>
          <Link to="/register" className="btn btn-ghost">Выбрать</Link>
        </div>
        <div className="card price-card popular">
          <span className="tag">Популярный</span>
          <h3>Премиум</h3>
          <div className="price">349 ₽<small>/мес</small></div>
          <p style={{ color: 'var(--muted)', fontSize: 14 }}>Для всей семьи</p>
          <ul><li>5 устройств</li><li>90 стран, 3000+ серверов</li><li>Скорость до 10 Гбит/с</li><li>WireGuard &amp; OpenVPN</li><li>Поддержка 24/7</li></ul>
          <Link to="/register" className="btn btn-primary">Выбрать</Link>
        </div>
        <div className="card price-card">
          <h3>Год</h3>
          <div className="price">2 790 ₽<small>/год</small></div>
          <p style={{ color: 'var(--muted)', fontSize: 14 }}>Скидка 40%</p>
          <ul><li>5 устройств</li><li>Все серверы</li><li>Приоритетная поддержка</li><li>Ранний доступ к функциям</li><li>Бесплатный e-mail</li></ul>
          <Link to="/register" className="btn btn-ghost">Выбрать</Link>
        </div>
      </section>
      <section className="text-center">
        <h2>Не уверены?</h2>
        <p className="lead" style={{ margin: '0 auto 24px' }}>Попробуйте 7 дней бесплатно — без карты и обязательств.</p>
        <Link to="/register" className="btn btn-primary btn-lg">Начать бесплатно</Link>
      </section>
    </>
  );
}
