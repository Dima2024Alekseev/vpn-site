const servers = [
  ['🇳🇱', 'Нидерланды — Амстердам', 'P2P разрешён · 1 Гбит/с', '12 мс'],
  ['🇩🇪', 'Германия — Франкфурт', 'P2P разрешён · 10 Гбит/с', '18 мс'],
  ['🇺🇸', 'США — Нью-Йорк', 'Стриминг · 10 Гбит/с', '87 мс'],
  ['🇬🇧', 'Великобритания — Лондон', 'Стриминг · 1 Гбит/с', '34 мс'],
  ['🇯🇵', 'Япония — Токио', 'Стриминг · 1 Гбит/с', '145 мс'],
  ['🇸🇬', 'Сингапур', 'P2P · 10 Гбит/с', '132 мс']
];

import { Link } from 'react-router-dom';

export default function ServersPage() {
  return (
    <>
      <section>
        <h1>Наши серверы</h1>
        <p className="lead">Выбирайте из 3000+ серверов в 90 странах мира. Ниже — популярные локации.</p>
      </section>
      <section>
        <h2>Популярные локации</h2>
        <div id="serverList">
          {servers.map(([flag, name, meta, ping]) => (
            <div className="server-row" key={name}>
              <span className="flag">{flag}</span>
              <div><div className="name">{name}</div><div className="meta">{meta}</div></div>
              <span className="ping">{ping}</span>
              <Link to="/register" className="btn btn-ghost">Подключиться</Link>
            </div>
          ))}
        </div>
      </section>
      <section className="text-center">
        <h2>Хотите все 90 стран?</h2>
        <p className="lead" style={{ margin: '0 auto 24px' }}>Премиум-подписка открывает все локации и максимальную скорость.</p>
        <Link to="/pricing" className="btn btn-primary btn-lg">Посмотреть тарифы</Link>
      </section>
    </>
  );
}
