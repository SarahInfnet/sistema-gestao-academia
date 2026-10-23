
import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import Modalities from './pages/Modalities/Modalities';
import Join from './pages/Join/Join';
import Access from './pages/Access/Access';

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/modalidades" element={<Modalities />} />
        <Route path="/faca-parte" element={<Join />} />
        <Route path="/acesso" element={<Access />} />
      </Routes>
    </MainLayout>
  );
}
