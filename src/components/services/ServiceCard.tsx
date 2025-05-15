
import { LucideIcon } from 'lucide-react';
import { Button } from '../ui/button';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, features, index }: ServiceCardProps) => {
  return (
    <div 
      className={`bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden transform opacity-0 animate-slide-up hover:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all duration-500`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="p-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-ngc-green/20 to-ngc-blue/20 flex items-center justify-center mb-5">
          <Icon className="w-8 h-8 text-ngc-green" />
        </div>
        <h3 className="text-white text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="text-ngc-green mr-2 font-bold">✓</span>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        <Button asChild variant="default" size="default">
          <a href="/contact">Get Started</a>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
