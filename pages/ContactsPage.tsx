import React from 'react';
import { APP_NAME } from '../constants';
import { LocationMarkerIcon, PhoneIcon, EmailIcon, ClockIcon } from '../components/ui/IconComponents';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import Button from '../components/ui/Button';


const ContactsPage: React.FC = () => {
  const contactDetails = [
    {
      icon: <LocationMarkerIcon className="w-6 h-6 text-primary" />,
      title: "Адрес",
      lines: [
        "бул. „Черни връх“ 47, 1407 София, България",
      ],
      ariaLabel: "Our office address"
    },
    {
      icon: <PhoneIcon className="w-6 h-6 text-primary" />,
      title: "Телефон",
      lines: [
        <a href="tel:+359877762444" className="hover:text-primary-dark" aria-label="Call KaCert">+359 8 777 62 444</a>,
      ],
      ariaLabel: "Our phone number"
    },
    {
      icon: <EmailIcon className="w-6 h-6 text-primary" />,
      title: "Имейл Адрес",
      lines: [
        <a href="mailto:info.kacert@gmail.com" className="hover:text-primary-dark" aria-label="Email KaCert">info.kacert@gmail.com</a>,
      ],
      ariaLabel: "Our email address"
    },
    {
      icon: <ClockIcon className="w-6 h-6 text-primary" />,
      title: "Работно време",
      lines: [
        "Понеделник – Петък:",
        "09:00 – 17:30 ч."
      ],
      ariaLabel: "Our working hours"
    }
  ];

  return (
    <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-primary mb-8 text-center">
        Свържете се с Нас
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="space-y-6">
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-start space-x-4" role="group" aria-labelledby={`contact-title-${index}`}>
                <div className="flex-shrink-0 pt-1 text-primary">
                  {detail.icon}
                </div>
                <div>
                  <h2 id={`contact-title-${index}`} className="text-lg font-semibold text-primary-dark mb-1">{detail.title}</h2>
                  {detail.lines.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-gray-700 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
             <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 pt-1 text-primary">
                  <InformationCircleIcon className="w-6 h-6"/>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-primary-dark mb-2">Фирмени данни</h2>
                  <div className="space-y-2 text-gray-700">
                      <p><strong>Фирма:</strong> КАСЕРТ ЕООД</p>
                      <p><strong>ЕИК:</strong> 206441943</p>
                      <p><strong>ДДС №:</strong> BG206441943</p>
                      <p><strong>Управител:</strong> Ивайло Руменов Чаков</p>
                  </div>
                </div>
              </div>
        </div>
      </div>


      <div className="mt-12 text-center border-t pt-8 border-gray-200 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800">Имате въпроси?</h2>
        <p className="mt-2 text-lg text-gray-700">
          Очакваме вашите запитвания и ще се радваме да обсъдим как {APP_NAME} може да допринесе за успеха на вашия бизнес. Изпратете ни имейл или се обадете, за да насрочим консултация.
        </p>
         <Button variant="primary" size="lg" className="mt-6" onClick={() => window.location.hash = '/ai-consultant'}>
            Или попитайте нашия AI асистент
        </Button>
      </div>
    </div>
  );
};

export default ContactsPage;