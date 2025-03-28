
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background on scroll
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Countdown", href: "#countdown" },
    { name: "Gallery", href: "#gallery" },
    { name: "Guestbook", href: "#guestbook" }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-serif text-xl font-bold">
          <span className="bg-gradient-to-r from-birthday-pink to-birthday-purple bg-clip-text text-transparent">
            Hala<span className="text-birthday-purple">21</span>
          </span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className={`nav-link font-medium transition-all duration-300 relative ${
                activeSection === item.href.substring(1) 
                  ? "text-birthday-pink" 
                  : "text-gray-700 hover:text-birthday-pink"
              }`}
            >
              {item.name}
              <span 
                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-birthday-pink transform origin-left transition-transform duration-300 ${
                  activeSection === item.href.substring(1) ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg py-4 px-4 transition-all duration-300 z-50">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className={`font-medium py-2 transition-colors ${
                  activeSection === item.href.substring(1) 
                    ? "text-birthday-pink" 
                    : "text-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
