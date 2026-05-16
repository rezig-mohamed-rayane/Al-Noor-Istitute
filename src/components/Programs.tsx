import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Programs = () => {
    const { t, language } = useLanguage();
    
    return (
        <section className="section programs" id="programs">
            <div className="pattern-overlay"></div>
            <div className="container">
                <motion.div 
                    className="section-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: language === 'ar' ? 'right' : 'left' }}
                >
                    <span className="section-tag">{t('programs.tag')}</span>
                    <h2 className="section-title light">{t('programs.title')}</h2>
                    <div className="divider" style={{ margin: language === 'ar' ? '0 0 25px 0' : '0 auto 25px 0' }}></div>
                </motion.div>
                
                <div className="programs-grid">
                    <ProgramCard 
                        icon="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
                        title={t('programs.items.0.title')}
                        desc={t('programs.items.0.desc')}
                        meta1={t('programs.items.0.meta1')}
                        meta2={t('programs.items.0.meta2')}
                        delay={0}
                    />
                    <ProgramCard 
                        icon="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M8.21 13.89L7 23l5-3 5 3-1.21-9.12"
                        title={t('programs.items.1.title')}
                        desc={t('programs.items.1.desc')}
                        meta1={t('programs.items.1.meta1')}
                        meta2={t('programs.items.1.meta2')}
                        isFeatured={true}
                        delay={0.2}
                    />
                    <ProgramCard 
                        icon="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"
                        title={t('programs.items.2.title')}
                        desc={t('programs.items.2.desc')}
                        meta1={t('programs.items.2.meta1')}
                        meta2={t('programs.items.2.meta2')}
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};

const ProgramCard = ({ icon, title, desc, meta1, meta2, isFeatured = false, delay = 0 }: any) => {
    const { t, language } = useLanguage();
    return (
        <motion.div 
            className={`program-card ${isFeatured ? 'featured' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay }}
        >
            {isFeatured && <div className={`featured-label ${language !== 'ar' ? 'ltr-label' : ''}`}>{t('programs.featuredLabel')}</div>}
            <div className="prog-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={icon} /></svg>
            </div>
            <h3 className="prog-title">{title}</h3>
            <p className="prog-desc">{desc}</p>
            <div className="prog-meta">
                <span className="meta-badge">⏱️ {meta1}</span>
                <span className="meta-badge">📊 {meta2}</span>
            </div>
            <a href="#enroll" className="prog-btn">{t('programs.btn')}</a>
        </motion.div>
    );
};

export default Programs;
