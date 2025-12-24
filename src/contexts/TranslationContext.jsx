import { createContext, useContext, useState, useEffect } from 'react';

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState(() => {
  
    const savedLang = localStorage.getItem('language');
    return savedLang || 'en'; 
  });
  const [isRTL, setIsRTL] = useState(language === 'ar');

  useEffect(() => {
    
    localStorage.setItem('language', language);
    setIsRTL(language === 'ar');
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
  };

  return (
    <TranslationContext.Provider value={{ language, isRTL, toggleLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
}

export const useTranslation = () => useContext(TranslationContext);