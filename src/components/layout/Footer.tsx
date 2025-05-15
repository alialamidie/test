
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();
  
  return (
    <footer className="bg-ngc-dark relative overflow-hidden pt-16 pb-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-gray-800">
          {/* Column 1: About Company */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-ngc-green to-ngc-blue flex items-center justify-center">
                <span className="text-black font-bold text-lg">NGC</span>
              </div>
              <span className="text-white font-bold text-xl">NextGenCode</span>
            </div>
            <p className="text-gray-400 max-w-md">
              {t('companyDescription')}
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/share/1CM7YE47q5/" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-ngc-green transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/nextgen.code?igsh=MThtbWt4amszdmhkaw==" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-ngc-green transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-ngc-green transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-ngc-green transition-colors">
                  {t('aboutUs')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-ngc-green transition-colors">
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-ngc-green transition-colors">
                  {t('projects')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-ngc-green transition-colors">
                  {t('contactUs')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Newsletter */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{t('newsletter')}</h3>
            <p className="text-gray-400 mb-4">
              {t('newsletterDesc')}
            </p>
            <form className="space-y-2">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder={t('yourEmail')}
                  className="bg-gray-800 text-gray-200 px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-ngc-green"
                />
                <button 
                  type="submit" 
                  className="bg-ngc-green text-black px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors"
                >
                  {t('subscribe')}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 text-center">
          <p className="text-gray-500">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
