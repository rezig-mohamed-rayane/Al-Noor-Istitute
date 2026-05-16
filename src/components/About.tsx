import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t, language } = useLanguage();
    
    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-image-wrapper"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="about-image-border"></div>
                        <div className="about-image-inner">
                            <svg className="mosque-icon" viewBox="0 0 100 100" fill="currentColor">
                                <path d="M48 25 C30 15 15 25 15 40 L15 65 C25 55 40 55 48 65 Z" />
                                <path d="M52 25 C70 15 85 25 85 40 L85 65 C75 55 60 55 52 65 Z" />
                                <path d="M15 45 L10 50 L10 70 C25 60 40 60 48 70 L48 65 C40 55 25 55 15 65 Z" opacity="0.5"/>
                                <path d="M85 45 L90 50 L90 70 C75 60 60 60 52 70 L52 65 C60 55 75 55 85 65 Z" opacity="0.5"/>
                                <polygon points="45,72 25,95 35,95 48,80" />
                                <polygon points="55,72 75,95 65,95 52,80" />
                                <polygon points="48,80 52,80 55,75 45,75" />
                            </svg>
                        </div>
                        <div className={`experience-badge ${language !== 'ar' ? 'ltr-badge' : ''}`}>
                            <span className="exp-num">{t('about.expNum')}</span>
                            <span className="exp-text">{t('about.expText')}</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="section-header" style={{ textAlign: language === 'ar' ? 'right' : 'left', marginBottom: '30px' }}>
                            <span className="section-tag">{t('about.tag')}</span>
                            <h2 className="section-title">{t('about.title')}</h2>
                            <div className="divider" style={{ margin: language === 'ar' ? '0 0 25px 0' : '0 auto 25px 0' }}></div>
                        </div>
                        <p className="about-desc">{t('about.desc')}</p>

                        <div className="features-grid">
                            <FeatureItem icon="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" title={t('about.features.0.title')} desc={t('about.features.0.desc')} />
                            <FeatureItem icon="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" title={t('about.features.1.title')} desc={t('about.features.1.desc')} />
                            <FeatureItem icon="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" title={t('about.features.2.title')} desc={t('about.features.2.desc')} />
                            <FeatureItem icon="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" title={t('about.features.3.title')} desc={t('about.features.3.desc')} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const FeatureItem = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
    <div className="feat-item">
        <div className="feat-icon">
            <svg viewBox="0 0 24 24"><path d={icon} /></svg>
        </div>
        <div className="feat-text">
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    </div>
);

export default About;
