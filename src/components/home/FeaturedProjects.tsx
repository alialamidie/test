
import { useState } from 'react';
import { Button } from '../ui/button';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const FeaturedProjects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Supermarket Management System",
      category: "System Development",
      image: "supermarket.jpg",
      description: "A system for recording and managing a supermarket."
    },
    {
      id: 2,
      title: "website for car washing",
      category: "UI/UX Design",
      image: "https://cdn.dribbble.com/userupload/43198594/file/original-4b656af85931361ba2a9ed8bb12e7834.png?resize=1024x768&vertical=center",
      description: "A modern and user-friendly website design for a car washing service, focusing on user experience."
    },
  ];

  const handleMouseEnter = (id: number) => {
    setActiveProject(id);
  };

  const handleMouseLeave = () => {
    setActiveProject(null);
  };

  return (
    <section className="section-padding bg-black/30 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-ngc-dark to-black/20 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-white mb-4 opacity-0 animate-slide-up">
            Featured <span className="text-ngc-blue">Projects</span>
          </h2>
          <p className="text-gray-400 opacity-0 animate-slide-up animation-delay-200">
            Explore our latest work and see how we help businesses achieve their digital goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`opacity-0 animate-slide-up group`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative overflow-hidden rounded-lg card-hover">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                  <span className="text-ngc-green text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className={`text-gray-300 mb-4 transition-opacity duration-300 ${
                    activeProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {project.description}
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <a href="/projects">View Project</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-slide-up animation-delay-800">
          <Button asChild variant="secondary" size="lg">
            <a href="/projects" className="flex items-center gap-2">
              View All Projects
              <span>→</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
