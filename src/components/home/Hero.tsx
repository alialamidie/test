
import { useEffect, useRef } from 'react';
import { Button } from '../ui/button';
import { Code, Rocket, Layers, MousePointer } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
  const floatingIconsRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();
  
  useEffect(() => {
    // Animation setup for floating icons
    if (!floatingIconsRef.current) return;
    
    const icons = floatingIconsRef.current.querySelectorAll('.floating-icon');
    icons.forEach((icon, index) => {
      // Set random positions for each icon
      const elem = icon as HTMLElement;
      const randomX = Math.floor(Math.random() * 80);
      const randomY = Math.floor(Math.random() * 80);
      elem.style.left = `${randomX}%`;
      elem.style.top = `${randomY}%`;
      
      // Set animation delay to create staggered effect
      elem.style.animationDelay = `${index * 0.7}s`;
    });
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden grid-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background gradient elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-ngc-dark via-ngc-dark to-black/80"></div>
      
      {/* Floating code icons container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" ref={floatingIconsRef}>
        <div className="relative w-full h-full">
          <Code className="floating-icon absolute w-8 h-8 text-ngc-green opacity-40 animate-float" />
          <Rocket className="floating-icon absolute w-10 h-10 text-ngc-blue opacity-30 animate-float animation-delay-200" />
          <Layers className="floating-icon absolute w-12 h-12 text-ngc-green opacity-20 animate-float animation-delay-400" />
          <MousePointer className="floating-icon absolute w-6 h-6 text-ngc-blue opacity-50 animate-float animation-delay-600" />
          <Code className="floating-icon absolute w-14 h-14 text-ngc-green opacity-15 animate-float animation-delay-800" />
        </div>
      </div>
      
      {/* Main content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="opacity-0 animate-slide-up text-white font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-ngc-green to-ngc-blue bg-clip-text text-transparent">{t('heroTitle')}</span>
          </h1>
          
          <p className="opacity-0 animate-slide-up animation-delay-200 text-gray-300 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {t('heroSubtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up animation-delay-400">
            <Button asChild variant="default" size="lg">
              <a href="/contact" className="flex items-center gap-2">
                {t('getQuoteButton')}
                {language !== 'ar' && <span>→</span>}
                {language === 'ar' && <span>←</span>}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/projects">{t('viewProjects')}</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in animation-delay-800">
        <p className="text-gray-400 mb-2 text-sm">{t('scrollToExplore')}</p>
        <div className="w-[2px] h-12 bg-gradient-to-b from-transparent via-ngc-green to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
