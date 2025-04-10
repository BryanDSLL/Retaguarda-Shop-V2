import { useState } from 'react';
import { Link } from 'react-router-dom';
import codingImage from '../assets/coding.webp';
import reportsImage from '../assets/reports.webp';
import toolsImage from '../assets/tools.webp';
import analyticsImage from '../assets/analytics.webp';
import settingsImage from '../assets/settings.webp';

export default function Home() {
  const buttons = [
    { name: 'RTM', path: '/rtm', image: codingImage },
    { name: 'Relatórios', path: '/relatorios', image: reportsImage },
    { name: 'Comandos', path: '/comandos', image: settingsImage },
    { name: 'Ferramentas', path: '/ferramentas', image: toolsImage },
    {
      name: 'SPED',
      path: 'https://docs.google.com/document/d/16rtL5SR722VkZf4c0_vGvk7nnnUsKThVqCI8evwXkQk/edit?tab=t.0#heading=h.jgv86068eczo',
      image: analyticsImage,
    },
    {
      name: 'Dicas / Versões',
      path: 'https://sites.google.com/alterdata.com.br/alt/p%C3%A1gina-inicial?pli=1&authuser=0',
      image: settingsImage,
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    alert('Material sugerido com sucesso!');
    setFormData({ title: '', description: '', link: '' });
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Texto e botão "Sugerir Material" */}
          <div className="space-y-6 flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl font-bold text-white">
              Bem-vindo ao portal da Retaguarda Shop
            </h1>
            <p className="text-xl text-gray-300 max-w-lg">
              Escolha uma das opções ao lado para começar!
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="relative bg-gray-800/90 backdrop-blur-sm hover:bg-gray-700/90 text-white rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-center items-center shadow-lg border border-gray-700/50 overflow-hidden py-2 px-4"
            >
              <span className="text-lg font-semibold relative z-10">Sugerir Material</span>
            </button>
          </div>

          {/* Grid dos botõe s */}
          <div className="grid grid-cols-3 gap-[3px] max-h-[460px] relative">
            {buttons.map((button) =>
              button.name === 'SPED' || button.name === 'Dicas / Versões' ? (
                <div
                  className="relative flex flex-col items-center justify-center h-[calc(100%)]"
                  key={button.name}
                >
                  <a
                    href={button.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-gray-800/90 backdrop-blur-sm hover:bg-gray-700/90 text-white rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-center items-center shadow-lg border border-gray-700/50 overflow-hidden aspect-[3/4]"
                    style={{
                      height: 'calc(100% - 0.5rem)',
                      margin: '0',
                      transform: 'translate(-3.5px, -3.5px)',
                    }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-30 transition-opacity duration-300 hover:opacity-40"
                      style={{
                        backgroundImage: `url(${button.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    />
                    <span className="text-xl font-semibold relative z-5 p-6">
                      {button.name}
                    </span>
                  </a>
                  {button.name === 'Dicas / Versões' && (
                    <p className="text-gray-400 text-center text-xs italic absolute bottom-2 left-0 right-0 mx-auto pr-2 pb-2">
                      Solicitar acesso ao Willramos.sup.shop
                    </p>
                  )}
                </div>
              ) : (
                <Link
                  key={button.name}
                  to={button.path}
                  className="relative bg-gray-800/90 backdrop-blur-sm hover:bg-gray-700/90 text-white rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-center items-center shadow-lg border border-gray-700/50 overflow-hidden aspect-[3/4]"
                  style={{ height: 'calc(100% - 0.5rem)', margin: '0' }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 transition-opacity duration-300 hover:opacity-100"
                    style={{
                      backgroundImage: `url(${button.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                  <span className="text-xl font-semibold relative z-10 p-2">
                    {button.name}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Modelo */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md text-white">
            <h2 className="text-2xl font-bold mb-4">Sugerir Material</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Título"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              />
              <textarea
                name="description"
                placeholder="Descrição"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              />
              <input
                type="text"
                name="link"
                placeholder="Link"
                value={formData.link}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
