import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="page services-page">
      <div className="container">
        <h2>Нашите услуги</h2>
        <ul className="services-list">
          <li>
            <h3>Издаване на сертификати</h3>
            <p>Персонализирани шаблони, масово издаване и уникални кодове за верификация.</p>
          </li>
          <li>
            <h3>API за верификация</h3>
            <p>Лесна интеграция за проверка на сертификати от вашия сайт или приложение.</p>
          </li>
          <li>
            <h3>Кастъм брандинг</h3>
            <p>Брандиране на сертификати и съобщения, за да поддържате корпоративния си стил.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
