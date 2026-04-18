import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import WebDev from './pages/WebDev';
import WhatsAppAPI from './pages/WhatsAppAPI';
import Blog from './pages/Blog';
import Products from './pages/Products';
import DigitalMarketing from './pages/DigitalMarketing';
import FlyBill from './pages/FlyBill';
import FlyPayroll from './pages/FlyPayroll';
import SmartCRM from './pages/SmartCRM';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Careers from './pages/Careers';
import Loader from './components/Loader';
import AdminLetterhead from './pages/AdminLetterhead';
import IndustrialServiceDetail from './pages/IndustrialServiceDetail';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        });
    }, []);

    return (
        <Router>
            <Loader />
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/service/:slug" element={<IndustrialServiceDetail />} />
                    <Route path="/web-development" element={<WebDev />} />
                    <Route path="/whatsapp-api" element={<WhatsAppAPI />} />
                    <Route path="/digital-marketing" element={<DigitalMarketing />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/fly-bill" element={<FlyBill />} />
                    <Route path="/payroll" element={<FlyPayroll />} />
                    <Route path="/smart-crm" element={<SmartCRM />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/admin" element={<AdminLetterhead />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
