import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import RTM from './components/RTM';
import Relatorios from './components/Relatorios';
import Comandos from './components/Comandos';
import Ferramentas from './components/Ferramentas';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pb-24">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/RTM" element={<RTM />} />
            <Route path="/Relatorios" element={<Relatorios />} />
            <Route path="/Comandos" element={<Comandos />} />
            <Route path="/Ferramentas" element={<Ferramentas />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}