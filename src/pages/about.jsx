export default function AboutPage() {
  return (
    <>
      <section>
        <h1>О компании ShieldVPN</h1>
        <p className="lead">Мы создаём инструмент, который возвращает людям контроль над их данными и свободный доступ к информации.</p>
      </section>
      <section className="grid grid-2">
        <div className="card"><h3>Наша миссия</h3><p>Сделать приватность в интернете доступной и понятной каждому. Без сложных настроек и скрытых условий.</p></div>
        <div className="card"><h3>Наши принципы</h3><p>Никаких логов, прозрачная политика, независимые аудиты безопасности и честные тарифы. Мы зарабатываем на подписках, а не на данных.</p></div>
        <div className="card"><h3>Технологии</h3><p>WireGuard, собственные серверы, AES-256, регулярные пентесты и открытая документация по безопасности.</p></div>
        <div className="card"><h3>Команда</h3><p>Инженеры, дизайнеры и специалисты по безопасности из 12 стран. Более 40 человек, объединённых общей идеей.</p></div>
      </section>
      <section className="text-center">
        <h2>Присоединяйтесь</h2>
        <p className="lead" style={{ margin: '0 auto 24px' }}>Более 1 000 000 пользователей уже доверяют ShieldVPN.</p>
        <a href="/register" className="btn btn-primary btn-lg">Создать аккаунт</a>
      </section>
    </>
  );
}
