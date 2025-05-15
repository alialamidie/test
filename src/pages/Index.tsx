
import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ContactCTA from '../components/home/ContactCTA';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-ngc-dark">
      <Header />
      <Hero />
      <ServicesPreview />
      <FeaturedProjects />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
