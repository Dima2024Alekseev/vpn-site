import { Link } from 'react-router-dom';

export default function TermsPage() {
  return (
    <>
      <section>
        <span className="eyebrow">ВАЖНАЯ ИНФОРМАЦИЯ</span>
        <h1 className="narrow-title">Условия использования</h1>
        <p className="lead">Актуальная редакция документа готовится к публикации.</p>
      </section>
      <section className="card">
        <h2>Документ обновляется</h2>
        <p>Пожалуйста, свяжитесь с нашей командой, если вам нужна информация об условиях использования сервиса до публикации новой редакции.</p>
        <Link to="/contact" className="btn btn-primary mt-40">Связаться с поддержкой</Link>
      </section>
    </>
  );
}
