import { useEffect } from 'react';

function Preloader({ onFinished }) {
  useEffect(() => {
    document.body.setAttribute('aria-busy', 'true');
    return () => document.body.setAttribute('aria-busy', 'false');
  }, []);

  useEffect(() => {
    const startedAt = performance.now();
    const finish = () => {
      const delay = Math.max(0, 450 - (performance.now() - startedAt));
      window.setTimeout(onFinished, delay);
    };

    if (document.readyState === 'complete') {
      finish();
      return undefined;
    }

    window.addEventListener('load', finish, { once: true });
    return () => window.removeEventListener('load', finish);
  }, [onFinished]);

  return (
    <div className="preloader" role="status" aria-live="polite" aria-label="Загрузка ShieldVPN">
      <div className="preloader-content">
        <span className="preloader-logo" aria-hidden="true">🛡</span>
        <span className="preloader-spinner" aria-hidden="true" />
        <span className="preloader-label">Загружаем ShieldVPN…</span>
      </div>
    </div>
  );
}

export default Preloader;
