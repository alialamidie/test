
import { useState } from 'react';
import { Button } from '../ui/button';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  index: number;
}

const ProjectCard = ({ title, category, image, description, technologies, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`group rounded-lg overflow-hidden transform opacity-0 animate-slide-up relative card-hover`}
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 flex flex-col justify-end">
        <div className="transform transition-transform duration-500">
          <span className="text-ngc-green text-sm font-medium mb-2 inline-block">
            {category}
          </span>
          <h3 className="text-white text-2xl font-bold mb-2">
            {title}
          </h3>
          <p className={`text-gray-300 mb-4 max-w-md transition-all duration-300 ${
            isHovered ? 'opacity-100 max-h-24' : 'opacity-0 max-h-0'
          } overflow-hidden`}>
            {description}
          </p>
          <div className={`flex flex-wrap gap-2 mb-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 max-h-24' : 'opacity-0 max-h-0'
          } overflow-hidden`}>
            {technologies.map((tech, i) => (
              <span 
                key={i} 
                className="text-xs bg-ngc-blue/20 text-ngc-blue px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
