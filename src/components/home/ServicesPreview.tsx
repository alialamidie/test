
import { Code, Smartphone, LayoutDashboard, PenTool, Users, Briefcase } from 'lucide-react';
import { Button } from '../ui/button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <div 
      className={`bg-gray-900/50 border border-gray-800 rounded-lg p-6 flex flex-col items-center text-center transform opacity-0 animate-slide-up card-hover`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-ngc-green/20 to-ngc-blue/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-5">{description}</p>
      <Button asChild variant="outline" size="sm">
        <a href="/services">Learn More</a>
      </Button>
    </div>
  );
};

const ServicesPreview = () => {
  const services = [
    {
      icon: <Code className="w-7 h-7 text-ngc-green" />,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies.",
      delay: 100
    },
    {
      icon: <Smartphone className="w-7 h-7 text-ngc-blue" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      delay: 200
    },
    {
      icon: <PenTool className="w-7 h-7 text-ngc-green" />,
      title: "UI/UX Design",
      description: "User-centered designs that provide exceptional user experiences.",
      delay: 300
    },
    {
      icon: <LayoutDashboard className="w-7 h-7 text-ngc-blue" />,
      title: "Systems Development",
      description: "Custom enterprise solutions and integrated software systems.",
      delay: 400
    },
    {
      icon: <Users className="w-7 h-7 text-ngc-green" />,
      title: "Digital Marketing",
      description: "Strategic digital marketing services to amplify your online presence.",
      delay: 500
    },
    {
      icon: <Briefcase className="w-7 h-7 text-ngc-blue" />,
      title: "Branding",
      description: "Complete brand identity development and logo design services.",
      delay: 600
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ngc-dark via-black/50 to-ngc-dark z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-white mb-4 opacity-0 animate-slide-up">
            Our <span className="text-ngc-green">Services</span>
          </h2>
          <p className="text-gray-400 opacity-0 animate-slide-up animation-delay-200">
            We provide comprehensive digital solutions to help businesses thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-slide-up animation-delay-800">
          <Button asChild variant="secondary" size="lg">
            <a href="/services" className="flex items-center gap-2">
              View All Services
              <span>→</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
