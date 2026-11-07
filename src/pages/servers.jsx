import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/servers.css';
import '../styles/shared/server-list.css';

const servers = [
  ['🇳🇱', 'Нидерланды — Амстердам', 'P2P разрешён · 1 Гбит/с', '12 мс'],
  ['🇩🇪', 'Германия — Франкфурт', 'P2P разрешён · 10 Гбит/с', '18 мс'],
  ['🇺🇸', 'США — Нью-Йорк', 'Стриминг · 10 Гбит/с', '87 мс'],
  ['🇬🇧', 'Великобритания — Лондон', 'Стриминг · 1 Гбит/с', '34 мс'],
  ['🇯🇵', 'Япония — Токио', 'Стриминг · 1 Гбит/с', '145 мс'],
  ['🇸🇬', 'Сингапур', 'P2P · 10 Гбит/с', '132 мс']
];

export default function ServersPage() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('Все');
  const filters = ['Все', 'Низкий пинг', 'Стриминг', 'P2P'];
  const filteredServers = useMemo(() => servers.filter(([, name, meta, ping]) => {
    const matchesQuery = name.toLocaleLowerCase('ru').includes(query.trim().toLocaleLowerCase('ru'));
    const pingValue = Number.parseInt(ping, 10);
    const matchesFilter = filter === 'Все'
      || (filter === 'Низкий пинг' && pingValue <= 40)
      || meta.toLocaleLowerCase('ru').includes(filter.toLocaleLowerCase('ru'));
    return matchesQuery && matchesFilter;
  }), [filter, query]);

  return (
    <>
      <section>
        <h1>Наши серверы</h1>
        <p className="lead">Выбирайте из 3000+ серверов в 90 странах мира. Ниже — популярные локации.</p>
      </section>
      <section>
        <h2>Популярные локации</h2>
        <label className="server-search">
          <span>Поиск сервера</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Например, Германия"
          />
        </label>
        <div className="server-filters" aria-label="Фильтр серверов">
          {filters.map((option) => (
            <button
              type="button"
              key={option}
              className={`filter-chip${filter === option ? ' active' : ''}`}
              aria-pressed={filter === option}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <div id="serverList">
          {filteredServers.map(([flag, name, meta, ping]) => (
            <div className="server-row" key={name}>
              <span className="flag">{flag}</span>
              <div><div className="name">{name}</div><div className="meta">{meta}</div></div>
              <span className="ping">{ping}</span>
              <Link to="/register" className="btn btn-ghost">Подключиться</Link>
            </div>
          ))}
          {filteredServers.length === 0 && (
            <p className="server-empty" role="status">По этим условиям серверы не найдены.</p>
          )}
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
