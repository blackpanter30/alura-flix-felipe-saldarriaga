import './App.css';

// Enrutamiento:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Contextos:
import { HomeProvider } from './context/HomeContext';

// Páginas:
import Home from './pages/Home';
import NuevoVideo from './pages/NuevoVideo';

// Componentes:
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <HomeProvider><Header/></HomeProvider>
      <Routes>
        <Route path="/" element={<HomeProvider> <Home /> </HomeProvider>} />
        <Route path="/NuevoVideo" element={<HomeProvider><NuevoVideo /></HomeProvider>} />
      </Routes>
      <HomeProvider><Footer /></HomeProvider>
    </Router>
  );
}

export default App;