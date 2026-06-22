import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import Internship from './pages/Internship';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import PlanDetail from './pages/PlanDetail'; // ✅ Import

export default function App() {
  return (
    <div className="min-h-screen bg-navy text-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* ✅ Plan Detail Route */}
          <Route path="/plan/:planId" element={<PlanDetail />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
