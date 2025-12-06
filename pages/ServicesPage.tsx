import React from 'react';
import { APP_NAME } from '../constants';
import Button from '../components/ui/Button';

const Table = ({ headers, data }: { headers: string[], data: (string | React.ReactNode)[][] }) => (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-gray-50">
                <tr>
                    {headers.map((header, i) => (
                        <th key={i} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {data.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                        {row.map((cell, j) => (
                            <td key={j} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);


const ServicesPage: React.FC = () => {
    const globalGapData = [
        ['Fruits & Vegetables (FV)', 'Плодове и зеленчуци'],
        ['Combinable Crops (CC)', 'Зърнени и маслодайни култури'],
        ['Plant Propagation Material (PPM)', 'Разсадници, семепроизводство'],
        ['Flowers & Ornamentals (F&O)', 'Декоративни растения'],
        ['Crops for Processing (CfP)', 'Култури за преработка'],
        ['Chain of Custody (CoC)', 'Проследимост след фермата'],
    ];

    const ifsData = [
        ['IFS Food', 'Производители и пакери на храни', 'HACCP + Food Safety Culture, оценка А–D; сертификат 1 год.'],
        ['IFS Broker', 'Търговци, посредници, вносители', 'Проверява управление на доставчици, договори и проследимост.'],
        ['IFS Logistics', 'Транспорт, складиране, дистрибуция', 'Фокус върху контрол на температура, хигиена, товаро-разтоварни дейности.'],
    ];
    
    const isoData = [
        ['ISO 9001:2015', 'Система за управление на качеството', 'Консистентни продукти/услуги, удовлетвореност на клиента. По-добри процеси, конкурентно предимство.'],
        ['ISO 22000:2018', 'Управление на безопасността на храните', 'Фермите/преработвателите покриват регулаторни и търговски изисквания. Интегрира HACCP, проследимост и непрекъснато усъвършенстване.'],
        ['ISO 14001:2015', 'Екологично управление', 'Управление на ресурси, отпадъци и емисии. Намалява екологичен отпечатък и разходи.'],
        ['ISO 45001:2018', 'Здраве и безопасност при работа', 'Безопасни условия и култура на превенция. Намалява травми, повишава морала, намалява застрахователни разходи.'],
        ['ISO 27001:2022', 'Информационна сигурност (по желание)', 'Защита на данни и репутация. Подсилва доверие при работа с търговски вериги.'],
    ];

    const choiceData = [
        ['Производител на първична селскостопанска продукция', 'GLOBALG.A.P. + при нужда ISO 22000'],
        ['Преработвател / опаковач', 'IFS Food или ISO 22000 (често комбинирани)'],
        ['Търговец/брокер без склад', 'IFS Broker + ISO 9001'],
        ['Логистична компания', 'IFS Logistics + ISO 45001'],
        ['Организация с фокус качество и устойчивост', 'ISO 9001 + ISO 14001 + ISO 22000'],
    ];

  return (
    <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-primary mb-6 text-center">
        Нашите Услуги
      </h1>
      
      <p className="text-lg text-gray-700 mb-8 text-center italic max-w-4xl mx-auto">
        Основният ни фокус е подготовката и организирането на процеса за сертификация по GLOBALG.A.P., IFS и ISO стандарти чрез Q-Cert – от първоначалната оценка до успешното преминаване на одита. Предлагаме пълен цикъл дейности, комбиниращи експертизата на KaCert, Q-Cert и Bulgap.
      </p>

      <div className="space-y-12">
        
        <section>
          <h2 className="text-2xl font-semibold text-primary-dark mb-4 border-b-2 border-primary-light pb-2">
            Пълен цикъл на обслужване
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 list-disc list-inside text-gray-700">
            <li><strong>Предварителна оценка (Gap Analysis):</strong> Анализ на текущите практики и идентифициране на несъответствия.</li>
            <li><strong>Планиране и документация:</strong> Подготовка/актуализация на процедури, записи и инструкции.</li>
            <li><strong>Внедряване и обучение:</strong> Подкрепа при прилагане на добрите практики и обучение на персонала.</li>
            <li><strong>Вътрешни одити:</strong> Провеждане на независими вътрешни одити и планове за коригиращи действия.</li>
            <li><strong>Координация с Q-Cert:</strong> Административно съдействие и комуникация със сертификационния орган.</li>
            <li><strong>Поддръжка след сертификация:</strong> Актуализация, периодични одити и подготовка за ресертификация.</li>
            <li><strong>Специализирани обучения:</strong> Тренинги по GLOBALG.A.P., вътрешен одит и добри производствени практики.</li>
          </ul>
        </section>

        <section id="globalgap">
            <h2 className="text-2xl font-semibold text-primary-dark mb-2">GLOBALG.A.P. - Международен стандарт за Добри земеделски практики</h2>
            <p className="text-gray-600 mb-4">GLOBALG.A.P. осигурява единна рамка за безопасност на храните, устойчиво управление на ресурсите и социална отговорност в първичното производство.</p>
            <p className="font-semibold mb-2 text-gray-800">Обхвати, които предлагаме чрез Q-Cert:</p>
            <Table headers={['IFA v6 Scope', 'Тип производство']} data={globalGapData} />
            <div className="mt-4 text-sm text-gray-700">
                <p className="font-semibold">Ползи за производителите:</p>
                <ul className="list-disc list-inside ml-4">
                    <li>Достъп до над 130 пазара и водещи търговски вериги.</li>
                    <li>Намаляване на риска от оттегляния на продукция.</li>
                    <li>Подобрена еко-ефективност и имидж.</li>
                </ul>
            </div>
        </section>
        
        <section id="ifs">
            <h2 className="text-2xl font-semibold text-primary-dark mb-2">IFS - International Featured Standards</h2>
            <p className="text-gray-600 mb-4">IFS е GFSI-бенчмаркиран набор от стандарти за управление на качеството и безопасността по цялата верига за храни и стоки.</p>
             <Table headers={['Стандарт', 'За кого е подходящ', 'Ключови акценти']} data={ifsData} />
             <div className="mt-4 text-sm text-gray-700">
                <p className="font-semibold">Защо IFS?</p>
                <ul className="list-disc list-inside ml-4">
                    <li>Намалява нуждата от многократни клиентски одити и оптимизира разходите.</li>
                    <li>Повишава доверието на големите европейски ритейлъри и улеснява износа.</li>
                </ul>
            </div>
        </section>

        <section id="iso">
            <h2 className="text-2xl font-semibold text-primary-dark mb-2">ISO стандарти</h2>
            <p className="text-gray-600 mb-4">Q-Cert е акредитиран орган за широка гама ISO стандарти, а KaCert и Bulgap подготвят документацията, обучават персонала и придружават при одита.</p>
             <Table headers={['Стандарт', 'Цел', 'Основни ползи']} data={isoData} />
        </section>

        <section>
             <h2 className="text-2xl font-semibold text-primary-dark mb-2">Как да изберете правилния стандарт?</h2>
             <p className="text-gray-600 mb-4">Нашият екип ще ви консултира, но ето няколко основни насоки:</p>
             <Table headers={['Ако сте…', 'Препоръчан стандарт']} data={choiceData} />
        </section>

        <div className="text-center pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800">Готови ли сте?</h3>
            <p className="mt-2 text-lg text-gray-600">Свържете се с екипа на <strong>{APP_NAME}</strong> – ще комбинираме експертизата на Bulgap и акредитираните услуги на Q-Cert, за да получите нужния сертификат бързо, ефективно и без излишни разходи.</p>
             <Button variant="primary" size="lg" className="mt-6" onClick={() => window.location.hash = '/contacts'}>
                Направете запитване
            </Button>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;