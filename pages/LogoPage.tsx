
import React, { useState } from 'react';

const LogoPage: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white p-8 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-primary mb-6">Диагностика на Лого</h1>
      
      <div className="w-full max-w-2xl space-y-8">
        
        {/* Container for the image */}
        <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Преглед на файла:</h2>
            
            {/* Checkerboard background to show transparency */}
            <div 
                className="relative flex items-center justify-center p-10 border-2 border-dashed border-gray-300 rounded-xl w-full h-64 overflow-hidden"
                style={{
                    backgroundImage: `
                        linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
                        linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
                        linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
                        linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)
                    `,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                }}
            >
                {!imageError ? (
                    <img 
                        src="/logo.png" 
                        alt="KaCert Logo Test" 
                        className="max-w-full max-h-full object-contain shadow-sm"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="text-center text-red-500 bg-white p-4 rounded shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <p className="font-bold">Файлът не е намерен!</p>
                        <p className="text-sm">Браузърът не може да зареди <code>/logo.png</code></p>
                    </div>
                )}
            </div>
            <p className="text-gray-500 mt-2 text-sm text-center">
                Фонът е "шахматен", за да се види прозрачността на логото.
            </p>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-sm md:text-base">
            <h3 className="font-bold text-blue-800 mb-2">Как да оправите това?</h3>
            <ul className="list-disc list-inside space-y-2 text-blue-900">
                <li>
                    Уверете се, че имате папка с име <strong>public</strong> (точно така, с малки букви) в основната директория на проекта (там където е <code>package.json</code> или <code>index.html</code>).
                </li>
                <li>
                    Уверете се, че файлът със снимката се казва точно <strong>logo.png</strong> и е вътре в папката <strong>public</strong>.
                </li>
                <li>
                    Ако папката се казва <code>ui-public-</code> или е вътре в <code>src</code> или <code>components</code>, <strong>преместете я</strong> в основата и я преименувайте на <code>public</code>.
                </li>
            </ul>
        </div>

        {/* Formats Info */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
             <h3 className="font-bold text-gray-800 mb-2">Относно форматите:</h3>
             <p className="text-gray-700 mb-2">Използваният формат <strong>.png</strong> е правилен.</p>
             <ul className="space-y-1 text-sm text-gray-600">
                 <li>✅ <strong>PNG</strong> - Поддържа прозрачност, идеален за лога върху цветен фон.</li>
                 <li>✅ <strong>SVG</strong> - Векторен формат, най-добро качество при мащабиране.</li>
                 <li>✅ <strong>WebP</strong> - Модерен формат, силно компресиран.</li>
                 <li>⚠️ <strong>JPG/JPEG</strong> - Няма прозрачност (фонът винаги е бял/черен правоъгълник).</li>
             </ul>
        </div>

      </div>
    </div>
  );
};

export default LogoPage;
