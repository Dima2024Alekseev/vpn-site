const platforms = [
  ['🪟', 'Windows', 'Windows 10 / 11 · x64', 'Скачать .exe'],
  ['🍎', 'macOS', 'macOS 11+ · Intel & Apple Silicon', 'Скачать .dmg'],
  ['🐧', 'Linux', 'Ubuntu, Debian, Fedora, Arch', 'Скачать .deb'],
  ['🤖', 'Android', 'Android 8.0+', 'Google Play'],
  ['📱', 'iOS', 'iOS 14+ · iPhone & iPad', 'App Store'],
  ['📺', 'Android TV', 'Android TV 9+', 'Google Play']
];

export default function DownloadPage() {
  return (
    <>
      <section className="text-center">
        <h1>Скачать ShieldVPN</h1>
        <p className="lead" style={{ margin: '0 auto' }}>Одно приложение — все устройства. Установите на любое количество платформ по одной подписке.</p>
      </section>
      <section className="grid grid-3">
        {platforms.map(([icon, name, requirements, download]) => (
          <div className="card text-center" key={name}>
            <div className="icon" style={{ margin: '0 auto 16px' }}>{icon}</div>
            <h3>{name}</h3>
            <p>{requirements}</p>
            <a href="#" className="btn btn-primary" style={{ marginTop: 16 }}>{download}</a>
          </div>
        ))}
      </section>
      <section className="text-center">
        <h2>Нужен роутер?</h2>
        <p className="lead" style={{ margin: '0 auto 24px' }}>Настройте VPN на роутере — и защитите все устройства в доме сразу.</p>
        <a href="/faq" className="btn btn-ghost btn-lg">Инструкции в FAQ</a>
      </section>
    </>
  );
}
