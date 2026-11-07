export default function ContactPage() {
  return (
    <>
      <section className="text-center">
        <h1>Свяжитесь с нами</h1>
        <p className="lead" style={{ margin: '0 auto' }}>Поддержка работает 24/7. Среднее время ответа — 5 минут.</p>
      </section>
      <section className="grid grid-3">
        <div className="card text-center"><div className="icon" style={{ margin: '0 auto 16px' }}>✉️</div><h3>Email</h3><p>support@shieldvpn.example</p></div>
        <div className="card text-center"><div className="icon" style={{ margin: '0 auto 16px' }}>💬</div><h3>Онлайн-чат</h3><p>Доступен в приложении и личном кабинете</p></div>
        <div className="card text-center"><div className="icon" style={{ margin: '0 auto 16px' }}>🛡</div><h3>Партнёрам</h3><p>partners@shieldvpn.example</p></div>
      </section>
      <section>
        <h2 className="text-center mb-20">Или напишите нам</h2>
        <form className="form">
          <div className="field"><label>Ваше имя</label><input type="text" required placeholder="Иван Иванов" /></div>
          <div className="field"><label>Email</label><input type="email" required placeholder="you@example.com" /></div>
          <div className="field">
            <label>Тема</label>
            <select required>
              <option value="">Выберите тему</option>
              <option>Проблема с подключением</option>
              <option>Оплата и подписка</option>
              <option>Технический вопрос</option>
              <option>Сотрудничество</option>
              <option>Другое</option>
            </select>
          </div>
          <div className="field"><label>Сообщение</label><textarea rows="5" required placeholder="Опишите ваш вопрос..." /></div>
          <button type="submit" className="btn btn-primary">Отправить</button>
        </form>
      </section>
    </>
  );
}
