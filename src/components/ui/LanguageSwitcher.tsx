
import { useLanguage } from '../../context/LanguageContext';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-white hover:text-ngc-green transition-colors"
      aria-label="Switch language"
    >
      <Languages className="h-5 w-5" />
      <span className="text-sm font-medium">{t('languageSwitch')}</span>
    </button>
  );
};

export default LanguageSwitcher;
