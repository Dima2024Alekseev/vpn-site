const features = [
  ['🔐', 'AES-256-GCM', 'Современное шифрование, которое используется в банковской сфере и государственных структурах.'],
  ['⚡', 'WireGuard', 'Самый быстрый VPN-протокол нового поколения. Мгновенное подключение, минимальные задержки.'],
  ['🚫', 'Блокировка рекламы', 'Встроенный DNS-фильтр блокирует рекламу, трекеры и вредоносные сайты.'],
  ['🌐', 'Split Tunneling', 'Выбирайте, какие приложения идут через VPN, а какие — напрямую.'],
  ['🛡', 'Kill Switch', 'Автоматически отключает интернет при разрыве VPN-соединения, защищая ваши данные.'],
  ['🔁', 'Автоподключение', 'VPN включается автоматически при входе в интернет или в небезопасных сетях Wi-Fi.'],
  ['🌍', 'Smart DNS', 'Доступ к стриминговым сервисам в любой точке мира без потери скорости.'],
  ['📱', 'Мультиплатформа', 'Windows, macOS, Linux, iOS, Android, Android TV и даже роутеры.'],
  ['🔒', 'Multi-Hop', 'Цепочка из двух серверов делает ваше соединение практически неотслеживаемым.']
];

import { Link } from 'react-router-dom';

export default function FeaturesPage() {
  return (
    <>
      <section>
        <h1>Возможности ShieldVPN</h1>
        <p className="lead">Всё необходимое для приватности, скорости и доступа к любому контенту.</p>
      </section>
      <section className="grid grid-3">
        {features.map(([icon, title, description]) => (
          <div className="card" key={title}>
            <div className="icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </section>
      <section className="text-center">
        <h2>Готовы испытать?</h2>
        <p className="lead" style={{ margin: '0 auto 24px' }}>Попробуйте все возможности бесплатно в течение 7 дней.</p>
        <Link to="/register" className="btn btn-primary btn-lg">Начать бесплатно</Link>
      </section>
    </>
  );
}
