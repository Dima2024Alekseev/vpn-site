const devices = [
  ['MacBook Pro 14', 'macOS 15', '185.24.xxx.12', 'Сейчас', 'Активно', true],
  ['iPhone 15', 'iOS 18', '185.24.xxx.44', '5 минут назад', 'Активно', true],
  ['Домашний ПК', 'Windows 11', '185.24.xxx.91', '3 часа назад', 'Отключено', false]
];

const connectionHistory = [
  ['08 мар 2026', '🇩🇪 Германия', '02:14:32', '1.2 ГБ'],
  ['07 мар 2026', '🇳🇱 Нидерланды', '05:41:08', '3.8 ГБ'],
  ['06 мар 2026', '🇺🇸 США', '01:02:44', '0.6 ГБ']
];

const locations = [
  ['🇳🇱', 'Нидерланды — Амстердам', '1 Гбит/с · 12 мс', '12 мс'],
  ['🇺🇸', 'США — Нью-Йорк', '10 Гбит/с · 87 мс', '87 мс'],
  ['🇯🇵', 'Япония — Токио', '1 Гбит/с · 145 мс', '145 мс']
];

export default function DashboardPage() {
  return (
    <>
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
          <div><h1>Личный кабинет</h1><p className="lead">Добро пожаловать, Иван 👋</p></div>
          <span className="chip">Подписка: Премиум · до 12 марта 2026</span>
        </div>
      </section>
      <section className="grid grid-3">
        <div className="card"><div className="icon">🔌</div><h3>Текущий статус</h3><p style={{ marginBottom: 12 }}>VPN подключён</p><span className="status on">Защищено</span></div>
        <div className="card"><div className="icon">🌍</div><h3>Локация</h3><p>🇩🇪 Германия — Франкфурт</p><p style={{ marginTop: 6 }}>IP: 185.24.xxx.12</p></div>
        <div className="card"><div className="icon">📱</div><h3>Устройства</h3><p>3 из 5 подключено</p><p style={{ marginTop: 6 }}>Windows, iPhone, MacBook</p></div>
      </section>
      <section>
        <h2>Быстрое подключение</h2>
        <div className="server-row"><span className="flag">🇩🇪</span><div><div className="name">Германия — Франкфурт</div><div className="meta">10 Гбит/с · 18 мс</div></div><span className="ping">Подключено</span><a href="#" className="btn btn-ghost">Отключить</a></div>
        {locations.map(([flag, name, meta, ping]) => (
          <div className="server-row" key={name}>
            <span className="flag">{flag}</span>
            <div><div className="name">{name}</div><div className="meta">{meta}</div></div>
            <span className="ping">{ping}</span>
            <a href="#" className="btn btn-primary">Подключить</a>
          </div>
        ))}
      </section>
      <section>
        <h2>Мои устройства</h2>
        <div className="table-wrap" role="region" aria-label="Мои устройства" tabIndex="0">
          <table>
            <thead><tr><th>Устройство</th><th>Платформа</th><th>IP</th><th>Последняя активность</th><th>Статус</th></tr></thead>
            <tbody>
              {devices.map(([name, platform, ip, activity, status, active]) => (
                <tr key={name}><td>{name}</td><td>{platform}</td><td>{ip}</td><td>{activity}</td><td><span className={`status ${active ? 'on' : 'off'}`}>{status}</span></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h2>История подключений</h2>
        <div className="table-wrap" role="region" aria-label="История подключений" tabIndex="0">
          <table>
            <thead><tr><th>Дата</th><th>Локация</th><th>Длительность</th><th>Объём трафика</th></tr></thead>
            <tbody>
              {connectionHistory.map(([date, location, duration, volume]) => (
                <tr key={date}><td>{date}</td><td>{location}</td><td>{duration}</td><td>{volume}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
