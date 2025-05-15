
import { Code, Smartphone, LayoutDashboard, PenTool, Users, Briefcase } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ServiceCard from '../components/services/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies to deliver seamless user experiences.",
      features: [
        "Responsive websites & web applications",
        "E-commerce solutions",
        "Progressive Web Apps (PWA)",
        "API development & integration"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver outstanding user experiences.",
      features: [
        "iOS & Android native apps",
        "React Native & Flutter development",
        "App maintenance & updates",
        "App Store optimization"
      ]
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      description: "User-centered designs that not only look beautiful but also provide exceptional user experiences.",
      features: [
        "User research & testing",
        "Wireframing & prototyping",
        "Visual design & branding",
        "Interaction design"
      ]
    },
    {
      icon: LayoutDashboard,
      title: "Systems Development",
      description: "Custom enterprise solutions and integrated software systems that streamline operations and boost efficiency.",
      features: [
        "Custom CRM & ERP solutions",
        "Database design & optimization",
        "Legacy system modernization",
        "Cloud-based solutions"
      ]
    },
    {
      icon: Users,
      title: "Digital Marketing",
      description: "Strategic digital marketing services to amplify your online presence and reach your target audience.",
      features: [
        "SEO & content marketing",
        "Social media management",
        "PPC & advertising campaigns",
        "Analytics & performance tracking"
      ]
    },
    {
      icon: Briefcase,
      title: "Branding",
      description: "Complete brand identity development and logo design services to establish a strong market presence.",
      features: [
        "Brand strategy & positioning",
        "Logo & visual identity design",
        "Brand guidelines",
        "Rebranding & refresh"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-ngc-dark">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden grid-background">
        {/* Background elements */}
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-white mb-6 opacity-0 animate-slide-down">
              Our <span className="text-ngc-blue">Services</span>
            </h1>
            <p className="text-xl text-gray-300 opacity-0 animate-slide-down animation-delay-200">
              We offer comprehensive digital solutions tailored to meet your unique business needs
              and help you stay ahead in the digital landscape.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-black/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-white mb-4 opacity-0 animate-slide-up">
              Our <span className="text-ngc-green">Process</span>
            </h2>
            <p className="text-gray-400 opacity-0 animate-slide-up animation-delay-200">
              We follow a structured approach to deliver solutions that exceed expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "We start by understanding your business, goals, and challenges through in-depth consultations."
              },
              {
                number: "02",
                title: "Planning",
                description: "Our team creates a detailed roadmap with timelines, deliverables, and technical specifications."
              },
              {
                number: "03",
                title: "Development",
                description: "We build your solution using the latest technologies, with regular updates and feedback cycles."
              },
              {
                number: "04",
                title: "Launch & Support",
                description: "After thorough testing, we deploy your solution and provide ongoing maintenance and support."
              }
            ].map((step, index) => (
              <div 
                key={index}
                className={`relative p-6 opacity-0 animate-slide-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-5xl font-bold text-ngc-green/20 absolute top-0 left-0">
                  {step.number}
                </div>
                <div className="relative z-10 pt-8">
                  <h3 className="text-white text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 w-8 h-[2px] bg-ngc-green/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
