import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();
    const [counts, setCounts] = useState([0, 0, 0, 0]);

    useEffect(() => {
        const targets = [500, 15, 20, 98];
        const duration = 2000;
        const steps = 60;
        const stepTime = duration / steps;

        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            setCounts(targets.map(target => Math.min(Math.floor((target / steps) * currentStep), target)));
            if (currentStep >= steps) clearInterval(timer);
        }, stepTime);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="hero" id="hero">
            <div className="pattern-overlay"></div>
            <div className="glow-orb orb-1"></div>
            <div className="glow-orb orb-2"></div>
            <div className="glow-orb orb-3"></div>
            <div className="container">
                <div className="hero-content">
                    <motion.div
                        className="ayah-container"
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    >
                        <h1 className="ayah">"وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا"</h1>
                        <span className="ayah-ref">[المزمل: 4]</span>
                    </motion.div>

                    <motion.h2
                        className="hero-title"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
                    >
                        {t('hero.title1')} <span className="highlight">{t('hero.title2')}</span>
                    </motion.h2>

                    <motion.p
                        className="hero-desc"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {t('hero.desc')}
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.9 }}
                    >
                        <a href="#programs" className="btn btn-outline">{t('hero.explore')}</a>
                        <a href="#enroll" className="btn btn-gold">{t('hero.enroll')}</a>
                    </motion.div>

                    <motion.div
                        className="stats-wrap"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        <div className="stat-box">
                            <span className="stat-num" style={{ direction: 'ltr' }}>{counts[0]}+</span>
                            <span className="stat-label">{t('hero.stats.students')}</span>
                        </div>
                        <div className="stat-box">
                            <span className="stat-num" style={{ direction: 'ltr' }}>{counts[1]}+</span>
                            <span className="stat-label">{t('hero.stats.years')}</span>
                        </div>
                        <div className="stat-box">
                            <span className="stat-num" style={{ direction: 'ltr' }}>{counts[2]}+</span>
                            <span className="stat-label">{t('hero.stats.teachers')}</span>
                        </div>
                        <div className="stat-box">
                            <span className="stat-num" style={{ direction: 'ltr' }}>{counts[3]}%</span>
                            <span className="stat-label">{t('hero.stats.satisfaction')}</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
