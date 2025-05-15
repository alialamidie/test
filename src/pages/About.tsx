
import { Facebook, Instagram, Linkedin, Twitter, Code, BrainCircuit, Computer, Microchip } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen bg-ngc-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 relative overflow-hidden grid-background">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-ngc-dark via-ngc-dark to-black/80 z-0"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-white mb-6 opacity-0 animate-slide-down">
              About <span className="text-ngc-green">NextGenCode</span>
            </h1>
            <p className="text-xl text-gray-300 opacity-0 animate-slide-down animation-delay-200">
              We're a team of passionate developers, designers, and digital strategists
              dedicated to transforming ideas into powerful digital realities.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-16 relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Programming Animation */}
            <div className="opacity-0 animate-slide-up relative">
              <div className="w-full aspect-square relative">
                <div className="absolute w-full h-full flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-r from-ngc-green/5 to-ngc-blue/5 backdrop-blur-md rounded-lg flex flex-col items-center justify-center border border-white/10">
                    {/* Programming Animation */}
                    <div className="coding-animation relative w-4/5 h-4/5">
                      {/* Terminal Window */}
                      <div className="w-full h-full bg-black/80 rounded-lg border border-gray-700 overflow-hidden">
                        {/* Terminal Header */}
                        <div className="h-6 bg-gray-800 flex items-center px-3">
                          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <div className="text-xs text-gray-400 mx-auto">terminal</div>
                        </div>
                        
                        {/* Terminal Content */}
                        <div className="p-4 font-mono text-sm">
                          <div className="flex items-start mb-2 animate-typing overflow-hidden">
                            <span className="text-ngc-green mr-2">$</span>
                            <span className="text-gray-300">npm install next-gen-code</span>
                          </div>
                          <div className="text-gray-400 mb-2 animate-slide-up animation-delay-400">
                            Installing dependencies...
                          </div>
                          <div className="text-ngc-green mb-2 animate-slide-up animation-delay-600">
                            Success! NextGenCode installed.
                          </div>
                          <div className="flex items-start mb-2 animate-slide-up animation-delay-800">
                            <span className="text-ngc-green mr-2">$</span>
                            <span className="text-gray-300">next-gen-code --init</span>
                          </div>
                          <div className="text-gray-400 animate-slide-up animation-delay-1000">
                            Initializing NextGenCode project...
                          </div>
                        </div>
                      </div>
                      
                      {/* Animated Icons */}
                      <div className="absolute top-[-20px] right-[-20px] animate-float animation-delay-200">
                        <Code className="w-10 h-10 text-ngc-blue" />
                      </div>
                      <div className="absolute bottom-[-10px] left-[-10px] animate-float animation-delay-400">
                        <BrainCircuit className="w-8 h-8 text-ngc-green" />
                      </div>
                      <div className="absolute top-1/2 right-[-15px] animate-float animation-delay-600">
                        <Computer className="w-7 h-7 text-ngc-blue" />
                      </div>
                      <div className="absolute bottom-1/4 left-[-5px] animate-float animation-delay-800">
                        <Microchip className="w-6 h-6 text-ngc-green" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-ngc-green"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-ngc-blue"></div>
              </div>
            </div>
            
            {/* Right: Company info */}
            <div className="space-y-6 opacity-0 animate-slide-up animation-delay-200">
              <h2 className="text-3xl font-bold text-white">Who We Are</h2>
              <p className="text-gray-300">
                Founded in 2015, NextGenCode has grown from a small startup to a leading digital agency,
                working with businesses ranging from innovative startups to established enterprises.
              </p>
              <p className="text-gray-300">
                Our mission is to empower businesses with cutting-edge technology solutions that
                drive growth, enhance user experiences, and create lasting digital impact.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-bold text-white mb-3">Why Choose Us</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-ngc-green mr-2">✓</span>
                    <span className="text-gray-300">Expert team with diverse technical skills</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-ngc-green mr-2">✓</span>
                    <span className="text-gray-300">Tailored solutions for your unique challenges</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-ngc-green mr-2">✓</span>
                    <span className="text-gray-300">Commitment to innovation and quality</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-ngc-green mr-2">✓</span>
                    <span className="text-gray-300">Ongoing support and maintenance</span>
                  </li>
                </ul>
              </div>
              
              {/* Social Media Links */}
              <div className="pt-4">
                <h3 className="text-lg font-medium text-white mb-3">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-ngc-green hover:text-black transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-ngc-green hover:text-black transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-ngc-green hover:text-black transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-ngc-green hover:text-black transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
