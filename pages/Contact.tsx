import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="page contact-page">
      <div className="container">
        <h2>Контакти</h2>
        <p>Попълнете формата или използвайте имейл/телефон, за да се свържете с нас.</p>

        <form className="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
          <label>
            Име
            <input name="name" type="text" required />
          </label>
          <label>
            Имейл
            <input name="email" type="email" required />
          </label>
          <label>
            Съобщение
            <textarea name="message" rows={5} required />
          </label>
          <button type="submit" className="btn-primary">Изпрати</button>
        </form>

        <div className="contact-info">
          <p>Имейл: <a href="mailto:info@kacert.example">info@kacert.example</a></p>
          <p>Телефон: +359 88 000 0000</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
