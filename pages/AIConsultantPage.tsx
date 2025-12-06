import React from 'react';
import AIConsultantView from '../features/ai-consultant/AIConsultantView';
import { APP_NAME } from '../constants';
import { LightBulbIcon } from '../components/ui/IconComponents';

const AIConsultantPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="py-8 bg-white shadow-lg rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block p-3 bg-primary-light rounded-full mb-4">
            <LightBulbIcon className="w-10 h-10 text-primary-dark" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">
            AI Консултант от {APP_NAME}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Задайте вашите въпроси относно GLOBALG.A.P., IFS, ISO стандарти и процеса по сертификация. Нашият AI е тук, за да ви помогне с първоначална информация.
          </p>
        </div>
      </section>

      <section>
        <AIConsultantView />
      </section>
    </div>
  );
};

export default AIConsultantPage;