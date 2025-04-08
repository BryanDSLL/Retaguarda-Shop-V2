import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/home';

  if (isHome) return null;

  const handleBack = () => {
    if (location.pathname === '/login') {
      return; // Não permite voltar da página de login
    }
    navigate(-1);
  };

  return (
    <header className="bg-gray-800 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/home" className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 text-white hover:text-gray-300 transition-colors duration-200" />
          <span className="text-xl font-semibold text-white">Retaguarda Shop</span>
        </Link>
        
        {location.pathname !== '/login' && (
          <button
            onClick={handleBack}
            className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-200"
          >
            <span className="text-sm font-medium">Voltar</span>
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
        )}
      </nav>
    </header>
  );
}