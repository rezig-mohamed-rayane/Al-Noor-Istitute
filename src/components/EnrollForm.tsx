import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const EnrollForm = () => {
    const { t, language } = useLanguage();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        (e.target as HTMLFormElement).reset();
    };

    return (
        <section className="section enroll" id="enroll">
            <div className="pattern-overlay"></div>
            <div className="container">
                <motion.div 
                    className="enroll-container"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
                >
                    <div className="contact-info-side">
                        <h3>{t('enroll.title')}</h3>
                        
                        <InfoRow icon="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" title={t('enroll.addressTitle')} desc={t('enroll.address')} />
                        <InfoRow icon="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" title={t('enroll.phoneTitle')} desc="+966 50 123 4567" dir="ltr" />
                        <InfoRow icon="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" title={t('enroll.emailTitle')} desc="info@alnoor-quran.edu" />

                        <div className="social-links">
                            <SocialLink href="#" icon="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                            <SocialLink href="#" icon="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            <SocialLink href="#" icon="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </div>
                    </div>

                    <div className="form-side">
                        <form id="enrollmentForm" onSubmit={handleSubmit}>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label">{t('enroll.formLabels.name')}</label>
                                    <input type="text" className="form-control" placeholder={t('enroll.formLabels.namePlaceholder')} required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">{t('enroll.formLabels.phone')}</label>
                                    <input type="tel" className="form-control" placeholder={t('enroll.formLabels.phonePlaceholder')} required dir="ltr" />
                                </div>
                                <div className="form-group full">
                                    <label className="form-label">{t('enroll.formLabels.email')}</label>
                                    <input type="email" className="form-control" placeholder={t('enroll.formLabels.emailPlaceholder')} dir="ltr" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">{t('enroll.formLabels.program')}</label>
                                    <select className="form-control" required defaultValue="">
                                        <option value="" disabled>{t('enroll.formLabels.programSelect')}</option>
                                        <option value="memorization">{t('programs.items.0.title')}</option>
                                        <option value="tajweed">{t('programs.items.1.title')}</option>
                                        <option value="kids">{t('programs.items.2.title')}</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">{t('enroll.formLabels.system')}</label>
                                    <select className="form-control" required defaultValue="">
                                        <option value="" disabled>{t('enroll.formLabels.systemSelect')}</option>
                                        <option value="online">{t('enroll.formLabels.systemOnline')}</option>
                                        <option value="onsite">{t('enroll.formLabels.systemOnsite')}</option>
                                    </select>
                                </div>
                                <div className="form-group full">
                                    <label className="form-label">{t('enroll.formLabels.notes')}</label>
                                    <textarea className="form-control" placeholder={t('enroll.formLabels.notesPlaceholder')}></textarea>
                                </div>
                            </div>
                            
                            <button type="submit" className="btn btn-gold submit-btn">{t('enroll.formLabels.submit')}</button>
                            
                            <div className="success-message" style={{ display: isSubmitted ? 'block' : 'none' }}>
                                {t('enroll.formLabels.success')}
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const InfoRow = ({ icon, title, desc, dir }: { icon: string, title: string, desc: string, dir?: string }) => (
    <div className="info-row">
        <div className="info-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d={icon}/></svg>
        </div>
        <div className="info-text">
            <h5>{title}</h5>
            <p dir={dir}>{desc}</p>
        </div>
    </div>
);

const SocialLink = ({ href, icon }: { href: string, icon: string }) => (
    <a href={href} className="social-btn">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d={icon}/></svg>
    </a>
);

export default EnrollForm;
