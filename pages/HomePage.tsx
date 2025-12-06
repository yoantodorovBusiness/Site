import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../constants';
import Button from '../components/ui/Button';
import { BuildingStorefrontIcon, ArrowPathIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5 ml-2" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-primary-light via-primary to-primary-dark rounded-lg shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 px-2">
          {APP_NAME}: Вашият Партньор в Сертификацията
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 px-4">
          Осигуряваме достъп до международни пазари чрез сертификация по GLOBALG.A.P. и ISO стандарти.
        </p>
        <Button variant="secondary" size="lg" onClick={() => window.location.hash = '/services'}>
          Разгледайте нашите услуги
          <ArrowRightIcon className="w-5 h-5 ml-2" />
        </Button>
      </section>

      {/* About KaCert Section */}
      <section className="p-6 md:p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">За {APP_NAME}</h2>
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          <p>
            <strong>{APP_NAME} ЕООД</strong> е българска компания, специализирана в подпомагането и сертифицирането на земеделски производители по стандарта <strong>GLOBALG.A.P.</strong> и свързаните с него модули. Дружеството е регистрирано през март 2021 г. и има седалище в гр. София.
          </p>
          <p className="font-semibold text-primary border-l-4 border-primary pl-4">
            Нашата мисия е да улесняваме достъпа на българските производители до международните пазари чрез прозрачни, ефективни и устойчиви практики, които отговарят на изискванията за безопасност на храните, опазване на околната среда, проследимост и социална отговорност.
          </p>
          <p>
            Работим като локален партньор на <strong>Q-CERT S.A.</strong> – международен сертификационен орган, акредитиран и активен член на GLOBALG.A.P., с водещи позиции в региона. Съвместната ни работа гарантира професионално провеждане на одитите и издаване на валидни сертификати, признати от търговците и износителите в над 130 държави.
          </p>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-8 bg-gray-50 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Нашите Партньори</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
                <CheckBadgeIcon className="w-12 h-12 text-primary mx-auto mb-4"/>
                <h3 className="text-2xl font-semibold text-primary-dark mb-3">Q-Cert S.A.</h3>
                <p className="text-gray-600 mb-4">
                    Международен сертификационен орган, основан през 1998 г., с разширена акредитация и над 5 000 инспектирани организации. Q-Cert е акредитиран от ESYD и е водещ активен член на GLOBALG.A.P.
                </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
                <BuildingStorefrontIcon className="w-12 h-12 text-primary mx-auto mb-4"/>
                <h3 className="text-2xl font-semibold text-primary-dark mb-3">Bulgap ЕООД</h3>
                <p className="text-gray-600 mb-4">
                    Консултантска компания и домакин на Националната техническа работна група GLOBALG.A.P. в България. Предоставя експертни услуги по внедряване, поддръжка и вътрешни одити на системи за управление.
                </p>
            </div>
        </div>
         <div className="text-center mt-8 max-w-3xl mx-auto">
             <ArrowPathIcon className="w-10 h-10 text-gray-500 mx-auto mb-3"/>
            <h3 className="text-xl font-semibold text-gray-700">Синергия за Вашия Успех</h3>
            <p className="text-gray-600 mt-2">
                Синергията между KaCert (локално присъствие), Q-Cert (акредитиран орган) и Bulgap (консултантска експертиза) осигурява на клиентите единна точка на контакт и висококачествено обслужване през целия жизнен цикъл на сертификацията.
            </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Готови ли сте да растете?</h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
          Направете следващата стъпка към международно признание. Разгледайте нашите решения за сертификация или се свържете директно с нас.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button variant="primary" size="lg" onClick={() => window.location.hash = '/services'}>
            Вижте Услугите
          </Button>
          <Button variant="secondary" size="lg" onClick={() => window.location.hash = '/ai-consultant'}>
            Попитайте AI Асистента
          </Button>
          <Button variant="secondary" size="lg" onClick={() => window.location.hash = '/contacts'}>
            Свържете се с нас
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
