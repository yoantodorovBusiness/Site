import React from 'react';
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
      <section className="text-center py-16 bg-gradient-to-br from-primary-dark via-primary to-accent rounded-2xl shadow-xl text-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] pointer-events-none"></div>
        
        <div className="relative z-10 px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            {APP_NAME}: Вашият Партньор в <br className="hidden md:block" /> Земеделската Сертификация
            </h1>
            <p className="text-lg md:text-xl text-green-50 mb-10 max-w-3xl mx-auto leading-relaxed">
            Осигуряваме надежден достъп до международни пазари чрез професионална сертификация по <span className="font-semibold text-white">GLOBALG.A.P.</span> и <span className="font-semibold text-white">ISO</span> стандарти.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="secondary" size="lg" className="shadow-lg border-2 border-transparent hover:border-white" onClick={() => window.location.hash = '/services'}>
                    Разгледайте услугите
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="primary" size="lg" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border-2 border-white/50" onClick={() => window.location.hash = '/ai-consultant'}>
                    Попитайте AI Асистент
                </Button>
            </div>
        </div>
      </section>

      {/* About KaCert Section */}
      <section className="p-8 md:p-10 bg-white rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
            <span className="w-12 h-1 bg-primary rounded-full block"></span>
            За {APP_NAME}
            <span className="w-12 h-1 bg-primary rounded-full block"></span>
        </h2>
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          <p>
            <strong>{APP_NAME} ЕООД</strong> е специализирана българска компания, посветена на подкрепата и сертифицирането на земеделски производители. Ние сме вашият мост към стандарти като <strong>GLOBALG.A.P.</strong> и свързаните с него модули.
          </p>
          <div className="bg-secondary p-6 rounded-xl border-l-4 border-primary shadow-sm">
             <p className="font-medium text-primary-dark">
            Нашата мисия е да улесняваме достъпа на българските производители до международните пазари чрез прозрачни, ефективни и устойчиви практики за безопасност и качество.
            </p>
          </div>
          <p>
            Като локален партньор на <strong>Q-CERT S.A.</strong> – водещ международен сертификационен орган – ние гарантираме професионално провеждане на одити и издаване на сертификати, признати в над 130 държави по света.
          </p>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Нашите Стратегически Партньори</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-primary group">
                <div className="mb-6 bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <CheckBadgeIcon className="w-10 h-10 text-primary"/>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">Q-Cert S.A.</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                    Международен сертификационен орган с над 20 години опит и 5000+ инспектирани организации. Акредитиран от ESYD и ключов член на GLOBALG.A.P., гарантиращ глобално признание на вашия сертификат.
                </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-primary group">
                <div className="mb-6 bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <BuildingStorefrontIcon className="w-10 h-10 text-primary"/>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">Bulgap ЕООД</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                    Водеща консултантска компания и домакин на Националната техническа работна група GLOBALG.A.P. в България. Експерти във внедряването на системи за управление и обучение.
                </p>
            </div>
        </div>
        
         <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
             <div className="bg-secondary p-4 rounded-full flex-shrink-0">
                <ArrowPathIcon className="w-10 h-10 text-primary"/>
             </div>
             <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Пълна Синергия за Вашия Успех</h3>
                <p className="text-gray-600">
                    Комбинацията от локалното присъствие на KaCert, акредитацията на Q-Cert и експертизата на Bulgap ви осигурява "едно гише" за целия процес – от подготовката до успешната сертификация.
                </p>
             </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Готови ли сте за международните пазари?</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Не губете време. Свържете се с нас днес и направете първата стъпка към успешната сертификация на вашата продукция.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button variant="primary" size="lg" className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all" onClick={() => window.location.hash = '/contacts'}>
            Свържете се с нас
          </Button>
           <Button variant="secondary" size="lg" className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-800" onClick={() => window.location.hash = '/services'}>
            Вижте всички услуги
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;