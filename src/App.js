import './App.css';
import Header from './components/Header';
import Hero from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import AOS from 'aos'; // Import thư viện AOS
import 'aos/dist/aos.css'; // Import file CSS của AOS

function App() {
    const [activeNav, setActiveNav] = useState('home'); // State để theo dõi mục đang được chọn

    useEffect(() => {
        AOS.init({
            duration: 2000, // Thời gian thực hiện hiệu ứng
            once: true, // Hiệu ứng chỉ kích hoạt một lần
        });
        AOS.refresh();
    }, []);

    return (
        <div className="App">
            <Header id="home" activeNav={activeNav} setActiveNav={setActiveNav} />
            <Hero id="about" data-aos="fade-up" /> {/* Thêm thuộc tính data-aos */}
            <Skills id="skills" data-aos="fade-up" />
            <Projects id="projects" data-aos="fade-up" />
            <Contact id="contact" data-aos="fade-up" />
            <Footer setActiveNav={setActiveNav} />
        </div>
    );
}

export default App;
