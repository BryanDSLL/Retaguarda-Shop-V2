import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-2 fixed bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="#" className="transform transition-transform hover:scale-110">
            <FaGithub className="h-5 w-5" />
          </a>
          <a href="#" className="transform transition-transform hover:scale-110">
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a href="#" className="transform transition-transform hover:scale-110">
            <FaInstagram className="h-5 w-5" />
          </a>
        </div>
        <div className="mt-2 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Retaguarda Shop. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
