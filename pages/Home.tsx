import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <section className="page home-page">
      <div className="container">
        <h1>KaCert — Дигитални и печатни сертификати за вашия бизнес</h1>
        <p>
          Ние помагаме на организации и обучителни центрове да създават, издават и верифицират сертификати.
          Бързо, сигурно и с възможност за брандиране.
        </p>
        <div className="hero-ctas">
          <Link to="/contact" className="btn-primary">Започнете</Link>
          <Link to="/services" className="btn-ghost">Научете повече</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
