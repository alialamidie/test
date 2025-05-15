import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProjectCard from '../components/projects/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Supermarket Management System",
      category: "System Development",
      tags: ["system"],
      image: "supermarket.jpg",
      description: "A system for recording and managing a supermarket.",
      technologies: ["React Native", "Firebase", "Swift", "Kotlin"]
    },
    {
      title: "website for car washing",
      category: "UI/UX Design",
      tags: ["design"],
      image: "https://cdn.dribbble.com/userupload/43198594/file/original-4b656af85931361ba2a9ed8bb12e7834.png?resize=1024x768&vertical=center",
      description: "A modern and user-friendly website design for a car washing service, focusing on user experience.",
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"]
    },
  ];

  return (
    <div className="min-h-screen bg-ngc-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden grid-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-white mb-6 opacity-0 animate-slide-down">
              Our <span className="text-ngc-green">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 opacity-0 animate-slide-down animation-delay-200">
              Explore our portfolio of successful projects across various industries and technologies.
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
                image={project.image}
                description={project.description}
                technologies={project.technologies}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-black/30">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-ngc-green/10 to-ngc-blue/10 rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-white text-3xl font-bold mb-4">Ready to Build Your Next Project?</h2>
            <p className="text-gray-300 mb-6">
              Contact our team to discuss how we can help bring your ideas to life with our expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="btn btn-primary py-2 px-6 rounded-md"
              >
                Get Started
              </a>
              <a 
                href="/services" 
                className="btn btn-outline py-2 px-6 rounded-md"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
