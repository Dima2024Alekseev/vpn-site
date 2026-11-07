export default function LoginPage() {
  return (
    <section>
      <h1 className="text-center">Вход в аккаунт</h1>
      <p className="lead text-center" style={{ margin: '0 auto 30px' }}>Рады видеть вас снова!</p>
      <form className="form" id="loginForm">
        <div className="field"><label>Email</label><input type="email" required placeholder="you@example.com" /></div>
        <div className="field"><label>Пароль</label><input type="password" required placeholder="••••••••" /></div>
        <button type="submit" className="btn btn-primary btn-lg">Войти</button>
        <p className="hint">Нет аккаунта? <a href="/register">Зарегистрироваться</a></p>
        <p className="hint"><a href="#">Забыли пароль?</a></p>
      </form>
    </section>
  );
}
