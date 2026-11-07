import { Link } from 'react-router-dom';
import '../styles/pages/forms.css';

export default function RegisterPage() {
  return (
    <section>
      <h1 className="text-center">Создайте аккаунт</h1>
      <p className="lead text-center" style={{ margin: '0 auto 30px' }}>7 дней бесплатно. Без карты.</p>
      <form className="form" id="registerForm">
        <div className="field"><label>Имя</label><input type="text" required placeholder="Иван" /></div>
        <div className="field"><label>Email</label><input type="email" required placeholder="you@example.com" /></div>
        <div className="field"><label>Пароль</label><input type="password" required minLength="8" placeholder="Минимум 8 символов" /></div>
        <div className="field">
          <label>Тариф</label>
          <select required>
            <option>Пробный (7 дней)</option>
            <option>Базовый — 199 ₽/мес</option>
            <option>Премиум — 349 ₽/мес</option>
            <option>Год — 2790 ₽</option>
          </select>
        </div>
        <div className="field">
          <label style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
            <input type="checkbox" required style={{ width: 'auto', marginTop: 5 }} />
            <span>Я согласен с <Link to="/terms" style={{ color: 'var(--accent)' }}>условиями</Link> и <Link to="/privacy" style={{ color: 'var(--accent)' }}>политикой конфиденциальности</Link></span>
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">Создать аккаунт</button>
        <p className="hint">Уже есть аккаунт? <Link to="/login">Войти</Link></p>
      </form>
    </section>
  );
}
