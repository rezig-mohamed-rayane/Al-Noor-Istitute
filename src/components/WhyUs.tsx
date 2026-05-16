import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const WhyUs = () => {
    const { t } = useLanguage();

    return (
        <section className="section why-us" id="why-us">
            <div className="container">
                <motion.div 
                    className="section-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-tag">{t('whyUs.tag')}</span>
                    <h2 className="section-title">{t('whyUs.title')}</h2>
                    <div className="divider"></div>
                </motion.div>

                <div className="why-grid">
                    <WhyCard 
                        icon="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" 
                        title={t('whyUs.items.0.title')}
                        desc={t('whyUs.items.0.desc')}
                        delay={0}
                    />
                    <WhyCard 
                        icon="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" 
                        title={t('whyUs.items.1.title')}
                        desc={t('whyUs.items.1.desc')}
                        delay={0.2}
                    />
                    <WhyCard 
                        icon="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" 
                        title={t('whyUs.items.2.title')}
                        desc={t('whyUs.items.2.desc')}
                        delay={0.4}
                    />
                    <WhyCard 
                        icon="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" 
                        title={t('whyUs.items.3.title')}
                        desc={t('whyUs.items.3.desc')}
                        delay={0.6}
                    />
                </div>
            </div>
        </section>
    );
};

const WhyCard = ({ icon, title, desc, delay = 0 }: any) => (
    <motion.div 
        className="why-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay }}
    >
        <div className="why-icon-wrap">
            <svg viewBox="0 0 24 24"><path d={icon}/></svg>
        </div>
        <h4>{title}</h4>
        <p style={{ color: '#666', fontSize: '0.95rem', marginTop: '10px' }}>{desc}</p>
    </motion.div>
);

export default WhyUs;
