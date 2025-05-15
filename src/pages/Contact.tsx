
import { useState } from 'react';
import { Webcam, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-ngc-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden grid-background">
        {/* Background elements */}   
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-white mb-6 opacity-0 animate-slide-down">
              Get in <span className="text-ngc-blue">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 opacity-0 animate-slide-down animation-delay-200">
              We'd love to hear from you. Contact us for any inquiries or to discuss your next project.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 md:p-8 opacity-0 animate-slide-up">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ngc-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-400 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ngc-green"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-400 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ngc-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ngc-green"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Systems Development">Systems Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ngc-green"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary py-3 px-8 rounded-md w-full mt-6 relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-full bg-ngc-blue transition-all duration-300 group-hover:w-full"></span>
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="opacity-0 animate-slide-up animation-delay-200">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ngc-green/20 to-ngc-blue/20 flex items-center justify-center mr-4">
                    <Webcam className="w-5 h-5 text-ngc-green" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-medium mb-1">Office Location</h3>
                    <p className="text-gray-400">123 Tech Boulevard<br />Innovation District<br />San Francisco, CA 94107</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ngc-green/20 to-ngc-blue/20 flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-ngc-green" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-medium mb-1">Phone</h3>
                    <p className="text-gray-400">(964) 777 093 3664<br />Mon-Fri 9am to 6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ngc-green/20 to-ngc-blue/20 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-ngc-green" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-medium mb-1">Email</h3>
                    <p className="text-gray-400">info@nextgencode.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-white text-lg font-medium mb-4">Business Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-white">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
