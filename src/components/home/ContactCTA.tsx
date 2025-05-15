
import { Button } from '../ui/button';
import { useLanguage } from '../../context/LanguageContext';

const ContactCTA = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="py-20 relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-ngc-green/10 to-ngc-blue/10 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6 opacity-0 animate-slide-up">
            <span className="bg-gradient-to-r from-ngc-green to-ngc-blue bg-clip-text text-transparent">{t('ctaTitle')}</span>
          </h2>
          
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto opacity-0 animate-slide-up animation-delay-200">
            {t('ctaSubtitle')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-slide-up animation-delay-400">
            <Button asChild variant="default" size="lg">
              <a href="/contact" className="flex items-center gap-2">
                {t('getStartedToday')}
                {language !== 'ar' && <span>→</span>}
                {language === 'ar' && <span>←</span>}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/services">{t('exploreServices')}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
