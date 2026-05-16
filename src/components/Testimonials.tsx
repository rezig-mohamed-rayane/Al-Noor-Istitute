import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
    const { t, language } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);

    const testimonials = t('testimonials.items') || [];

    useEffect(() => {
        const handleResize = () => {
            setCardsPerView(window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!Array.isArray(testimonials)) return null;

    let totalSlides = testimonials.length - cardsPerView + 1;
    if (totalSlides < 1) totalSlides = 1;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
        }, 4500);
        return () => clearInterval(interval);
    }, [totalSlides]);

    // Direction logic for slider:
    // RTL: positive transform to go left
    // LTR: negative transform to go left
    const dirMultiplier = language === 'ar' ? 1 : -1;
    const transformValue = `translateX(${currentIndex * (100 / cardsPerView) * dirMultiplier}%)`;

    return (
        <section className="section testimonials" id="testimonials">
            <div className="container">
                <motion.div 
                    className="section-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-tag">{t('testimonials.tag')}</span>
                    <h2 className="section-title">{t('testimonials.title')}</h2>
                    <div className="divider"></div>
                </motion.div>

                <motion.div 
                    className="slider-wrap" id="sliderWrap"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="slider-track" style={{ transform: transformValue }}>
                        {testimonials.map((tItem, idx) => (
                            <div className="testimonial-card" key={idx} style={{ minWidth: `calc(${100 / cardsPerView}% - ${30 * (cardsPerView-1)/cardsPerView}px)` }}>
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                    ))}
                                </div>
                                <p className="quote">{tItem.quote}</p>
                                <div className="student-info">
                                    <div className="avatar">{tItem.initials}</div>
                                    <div className="student-details">
                                        <h4>{tItem.name}</h4>
                                        <span>{tItem.city}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <div className="slider-controls">
                    {[...Array(totalSlides)].map((_, i) => (
                        <div 
                            key={i} 
                            className={`dot ${i === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(i)}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
