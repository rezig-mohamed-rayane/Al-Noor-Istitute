import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { translations } from '../translations';
import type { Language } from '../translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('ar');

    const t = (path: string) => {
        const keys = path.split('.');
        let current: any = translations[language];
        
        for (const key of keys) {
            if (current[key] === undefined) {
                return path; // fallback to key path if not found
            }
            current = current[key];
        }
        
        return current;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
