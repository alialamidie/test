import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-ngc-dark/90 glass shadow-md py-3' : 'py-5'}`}>
      <div className="container-custom flex items-center justify-between pl-0 pr-4">
        <Link to="/" className="relative z-50 flex items-center">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl hidden sm:block">NextGenCode</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active-nav-link' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active-nav-link' : ''}`}>About</Link>
          <Link to="/services" className={`nav-link ${isActive('/services') ? 'active-nav-link' : ''}`}>Services</Link>
          <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active-nav-link' : ''}`}>Projects</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active-nav-link' : ''}`}>Contact</Link>
          <Link to="/contact" className="btn btn-primary py-2 px-4 ml-4 rounded-md">Get Quote</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 z-50 relative"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-ngc-dark/95 backdrop-blur-lg md:hidden transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            <Link to="/" className="text-white hover:text-ngc-green transition-colors">Home</Link>
            <Link to="/about" className="text-white hover:text-ngc-green transition-colors">About</Link>
            <Link to="/services" className="text-white hover:text-ngc-green transition-colors">Services</Link>
            <Link to="/projects" className="text-white hover:text-ngc-green transition-colors">Projects</Link>
            <Link to="/contact" className="text-white hover:text-ngc-green transition-colors">Contact</Link>
            <Link to="/contact" className="btn btn-primary py-2 px-6 rounded-md mt-4">Get Quote</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
