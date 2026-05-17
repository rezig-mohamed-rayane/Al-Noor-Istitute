import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            const sections = document.querySelectorAll('section');
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= (sectionTop - 200)) {
                    current = section.getAttribute('id') || '';
                }
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    const toggleLanguage = () => {
        if (language === 'ar') setLanguage('en');
        else if (language === 'en') setLanguage('fr');
        else setLanguage('ar');
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="container nav-container">
                <a href="#" className="logo">
                    <svg className="logo-icon" viewBox="0 0 24 24"><path d="M21 4H7a2 2 0 00-2 2v12a2 2 0 002 2h14a1 1 0 001-1V5a1 1 0 00-1-1zm-1 14H7V6h13v12z"/><path d="M12 8h6v2h-6zM12 12h6v2h-6zM8 8h2v6H8z"/><path d="M3 6v14a2 2 0 002 2h14v-2H5V6H3z"/></svg>
                    <div className="logo-text-wrapper">
                        <span className="logo-title">معهد النور</span>
                        <span className="logo-subtitle">Al-Noor Institute</span>
                    </div>
                </a>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
                    <li><a href="#hero" className={activeSection === 'hero' ? 'active' : ''} onClick={closeMenu}>{t('nav.home')}</a></li>
                    <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={closeMenu}>{t('nav.about')}</a></li>
                    <li><a href="#programs" className={activeSection === 'programs' ? 'active' : ''} onClick={closeMenu}>{t('nav.programs')}</a></li>
                    <li><a href="#why-us" className={activeSection === 'why-us' ? 'active' : ''} onClick={closeMenu}>{t('nav.whyUs')}</a></li>
                    <li><a href="#testimonials" className={activeSection === 'testimonials' ? 'active' : ''} onClick={closeMenu}>{t('nav.testimonials')}</a></li>
                    <li><a href="#enroll" className={activeSection === 'enroll' ? 'active' : ''} onClick={closeMenu}>{t('nav.contact')}</a></li>
                </ul>

                <div className="nav-actions">
                    <button className="lang-toggle" onClick={toggleLanguage}>
                        {language === 'ar' ? 'EN' : language === 'en' ? 'FR' : 'AR'}
                    </button>
                    <a href="#enroll" className="btn btn-gold">{t('nav.enroll')}</a>
                </div>

                <div className="nav-mobile-controls">
                    <button className="lang-toggle lang-toggle-mobile" onClick={toggleLanguage}>
                        {language === 'ar' ? 'EN' : language === 'en' ? 'FR' : 'AR'}
                    </button>
                    <button
                        className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
                        id="mobileBtn"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
