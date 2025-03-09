import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Home/Pages/Home/Home';
import About from './Pages/About/About';
import Products from './Pages/Products/Products';
import Services from './Pages/Services/Services';
// import Certificates from './Pages/Certificates/Certificates';
import Downloads from './Pages/Downloads/Downloads';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import ScrollToTop from './Components/ScrollToTop';
import GoToTop from './Components/GoToTop';

const App = () => {
    const location = useLocation();
    console.log("jayCurrent location:", location.pathname);

    return (
        <>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<Services />} />
                {/* <Route path="/certificates" element={<Certificates />} /> */}
                <Route path="/downloads" element={<Downloads />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <GoToTop />
            <Footer />
        </>
    );
};

export default App; 